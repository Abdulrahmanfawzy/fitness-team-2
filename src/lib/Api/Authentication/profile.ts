import axiosInstance from "@/lib/Axios/axiosInstance";

export const getProfile = async () => {
  const res = await axiosInstance.get("/api/landing/profile");
  return res.data;
};

export const getProfileHeader = async () => {
  const res = await axiosInstance.get("/api/landing/profile");
  return res.data;
};

export const getProfileOverview = async () => {
  const res = await axiosInstance.get("/api/landing/uploadImage");
  return res.data;
};

export const getPersonalInfor = async () => {
  const res = await axiosInstance.get("/api/landing/profile");
  return res.data;
};

export const getUpcomingSessions = async () => {
  const res = await axiosInstance.get("/api/landing/sessions");
  return res.data;
};

export const getMyPackage = async () => {
  const res = await axiosInstance.get("/api/landing/packages");
  return res.data;
};

export const getProgressActivity = async () => {
  const res = await axiosInstance.get("/api/landing/progress-activity");
  return res.data;
};

export const getBillingPage = async () => {
  const res = await axiosInstance.get("/api/landing/payment-methods");
  return res.data;
};

export const getChangePassword = async () => {
  const res = await axiosInstance.get("/api/landing/profile");
  return res.data;
};