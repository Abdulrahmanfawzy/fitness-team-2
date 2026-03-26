import type { RegisterFormData } from "@/lib/types/Authentication";
import type { RegisterResponse } from "@/lib/types/Authentication";
import axiosInstance from "@/lib/Axios/axiosInstance";
import type { sinInResponse } from "@/lib/types/Authentication";
import type { SinInFormData } from "@/lib/types/Authentication";

export async function SendSignUp(
  params: RegisterFormData,
): Promise<RegisterResponse> {
  try {
    const { data } = await axiosInstance.post<RegisterResponse>(
      "/api/register",
      params,
    );
    return data;
  } catch (error: any) {
    return error.response.data;
  }
}


export async function SendSignIn(
  params: SinInFormData,
): Promise<sinInResponse> {
  try {
    const { data } = await axiosInstance.post<sinInResponse>(
      "/api/login",
      params,
    );
    return data;
  } catch (error: any) {
    return error.response.data;
  }
}



