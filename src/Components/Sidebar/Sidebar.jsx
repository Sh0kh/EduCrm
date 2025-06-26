import {
    ChartBarIcon,
    ChartPieIcon,
    UsersIcon,
    AcademicCapIcon,
    UserGroupIcon,
    BookOpenIcon,
    ClipboardDocumentListIcon,
    CurrencyDollarIcon,
    CreditCardIcon,
    RectangleStackIcon,
    ChatBubbleLeftRightIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import {
    List,
    ListItem,
    ListItemPrefix,
    Card,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

// CEO Menu Items
const CeoItems = [
    {
        path: "/",
        name: "Statistika",
        icon: <ChartBarIcon className="h-5 w-5" />,
    },
    {
        path: "/lead-center",
        name: "Lead Hisobot",
        icon: <ChartPieIcon className="h-5 w-5" />,
    },
    {
        path: "/client-center",
        name: "Mijozlar",
        icon: <UsersIcon className="h-5 w-5" />,
        arrow: true,
    },
    {
        path: "/student",
        name: "Talabalar",
        icon: <AcademicCapIcon className="h-5 w-5" />,
        arrow: true,
    },
    {
        path: "/groups",
        name: "Guruhlar",
        icon: <UserGroupIcon className="h-5 w-5" />,
        arrow: true,
    },
    {
        path: "/teacher",
        name: "Ustozlar",
        icon: <BookOpenIcon className="h-5 w-5" />,
        arrow: true,
    },
    {
        path: "/subjects",
        name: "Fanlar",
        icon: <BookOpenIcon className="h-5 w-5" />,
        arrow: true,
    },
    {
        path: "/attendance",
        name: "Davomat",
        icon: <ClipboardDocumentListIcon className="h-5 w-5" />,
        arrow: true,
    },
    {
        path: "/finance",
        name: "Moliya",
        icon: <CurrencyDollarIcon className="h-5 w-5" />,
        arrow: true,
    },
    {
        path: "/mypayment",
        name: "To'lovlar",
        icon: <CreditCardIcon className="h-5 w-5" />,
        arrow: true,
    },
    {
        path: "/lead",
        name: "Lead forma",
        icon: <RectangleStackIcon className="h-5 w-5" />,
    },
    {
        path: "/sms-xabar",
        name: "SMS xabar",
        icon: <ChatBubbleLeftRightIcon className="h-5 w-5" />,
    },
    {
        path: "/sozlamalar",
        name: "Sozlamalar",
        icon: <Cog6ToothIcon className="h-5 w-5" />,
    },
];

// Super-Ceo Menu Items
const SuperCeoItems = [
    {
        path: "/Super-admin/dashboard",
        name: "Dashboard",
        icon: <ChartBarIcon className="h-5 w-5" />,
    },
    {
        path: "/Super-admin/Study-center",
        name: "Markazlar",
        icon: <ChartBarIcon className="h-5 w-5" />,
    },
    {
        path: "/Super-admin/rates-center",
        name: "Tariflar",
        icon: ' '
    },
    {
        path: "/Super-admin/finance-center",
        name: "Moliya",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M12 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10.5 16a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"
                />
                <path
                    fill="currentColor"
                    d="M17.526 5.116L14.347.659L2.658 9.997L2.01 9.99V10H1.5v12h21V10h-.962l-1.914-5.599zM19.425 10H9.397l7.469-2.546l1.522-.487zM15.55 5.79L7.84 8.418l6.106-4.878zM3.5 18.169v-4.34A3 3 0 0 0 5.33 12h13.34a3 3 0 0 0 1.83 1.83v4.34A3 3 0 0 0 18.67 20H5.332A3.01 3.01 0 0 0 3.5 18.169"
                />
            </svg>
        ),
    },
];

export default function SideBard({ active, mobileActive, onClose }) {
    const role = localStorage.getItem("role");
    const menuItems = role === "Super-Ceo" ? SuperCeoItems : CeoItems;




    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
                <div
                    className={`h-full bg-white pt-[50px] shadow-lg fixed left-0 top-0 transition-all duration-300 ease-in-out ${!active ? "w-64" : "w-20"
                        }`}
                >
                    <Card className="h-full w-full p-4 shadow-none">
                        <List className={`${active ? "min-w-[45px]" : ""}`}>
                            {menuItems.map((item) => (
                                <NavLink
                                    to={item.path}
                                    key={item.name}
                                    className={({ isActive }) =>
                                        "block transition-colors rounded-[5px] duration-300" +
                                        (isActive && !active ? " bg-blue-50" : "")
                                    }
                                >
                                    <ListItem
                                        className={`rounded-lg flex items-center justify-between transition-all duration-300 ease-in-out ${!active ? "hover:bg-blue-50 w-full" : "w-[45px] h-[46px]"
                                            }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <ListItemPrefix>{item.icon}</ListItemPrefix>
                                            <span
                                                className={`transition-all duration-300 ease-in-out ${active ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
                                                    }`}
                                            >
                                                {item.name}
                                            </span>
                                        </div>
                                    </ListItem>
                                </NavLink>
                            ))}
                        </List>
                    </Card>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className="lg:hidden">
                {/* Overlay */}
                <div
                    onClick={onClose}
                    className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                ></div>

                {/* Mobile Sidebar */}
                <div
                    className={`fixed top-0 left-0 h-screen w-64 z-50 transform bg-white shadow-xl border-r border-gray-200 transition-transform duration-300 ease-in-out ${mobileActive ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <Card className="h-full w-full  p-4 shadow-none pt-[60px] overflow-y-auto overflow-x-hidden">
                        <List>
                            {menuItems.map((item) => (
                                <NavLink
                                    onClick={onClose}
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        "block transition-colors rounded-[5px] duration-300" +
                                        (isActive ? " bg-blue-50" : "")
                                    }
                                >
                                    <ListItem className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                        <ListItemPrefix>{item.icon}</ListItemPrefix>
                                        <span>{item.name}</span>
                                    </ListItem>
                                </NavLink>
                            ))}
                        </List>
                    </Card>
                </div>
            </div>
        </>
    );
}