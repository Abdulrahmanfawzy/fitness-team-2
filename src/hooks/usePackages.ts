import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";

export type PackageFeatures = {
  progress_tracking: boolean;
  nutrition_plan: boolean;
  priority_booking: boolean;
  full_access: boolean;
  [key: string]: boolean;
};

export type Package = {
  id: number;
  title: string;
  description: string;
  sessions: number;
  duration_days: number;
  features: PackageFeatures;
  is_recommended?: boolean;
};

export type UiPackage = {
  id: number;
  title: string;
  price: string;
  duration: string;
  sessions: string;
  description: string;
  features: string[];
  isRecommended: boolean;
};

const usePackages = () => {
  const { data: packages, isLoading: loading, error } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const response = await api.get<{ data: Package[] }>("api/packages");
      
      // Handle both flat array and { data: [...] } structure
      const rawData = response.data.data || response.data;
      
      if (!Array.isArray(rawData)) {
        console.error("Unexpected API response format:", response.data);
        return [];
      }

      return rawData.map((pkg: Package) => {
        const features: string[] = [];
        
        // Map the boolean features object to a string array for the UI
        if (pkg.features) {
          if (pkg.features.progress_tracking) features.push("Progress Tracking");
          if (pkg.features.nutrition_plan) features.push("Nutrition Plan Included");
          if (pkg.features.priority_booking) features.push("Priority Scheduling");
          if (pkg.features.full_access) features.push("Full Session Access");
        }

        return {
          id: pkg.id,
          title: pkg.title || "Package",
          price: "",
          duration: pkg.duration_days ? `${pkg.duration_days} DAYS` : "60 MIN",
          sessions: pkg.sessions ? `${pkg.sessions} ${Number(pkg.sessions) === 1 ? 'SESSION' : 'SESSIONS'}` : "0 SESSIONS",
          description: pkg.description || "",
          features: features.length > 0 ? features : ["Basic Features"],
          isRecommended: !!pkg.is_recommended || (pkg.title || "").toLowerCase().includes("monthly"),
        };
      });
    },
  });

  const errorMessage = error instanceof Error ? error.message : null;

  return { 
    packages: Array.isArray(packages) ? packages : [], 
    loading, 
    error: errorMessage 
  };
};

export default usePackages;
