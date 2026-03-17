import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-black sticky top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto py-4 px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white">
          Elite<span className="text-orange">Sync</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-2 text-base font-bold">
          <Link to="/" className="text-white hover:text-orange hover:scale-105 transform transition-all px-5 py-2 duration-300">Home</Link>
          <Link to="/trainers" className="text-white hover:text-orange hover:scale-105 transform transition-all px-5 py-2 duration-300">Trainers</Link>
          <Link to="/packages" className="text-orange bg-orange/10 border border-orange/30 px-5 py-2 rounded-sm hover:bg-orange/20 hover:scale-105 transform duration-300 font-extrabold tracking-tight">Packages</Link>
          <Link to="/contact" className="text-white hover:text-orange hover:scale-105 transform transition-all px-5 py-2 duration-300">Contact</Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/sign-up" className="bg-orange text-white px-10 py-3 rounded-sm font-bold text-sm hover:scale-105 transition-all duration-300 shadow-lg shadow-orange/20">
            Sign up
          </Link>
          <Link to="/login" className="border border-orange text-white px-10 py-3 rounded-sm font-bold text-sm hover:bg-orange/5 hover:scale-105 hover:text-white transition-all duration-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;