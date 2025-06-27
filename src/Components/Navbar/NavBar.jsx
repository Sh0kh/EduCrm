import { useState, useEffect, useRef } from "react";
import logo from '../UI/logo.png';
import SmallLogo from '../../Images/photo_2025-06-21_22-42-35.jpg';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  ChevronDownIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar({ mobileActive, isSidebarCollapsed, setActive, active }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const exitToLogin = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="w-full flex items-center justify-between px-2 py-2 bg-white fixed left-0 top-0 z-50  transition-all duration-500 ease-in-out ">
      <div className={`flex items-center gap-[10px] max-w-xl ${active ? 'gap-[10px]' : 'gap-[40px]'} transition-all duration-500 ease-in-out`}>
        
        <div className="flex items-center justify-center gap-2 transition-all duration-500 ease-in-out">

          <img
            src={logo}
            alt="logo"
            className="mx-auto ml-[40px] w-[150px] hidden sm:block transform transition-all duration-500 ease-in-out scale-100 opacity-100"
          />

          <img
            src={SmallLogo}
            alt="mobile-logo"
            className="w-[50px] ml-[15px] sm:hidden block transform transition-all duration-500 ease-in-out scale-100 opacity-100"
          />
        </div>

        <button
          onClick={setActive}
          className="p-2 rounded-lg hidden lg:block bg-blue-600 hover:bg-blue-700 transition-colors mr-3"
          aria-label="Toggle sidebar"
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={mobileActive}
          className="p-2 rounded-lg block lg:hidden bg-blue-600 hover:bg-blue-700 transition-colors mr-3"
          aria-label="Toggle sidebar"
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>

        <div className="relative flex items-center md:block hidden">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center space-x-4 ml-4">
        <button
          onClick={toggleFullScreen}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors md:flex hidden"
          title={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullScreen ? (
            <ArrowsPointingInIcon className="h-5 w-5 text-gray-600" />
          ) : (
            <ArrowsPointingOutIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>

        {/* User Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <UserIcon className="w-5 h-5 text-gray-600" />
            </div>
            <ChevronDownIcon
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isDropdownOpen && (
            <>
              <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsDropdownOpen(false)} />
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                

                <div className="py-2">
                  <button className="w-full flex items-center px-6 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-150 group">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center mr-3 transition-colors duration-150">
                      <UserIcon className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">Profil</div>
                      <div className="text-xs text-gray-400">Shaxsiy ma'lumotlar</div>
                    </div>
                  </button>
                </div>

                <div className="border-t border-gray-100">
                  <button
                    onClick={exitToLogin}
                    className="w-full flex items-center px-6 py-3 text-left text-red-600 hover:bg-red-50 transition-all duration-150 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-50 group-hover:bg-red-100 flex items-center justify-center mr-3 transition-colors duration-150">
                      <ArrowRightOnRectangleIcon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <div className="font-medium">Chiqish</div>
                      <div className="text-xs text-red-400">Hisobdan chiqish</div>
                    </div>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Custom animation style */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
