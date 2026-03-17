import { ResetPasswordSchema } from "@/lib/schemas/ForgotPassword";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const navigate = useNavigate()

  async function onSubmit(data) {
    console.log(data);
    navigate("/complete-profile")
  }
  return (
    <form
      className=" px-5 py-7 z-10 text-white  border border-orange rounded-2xl w-[95%] md:w-[50%] lg:w-[35%]  bg-black/70 shadow-2xl flex flex-col items-center justify-center gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className=" text-3xl font-bold ">Reset password?</h2>
      <h2 className=" text-lg text-gray-400">Please set your new password</h2>
      <div className=" w-full mt-6">
        <h2 className="text-sm text-gray-300 mb-1">New Password</h2>
        <Input
          {...register("password")}
          aria-invalid={!!formState.errors.password}
          className=" bg-input border-olive-700 border "
          id="fieldgroup-email"
          type="password"
          placeholder="Enter your New Password"
        />
        {formState.errors.password?.message && (
          <p role="alert" className="text-red-500 text-xs mt-1">
            {formState.errors.password?.message}
          </p>
        )}
      </div>
      <div className=" w-full">
        <h2 className="text-sm text-gray-300 mb-1">Re-enter Password</h2>
        <Input
          {...register("rePassword")}
          aria-invalid={!!formState.errors.rePassword}
          className=" bg-input border-olive-700 border "
          id="fieldgroup-email"
          type="password"
          placeholder="Re-enter your New Password"
        />
        {formState.errors.rePassword?.message && (
          <p role="alert" className="text-red-500 text-xs mt-1">
            {formState.errors.rePassword?.message}
          </p>
        )}
      </div>

      <Button  type="submit" className=" w-full bg-orange mt-2">
        Reset
      </Button>
    </form>
  );
}

export default ResetPassword;
