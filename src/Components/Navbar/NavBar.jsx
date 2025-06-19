import { useState, useEffect } from "react";
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon, ArrowsPointingOutIcon, ArrowsPointingInIcon } from "@heroicons/react/24/solid";

export default function Navbar({ onToggleSidebar, isSidebarCollapsed }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Fullscreen toggle function
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  return (
    <nav className="w-full flex items-center justify-between px-4 py-2 bg-white shadow-sm sticky top-0 z-50">
      <button 
        onClick={onToggleSidebar}
        className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors mr-3"
        aria-label="Toggle sidebar"
      >
        {isSidebarCollapsed ? (
          <Bars3Icon className="h-6 w-6 text-white" />
        ) : (
         <Bars3Icon className="h-6 w-6 text-white" />
        )}
      </button>

      <div className="flex-1 max-w-xl">
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center space-x-4 ml-4">
        <button
          onClick={toggleFullScreen}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          title={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullScreen ? (
            <ArrowsPointingInIcon className="h-5 w-5 text-gray-600" />
          ) : (
            <ArrowsPointingOutIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <button className="flex items-center space-x-2 focus:outline-none">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <span className="text-sm font-medium text-gray-600">MA</span>
              </div>
              <span className="hidden md:inline-block text-sm font-medium text-gray-700">Muhammadaziz</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}