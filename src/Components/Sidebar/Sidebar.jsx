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
    ArrowRightIcon,
} from "@heroicons/react/24/solid";
import {
    List,
    ListItem,
    ListItemPrefix,
    Typography,
    Card,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import logo from '../UI/logo.png';

const sidebarItems = [
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
        path: "/talabalar",
        name: "Talabalar",
        icon: <AcademicCapIcon className="h-5 w-5" />,
        arrow: true,
    },
    {
        path: "/guruhlar",
        name: "Guruhlar",
        icon: <UserGroupIcon className="h-5 w-5" />,
        arrow: true,
    },
    {
        path: "/ustozlar",
        name: "Ustozlar",
        icon: <BookOpenIcon className="h-5 w-5" />,
        arrow: true,
    },
    {
        path: "/fanlar",
        name: "Fanlar",
        icon: <BookOpenIcon className="h-5 w-5" />,
        arrow: true,
    },
    {
        path: "/davomat",
        name: "Davomat",
        icon: <ClipboardDocumentListIcon className="h-5 w-5" />,
        arrow: true,
    },
    {
        path: "/moliya",
        name: "Moliya",
        icon: <CurrencyDollarIcon className="h-5 w-5" />,
        arrow: true,
    },
    {
        path: "/tolovlar",
        name: "To'lovlar",
        icon: <CreditCardIcon className="h-5 w-5" />,
        arrow: true,
    },
    {
        path: "/lead-forma",
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

export default function SideBard() {
    return (
        <div className="h-screen w-64 bg-white shadow-lg fixed left-0 top-0">
            <Card className="h-full w-full p-4 shadow-none">
                <div className="mb-8 flex items-center gap-2">
                    <img src={logo} alt="logo" className="mx-auto mt-[-40px] mb-[-50px]" />
                   
                </div>
                <List>
                    {sidebarItems.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.name}
                            className={({ isActive }) =>
                                "block" + (isActive ? " bg-blue-50" : "")
                            }
                        >
                            <ListItem className="hover:bg-blue-50 rounded-lg flex items-center justify-between">
                                <div className="flex items-center">
                                    <ListItemPrefix>
                                        {item.icon}
                                    </ListItemPrefix>
                                    {item.name}
                                </div>
                               
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
            </Card>
        </div>
    );
}