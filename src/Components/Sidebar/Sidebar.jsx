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
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="m14.703 1.022l2.414.239c.13 0 .47.19.599.12q.003.5-.06.997l-.1 4.63a.38.38 0 0 0 .36.379a.39.39 0 0 0 .389-.38c.09-1.097.359-2.164.508-3.252q.088-.736.1-1.476a6 6 0 0 0-.15-1.427a1.06 1.06 0 0 0-.419-.589a1 1 0 0 0-.369-.14h-.748l-2.514.19a.35.35 0 0 0-.34.33a.35.35 0 0 0 .33.378m9.019 20.244a6.3 6.3 0 0 0-1.157-1.746a24 24 0 0 0-1.996-1.866a4.41 4.41 0 0 0 1.687-3.322a5.93 5.93 0 0 0-1.228-3.851a5.53 5.53 0 0 0-5.986-2.045a5.99 5.99 0 0 0-4.06 3.99a5.71 5.71 0 0 0 1.087 5.508a5.3 5.3 0 0 0 3.642 1.646a6 6 0 0 0 2.993-.549c.379.838.648 1.766.997 2.634q.26.66.639 1.257c.34.463.814.811 1.357.998c.428.133.89.101 1.297-.09a1.63 1.63 0 0 0 .838-.947c.16-.535.12-1.109-.11-1.617m-1.297 1.387a.64.64 0 0 1-.539 0a1.7 1.7 0 0 1-.628-.459a6.5 6.5 0 0 1-.669-.998c-.469-.838-.858-1.756-1.347-2.554c-.488-.798-2.075.24-3.462.07a4.28 4.28 0 0 1-2.923-1.457a4.7 4.7 0 0 1-.708-4.47a4.87 4.87 0 0 1 3.222-3.132a4.56 4.56 0 0 1 2.634 0a4.65 4.65 0 0 1 2.215 1.506a5 5 0 0 1 1.158 3.173a3.58 3.58 0 0 1-1.407 2.903c-.27.19-.11.729 0 .818c.578.63 1.297 1.338 1.875 2.106c.357.452.633.961.819 1.506c.077.214.098.444.06.669a.43.43 0 0 1-.3.319"/><path d="M18.165 13.154a3 3 0 0 0-.808-.08q.007-.105 0-.21v-.768c.243.021.482.078.708.17a.33.33 0 0 0 .41-.5a.3.3 0 0 0-.1-.079a3.4 3.4 0 0 0-1.048-.37v-.997a.35.35 0 0 0-.35-.319a.34.34 0 0 0-.359.3c-.07.309-.11.628-.17.937a3 3 0 0 0-.817.09a1.517 1.517 0 0 0-1.217 1.806a1.29 1.29 0 0 0 .838 1.087c.272.097.559.144.848.14v.648c0 .22.06.45.08.679a2.27 2.27 0 0 1-1.477-.4a.379.379 0 0 0-.509.55a3.2 3.2 0 0 0 2.085.788c0 .31.06.618.1.928a.38.38 0 0 0 .532.316a.37.37 0 0 0 .216-.356c0-.31 0-.619.06-.928q.269-.021.529-.09a1.857 1.857 0 0 0 1.407-2.325a1.36 1.36 0 0 0-.958-1.017m-2.644-.24c-.12-.489.27-.708.718-.808c0 .24-.11.47-.13.709s0 .2 0 .299q-.184.015-.369 0a.28.28 0 0 1-.219-.2m1.746 2.624v-1.217q.19-.015.38 0a.25.25 0 0 1 .249.16c.239.558-.14.878-.629 1.057"/><path d="M13.166 19.31a79 79 0 0 1-2.544.997q-.844.275-1.716.44a3.5 3.5 0 0 0-1.097.09a8 8 0 0 1-.43-.72c-.478-.917-.848-1.995-1.277-2.803c-.598-1.127-1.167-2.225-1.746-3.322c-.578-1.098-1.167-2.195-1.706-3.313c-.638-1.366-1.297-2.773-1.865-4.2a43 43 0 0 1 3.81-2.464a25 25 0 0 1 4.4-1.996a9.8 9.8 0 0 1 2.475-.778a6.25 6.25 0 0 1 1.826 2.245c.818 1.526 1.337 3.173 1.966 4.52a.387.387 0 1 0 .718-.29a43 43 0 0 0-2.075-5.447A6.5 6.5 0 0 0 12.149.213a1.56 1.56 0 0 0-1.058-.19c-.856.194-1.694.461-2.504.799a24 24 0 0 0-3.662 1.786C-1.4 6.389-.682 5.6 2.221 12.256c.41.998.848 1.915 1.317 2.853a73 73 0 0 0 1.467 2.774c.499.898.858 1.846 1.367 2.744q.361.634.848 1.177a.67.67 0 0 0 .569.19q.672-.115 1.327-.31q.92-.236 1.805-.579c.869-.329 1.707-.718 2.545-1.117a.37.37 0 0 0 .19-.499a.37.37 0 0 0-.49-.18"/><path d="M6.392 6.758L7.509 6.2c1.118-.599 2.225-1.208 3.392-1.776a.379.379 0 0 0-.279-.699c-.918.3-1.816.569-2.694.918c-.389.15-.758.32-1.127.5q-.558.269-1.078.608q-1.2.805-2.245 1.806a.34.34 0 0 0-.06.449a.33.33 0 0 0 .46.06c.459-.29.908-.54 1.376-.779c.47-.24.749-.339 1.138-.529m6.734-.04a.37.37 0 0 0-.498-.17c-.928.38-1.856.74-2.774 1.148c-.39.17-.778.36-1.157.549c-.38.19-.759.41-1.118.639C6.721 9.412 5.923 10 5.105 10.6a.33.33 0 1 0 .339.558c.898-.429 1.806-.798 2.704-1.217l1.137-.579c.38-.2.749-.409 1.108-.618a96 96 0 0 0 2.564-1.527a.37.37 0 0 0 .17-.499m-4.391 5.658a4 4 0 0 0-.568.269a3 3 0 0 0-.51.35q-.54.455-.997.997a.33.33 0 0 0-.09.482a.33.33 0 0 0 .49.037c.468-.24.997-.39 1.426-.629c.27-.14.519-.31.768-.469c.25-.16.749-.539 1.148-.758a.37.37 0 1 0-.25-.698q-.73.139-1.417.419"/></g></svg>,
    },
       {
        path: "/Super-admin/finance-center",
        name: "Moliya",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10.5 16a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"/><path fill="currentColor" d="M17.526 5.116L14.347.659L2.658 9.997L2.01 9.99V10H1.5v12h21V10h-.962l-1.914-5.599zM19.425 10H9.397l7.469-2.546l1.522-.487zM15.55 5.79L7.84 8.418l6.106-4.878zM3.5 18.169v-4.34A3 3 0 0 0 5.33 12h13.34a3 3 0 0 0 1.83 1.83v4.34A3 3 0 0 0 18.67 20H5.332A3.01 3.01 0 0 0 3.5 18.169"/></svg>,
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
