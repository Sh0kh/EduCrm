import { Outlet } from "react-router-dom";
import SideBard from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/NavBar";

export default function MainLayout() {
    return (
        <div className="flex w-full min-h-screen">
            <SideBard />
            <div className="ml-[280px] w-full">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}