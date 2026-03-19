import { Outlet } from "react-router-dom";
import gymbackground from "../../../public/gymbackground.png";
import "../../index.css"

function AuthenticationLayout() {
  return (
    <div
      style={{ backgroundImage: `url(${gymbackground})` }}
      className="relative w-screen overflow-hidden h-screen flex items-center justify-center bg-center bg-cover before:absolute before:inset-0 before:bg-black/50"
    >
      <Outlet />
    </div>
  );
}

export default AuthenticationLayout;
