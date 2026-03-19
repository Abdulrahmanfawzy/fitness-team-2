import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";

function MainLayout() {
  return (
    <div>
      <div className=" fixed top-0 left-0 right-0 z-100">
        <NavBar />
      </div>

      <div className="mt-16 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
