import { Outlet } from "react-router-dom";
import SideBard from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/NavBar";
import { useState } from "react";

export default function MainLayout() {
    const [active, setActive] = useState(false);
    const [MobileActive, setMobileActive] = useState(false)
    return (
        <div className="flex w-full overflow-hidden bg-[#F6F6F9]">
            <SideBard onClose={() => setMobileActive(false)} mobileActive={MobileActive} active={active} />
            <div
                className={`transition-all duration-300 ease-in-out w-full mt-[60px] ${!active ? "ml-[0px] lg:ml-[255px]" : "ml-[0px] lg:ml-[90px]"
                    }`}
            >
                <Navbar mobileActive={() => setMobileActive(!MobileActive)} active={active} setActive={() => setActive(!active)} />
                <Outlet />
            </div>
        </div>
    );
}
