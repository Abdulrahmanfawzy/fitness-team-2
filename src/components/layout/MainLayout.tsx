import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";

function MainLayout() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">

      <NavBar />

      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 max-w-7xl mx-auto">
        <Outlet />
      </div>

      <Footer />

    </div>
  );
}

export default MainLayout;
