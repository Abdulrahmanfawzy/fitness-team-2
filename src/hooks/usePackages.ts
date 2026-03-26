import { useState, useEffect } from "react";
import api from "@/lib/axios";

export type Package = {
  id: number;
  title: string;
  price: string;
  duration: string;
  sessions: string;
  features: {
    progress_tracking: boolean;
    nutrition_plan: boolean;
    priority_booking: boolean;
    full_access: boolean;
    [key: string]: boolean;
  };
  isRecommended?: boolean;
};

export type UiPackage = {
  id: number;
  title: string;
  price: string;
  duration: string;
  sessions: string;
  features: string[];
  isRecommended: boolean;
};

const usePackages = () => {
  const [packages, setPackages] = useState<UiPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const response = await api.get<{ data: Package[] }>("api/packages");
        
        // Handle both flat array and { data: [...] } structure
        const rawData = response.data.data || response.data;
        
        if (Array.isArray(rawData)) {
          const mappedPackages: UiPackage[] = rawData.map((pkg: any) => {
            const features: string[] = [];
            
            // Map the boolean features object to a string array for the UI
            if (pkg.features) {
              if (pkg.features.progress_tracking) features.push("Progress Tracking");
              if (pkg.features.nutrition_plan) features.push("Nutrition Plan Included");
              if (pkg.features.priority_booking) features.push("Priority Scheduling");
              if (pkg.features.full_access) features.push("Full Session Access");
            }

            // Hardcoded mapping for prices if not provided by API
            const getPriceByTitle = (title: string) => {
              const lowerTitle = title.toLowerCase();
              if (lowerTitle.includes("single")) return "EGP 150";
              if (lowerTitle.includes("monthly")) return "EGP 1000";
              if (lowerTitle.includes("premium")) return "EGP 3000";
              return "EGP 0";
            };

            return {
              id: pkg.id,
              title: pkg.title || "Package",
              price: pkg.price || getPriceByTitle(pkg.title || ""),
              duration: pkg.duration_days ? `${pkg.duration_days} DAYS` : "60 MIN",
              sessions: pkg.sessions ? `${pkg.sessions} SESSIONS` : "0 SESSIONS",
              features: features.length > 0 ? features : ["Basic Features"],
              isRecommended: !!pkg.is_recommended || !!pkg.isRecommended || (pkg.title || "").toLowerCase().includes("monthly"),
            };
          });
          
          setPackages(mappedPackages);
        } else {
          setPackages([]);
          console.error("Unexpected API response format:", response.data);
        }
        setError(null);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Failed to fetch packages.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return { packages, loading, error };
};

export default usePackages;
