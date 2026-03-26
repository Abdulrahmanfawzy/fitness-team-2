import { Input } from "@/components/ui/input";
import shareImage from "./icones/share.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import rightIcone from "./icones/rigtht.png";
import GoogleIcone from "./icones/proicons_google.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/schemas/loginValidation";
import { useNavigate } from "react-router-dom";
import { SendSignIn } from "@/lib/Api/Authentication/Authentication";
import type { SinInFormData } from "@/lib/types/Authentication";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { useContext } from "react";
import AuthenticationCntext from "@/lib/Cntext/AuthenticationCntext";

function Login() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { setalrtEror } = useOutletContext();
  const navigate = useNavigate();
  const [loding, setLoding] = useState(false);
  let { setIsLogedIn } = useContext(AuthenticationCntext);

  async function onSubmit(data: SinInFormData) {
    setLoding(true);
    console.log(data);
    const respons = await SendSignIn(data);

    if (respons.status === true) {
      setLoding(false);
      setIsLogedIn(respons.token);
      localStorage.setItem("token", respons.token);
      navigate("/complete-profile");
    } else {
      setLoding(false);
      setalrtEror(respons.message);
    }
  }

  return (
    <form
      className=" px-5 py-7 z-10 text-white  border border-orange rounded-2xl w-[95%] md:w-[50%] lg:w-[35%]  bg-black/70 shadow-2xl flex flex-col items-center justify-center gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <img
        className=" w-10 h-10 bg-orange-700/50 p-2 rounded-md"
        src={shareImage}
        alt=""
      />
      <h2 className=" text-3xl font-bold ">Welcome Back!</h2>
      <h2 className=" text-lg text-gray-400">
        Login to your account to continue.
      </h2>

      <div className=" w-full">
        <h2 className="text-sm text-gray-300 mb-1">Email</h2>
        <Input
          {...register("email")}
          aria-invalid={!!formState.errors.email}
          className=" bg-input border-olive-700 border"
          id="fieldgroup-email"
          type="email"
          placeholder="Enter your email"
        />
        {formState.errors.email?.message && (
          <p role="alert" className="text-red-500 text-xs mt-1">
            {formState.errors.email?.message}
          </p>
        )}
      </div>

      <div className=" w-full">
        <h2 className="text-sm text-gray-300 mb-1">Password</h2>
        <Input
          {...register("password")}
          aria-invalid={!!formState.errors.password}
          className=" bg-input border-olive-700 border "
          id="fieldgroup-email"
          type="password"
          placeholder="Enter your password"
        />
        {formState.errors.password?.message && (
          <p role="alert" className="text-red-500 text-xs mt-1">
            {formState.errors.password?.message}
          </p>
        )}
      </div>
      <Link
        className="text-orange text-right font-bold w-full"
        to={"/forgot-password"}
      >
        Forgot Password
      </Link>
      <div className=" w-full my-2 text-center">
        <Button disabled={loding} type="submit" className=" w-full bg-orange">
          {loding ? (
            <Spinner className="size-6" />
          ) : (
            <>
              Login <img src={rightIcone} alt="" />
            </>
          )}
        </Button>

        <h2 className=" mt-1 text-gray-100 text-sm font-semibold">
          Don’t have an account?{" "}
          <Link to={"/sign-up"} className="text-orange">
            Sign up
          </Link>
        </h2>
      </div>
      <div className=" flex items-center text-sm text-gray-300 gap-1 w-full">
        <span className=" border-b border-olive-700 grow "></span>
        <p className="w-fit">Or Login with</p>
        <span className=" border-b border-olive-700 grow"></span>
      </div>
      <Button type="button" className=" w-full bg-input">
        <img src={GoogleIcone} alt="" />
      </Button>
    </form>
  );
}

export default Login;
