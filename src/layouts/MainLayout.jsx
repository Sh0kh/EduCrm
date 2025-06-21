import { Outlet } from "react-router-dom";
import SideBard from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/NavBar";
import { useState } from "react";

export default function MainLayout() {

    const [active, setActive] = useState(false)
    return (
        <div className="flex w-full min-h-screen bg-gray-50">
            <SideBard />
            <div className="ml-[280px] w-full mt-[60px] ">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}