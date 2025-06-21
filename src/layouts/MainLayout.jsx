import { Outlet } from "react-router-dom";
import SideBard from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/NavBar";
import { useState } from "react";

export default function MainLayout() {
    const [active, setActive] = useState(false);

    return (
        <div className="flex w-full min-h-screen bg-gray-50">
            <SideBard active={active} />

            <div
                className={`transition-all duration-300 ease-in-out w-full mt-[60px] ${!active ? "ml-[280px]" : "ml-[100px]"
                    }`}
            >
                <Navbar setActive={() => setActive(!active)} />
                <Outlet />
            </div>
        </div>
    );
}
