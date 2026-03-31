import axiosInstance from "@/lib/Axios/axiosInstance";

export const getProfile = async () => {
  const res = await axiosInstance.get("/api/profile");
  return res.data;
};

export const getProfileHeader = async () => {
  const res = await axiosInstance.get("/api/profile");
  return res.data;
};

export const getProfileOverview = async () => {
  const upload = await axiosInstance.get("/api/profile/upload-image");
  const remove = await axiosInstance.get("/api/profile/removeImage");

  return {
    uploadimage: upload.data,
    removeimage: remove.data,
  };
};

export const getPersonalInfor = async () => {
  const res = await axiosInstance.get("/api/profile/fitness-profile");
  return res.data;
};

export const getUpcomingSessions = async () => {
  const res = await axiosInstance.get("/api/profile/sessions");
  return res.data;
};

export const getMyPackage = async () => {
  const res = await axiosInstance.get("/api/profile/packages");
  return res.data;
};

export const getProgressActivity = async () => {
  const res = await axiosInstance.get("/api/profile/progress-activity");
  return res.data;
};

export const getBillingPage = async () => {
  const res = await axiosInstance.get("/api/profile/payment-methods");
  return res.data;
};

export const getChangePassword = async () => {
  const res = await axiosInstance.get("/api/profile");
  return res.data;
};