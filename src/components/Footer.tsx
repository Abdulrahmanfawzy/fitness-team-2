import { Instagram, Facebook, Send } from "lucide-react";
import { FaXTwitter, FaTiktok, FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div className="space-y-6">
          <div className="text-3xl font-extrabold uppercase tracking-tighter">
            Elite<span className="text-orange">Sync</span>
          </div>
          <p className="text-text-secondary text-lg leading-tight max-w-sm">
            Elite personal training for peak performance. Transform your body, elevate your mindset.
          </p>
          <div className="flex space-x-3">
            <Link to="#" className="w-10 h-10 flex items-center justify-center bg-[#222] border border-white/10 rounded-sm hover:bg-orange hover:border-orange hover:scale-105 transform transition-all duration-300 group">
              <Instagram size={20} className="text-white group-hover:text-white transition-colors" />
            </Link>
            <Link to="#" className="w-10 h-10 flex items-center justify-center bg-[#222] border border-white/10 rounded-sm hover:bg-orange hover:border-orange hover:scale-105 transform transition-all duration-300 group">
              <FaTiktok size={20 } className="text-white group-hover:text-white transition-colors" />
            </Link>
            <Link to="#" className="w-10 h-10 flex items-center justify-center bg-[#222] border border-white/10 rounded-sm hover:bg-orange hover:border-orange hover:scale-105 transform transition-all duration-300 group">
              <Facebook size={20} className="text-white group-hover:text-white transition-colors" />
            </Link>
            <Link to="#" className="w-10 h-10 flex items-center justify-center bg-[#222] border border-white/10 rounded-sm hover:bg-orange hover:border-orange hover:scale-105 transform transition-all duration-300 group">
              <FaXTwitter size={20} className="text-white group-hover:text-white transition-colors" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-black mb-8 text-white">Quick Links</h4>
          <ul className="space-y-2 text-white text-lg leading-tight">
            <li><Link to="/" className="hover:text-orange transition-all duration-300">Home</Link></li>
            <li><Link to="/trainers" className="hover:text-orange transition-all duration-300">Our Trainers</Link></li>
            <li><Link to="/packages" className="hover:text-orange transition-all duration-300">Packages</Link></li>
            <li><Link to="#" className="hover:text-orange transition-all duration-300">Book Session</Link></li>
            <li><Link to="/contact" className="hover:text-orange transition-all duration-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Specialties */}
        <div>
          <h4 className="text-xl font-black mb-8 text-white">Specialties</h4>
          <ul className="space-y-2 text-white text-lg leading-tight">
            <li><Link to="#" className="hover:text-orange transition-all duration-300">Strength Training</Link></li>
            <li><Link to="#" className="hover:text-orange transition-all duration-300">HIIT & Cardio</Link></li>
            <li><Link to="#" className="hover:text-orange transition-all duration-300">Yoga & Mindfulness</Link></li>
            <li><Link to="#" className="hover:text-orange transition-all duration-300">Sports Performance</Link></li>
            <li><Link to="#" className="hover:text-orange transition-all duration-300">Functional Fitness</Link></li>
            <li><Link to="#" className="hover:text-orange transition-all duration-300">Women's Fitness</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-black mb-8 text-white">Contact</h4>
          <ul className="space-y-2 text-white text-lg mb-8 leading-tight">
            <li className="flex items-center space-x-4">
              <FaLocationDot size={20} className="text-text-secondary shrink-0" />
              <span>Egypt</span>
            </li>
            <li className="flex items-center space-x-4">
              <FaEnvelope size={20} className="text-text-secondary shrink-0" />
              <span>hello@elitesync.com</span>
            </li>
            <li className="flex items-center space-x-4">
              <FaPhone size={20} className="text-text-secondary shrink-0" />
              <span>+20 123 456 7890</span>
            </li>
          </ul>
          <div className="flex items-center space-x-2 max-w-[240px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="grow bg-[#222] border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-orange transition-colors min-w-0"
            />
            <button className="p-2.5 bg-orange rounded-lg hover:bg-opacity-90 hover:scale-105 transform transition-all shrink-0">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-8 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-base text-text-secondary space-y-6 md:space-y-0 text-center md:text-left">
        <p className="font-medium">© 2026 EliteSync. All rights reserved.</p>
        <div className="flex space-x-12">
          <Link to="#" className="hover:text-orange transition-all duration-300">Privacy</Link>
          <Link to="#" className="hover:text-orange transition-all duration-300">Terms of Service</Link>
          <Link to="#" className="hover:text-orange transition-all duration-300">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
