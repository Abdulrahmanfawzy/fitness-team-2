import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/Axios/axiosInstance";
import type { Package, UiPackage } from "@/types/package";

const usePackages = () => {
  const { data: packages, isLoading: loading, error } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const response = await axiosInstance.get<{ data: Package[] }>("/api/packages");
      
      console.log("API response:", response.data);
      
      // Handle different response structures
      let rawData: Package[] = [];
      
      if (Array.isArray(response.data)) {
        rawData = response.data;
      } else if (response.data && Array.isArray(response.data.data)) {
        rawData = response.data.data;
      } else if (response.data && typeof response.data === 'object') {
        // Try to find an array in the response
        const possibleArray = Object.values(response.data).find(val => Array.isArray(val));
        if (possibleArray) rawData = possibleArray as Package[];
      }
      
      console.log("Parsed rawData:", rawData);
      
      if (!Array.isArray(rawData) || rawData.length === 0) {
        console.error("Unexpected API response format or empty data:", response.data);
        return [];
      }

      return rawData.map((pkg: any): UiPackage => {
        const features: string[] = [];
        
        // Handle features as object or direct booleans on pkg
        const feat = pkg.features || pkg;
        
        // Map the boolean features to string array for the UI
        // Support both snake_case and camelCase field names
        if (feat.progress_tracking || feat.progressTracking) features.push("Progress Tracking");
        if (feat.nutrition_plan || feat.nutritionPlan) features.push("Nutrition Plan Included");
        if (feat.priority_booking || feat.priorityBooking) features.push("Priority Scheduling");
        if (feat.full_access || feat.fullAccess) features.push("Full Session Access");
        
        console.log("Package:", pkg.title, "Features:", features, "Raw features:", pkg.features);

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
