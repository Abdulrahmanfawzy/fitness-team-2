import { NavLink } from "react-router-dom";
import "../index.css";
import { BellIcon } from "lucide-react";
import { UserIcon } from "lucide-react";
import { MenuIcon } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";

import { Link } from "react-router-dom";
import { XIcon } from "lucide-react";

function NavBar() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className=" bg-gray-950 h-16 flex items-center justify-center border-b border-b-gray-900">
      <div className="container mx-auto px-5 flex items-center justify-between ">
        <h2 className="text-2xl font-bold text-white">
          Elite<span className="text-orange">Sync</span>
        </h2>
        <div className="  items-center justify-baseline gap-5 hidden md:flex">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange p-1 rounded-md bg-orange-600/20"
                : "text-gray-200 font-medium"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange p-1 rounded-md bg-orange-600/20"
                : "text-gray-200 font-medium"
            }
            to={"/trainers"}
          >
            Trainers
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange p-1 rounded-md bg-orange-600/20"
                : "text-gray-200 font-medium"
            }
            to={"/packages"}
          >
            Packages
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange p-1 rounded-md bg-orange-600/20"
                : "text-gray-200 font-medium"
            }
            to={"/contact"}
          >
            Contact
          </NavLink>
        </div>
        <div className="items-center gap-4 hidden md:flex">
          <Link to={"/profile"}>
            <UserIcon className=" text-orange" size={25} />
          </Link>
          <Link to={"/notifications"}>
            <BellIcon className=" text-orange" size={25} />
          </Link>
        </div>

        {openSideBar ? (
          <XIcon
            onClick={() => setOpenSideBar(false)}
            className=" text-gray-50 block md:hidden cursor-pointer active:scale-105"
            size={30}
          />
        ) : (
          <MenuIcon
            onClick={() => setOpenSideBar(true)}
            className=" text-gray-50 block md:hidden cursor-pointer active:scale-105"
            size={30}
          />
        )}

        <Sidebar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      </div>
    </div>
  );
}

export default NavBar;
