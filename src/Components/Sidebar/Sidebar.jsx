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
];

export default function SideBard({ active }) {
    const role = localStorage.getItem("role");
    const menuItems = role === "Super-Ceo" ? SuperCeoItems : CeoItems;

    return (
        <div
            className={`h-full bg-white pt-[50px] shadow-lg fixed left-0 top-0 
                transition-all duration-300 ease-in-out 
                ${!active ? 'w-64' : 'w-20'}`}
        >
            <Card className="h-full w-full p-4 shadow-none">
                <List className={`${active ? 'min-w-[45px]' : ''}`}>
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
                                className={`rounded-lg flex items-center justify-between transition-all duration-300 ease-in-out ${!active
                                    ? "hover:bg-blue-50 w-full"
                                    : "w-[45px] h-[46px]"
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <ListItemPrefix>{item.icon}</ListItemPrefix>
                                    <span
                                        className={`transition-all duration-300 ease-in-out ${active
                                            ? "opacity-0 w-0 overflow-hidden"
                                            : "opacity-100 w-auto"
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
    );
}
