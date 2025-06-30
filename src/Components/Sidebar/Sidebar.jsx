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
    ArchiveBoxIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/solid";
import {
    List,
    ListItem,
    ListItemPrefix,
    Card,
    Collapse,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const CeoItems = [
    {
        path: "/",
        name: "Statistika",
        icon: <ChartBarIcon className="h-5 w-5" />,
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
        name: "Moliya",
        icon: <CurrencyDollarIcon className="h-5 w-5" />,
        dropdown: true,
        subItems: [
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
        ],
    },
    {
        name: "Lead",
        icon: <UsersIcon className="h-5 w-5" />,
        dropdown: true,
        subItems: [
            {
                path: "/lead-center",
                name: "Lead Hisobot",
                icon: <ChartPieIcon className="h-5 w-5" />,
            },
            {
                path: "/client-center",
                name: "Mijozlar",
                icon: <UsersIcon className="h-5 w-5" />,
            },
        ],
    },
    {
        name: "Arxiv",
        icon: <ArchiveBoxIcon className="h-5 w-5" />,
        dropdown: true,
        subItems: [
            {
                path: "/archiveStudents",
                name: "Talabalar arxivi",
                icon: <AcademicCapIcon className="h-4 w-4" />,
            },
            {
                path: "/groupArchive",
                name: "Guruhlar arxivi",
                icon: <UserGroupIcon className="h-4 w-4" />,
            },
        ],
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
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85" /></svg>
        )
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

const TeacherItems = [
    {
        path: "/Teacher/dashboard",
        name: "Dashboard",
        icon: <ChartBarIcon className="h-5 w-5" />,
    },
    {
        path: "/Teacher/teacher-groups",
        name: "Guruhlarim",
        icon: <UserGroupIcon className="h-5 w-5" />,
    },
    {
        path: "/sozlamalar",
        name: "Sozlamalar",
        icon: <Cog6ToothIcon className="h-5 w-5" />,
    },
];

export default function SideBard({ active, mobileActive, onClose }) {
    const role = localStorage.getItem("role");
    const [dropdownOpen, setDropdownOpen] = useState(null);

    let menuItems;
    if (role === "Super-Ceo") {
        menuItems = SuperCeoItems;
    } else if (role === "teacher") {
        menuItems = TeacherItems;
    } else {
        menuItems = CeoItems;
    }

    const toggleDropdown = (name) => {
        setDropdownOpen((prev) => (prev === name ? null : name));
    };

    return (
        <>
            <div className="hidden lg:block">
                <div
                    className={`h-full overflow-y-auto  overflow-x-hidden  bg-white pt-[50px] shadow-lg fixed left-0 top-0 transition-all duration-300 ease-in-out ${!active ? "w-64" : "w-20"
                        }`}
                >
                    <Card className="h-full w-full p-4 shadow-none">
                        <List className={`${active ? "min-w-[45px]" : ""}`}>
                            {menuItems.map((item, index) => (
                                <div key={item.name || index}>
                                    {item.dropdown ? (
                                        <>
                                            <ListItem
                                                onClick={() => toggleDropdown(item.name)}
                                                className={`rounded-lg flex items-center justify-between transition-all duration-300 ease-in-out cursor-pointer hover:bg-blue-50 ${!active ? "w-full" : "w-[45px] h-[46px]"
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
                                                {!active && (
                                                    <div className="transition-transform duration-300">
                                                        {dropdownOpen === item.name ? (
                                                            <ChevronDownIcon className="h-4 w-4" />
                                                        ) : (
                                                            <ChevronRightIcon className="h-4 w-4" />
                                                        )}
                                                    </div>
                                                )}
                                            </ListItem>
                                            {!active && (
                                                <Collapse open={dropdownOpen === item.name}>
                                                    <div className="ml-4 border-l-2 border-blue-100 pl-4 py-2 space-y-1">
                                                        {item.subItems?.map((subItem) => (
                                                            <NavLink
                                                                key={subItem.name}
                                                                to={subItem.path}
                                                                className={({ isActive }) =>
                                                                    "block transition-colors rounded-md duration-300" +
                                                                    (isActive ? " bg-blue-50" : "")
                                                                }
                                                            >
                                                                <ListItem className="py-2 px-3 rounded-md hover:bg-blue-50 transition-colors duration-200">
                                                                    <div className="flex items-center gap-2">
                                                                        <ListItemPrefix>{subItem.icon}</ListItemPrefix>
                                                                        <span className="text-sm">{subItem.name}</span>
                                                                    </div>
                                                                </ListItem>
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                </Collapse>
                                            )}
                                        </>
                                    ) : (
                                        <NavLink
                                            to={item.path}
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
                                    )}
                                </div>
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
                    <Card className="h-full w-full p-4 shadow-none pt-[60px] overflow-y-auto overflow-x-hidden">
                        <List>
                            {menuItems.map((item, index) => (
                                <div key={item.name || index}>
                                    {item.dropdown ? (
                                        <>
                                            <ListItem
                                                onClick={() => toggleDropdown(item.name)}
                                                className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <ListItemPrefix>{item.icon}</ListItemPrefix>
                                                    <span>{item.name}</span>
                                                </div>
                                                <div className="transition-transform duration-300">
                                                    {dropdownOpen === item.name ? (
                                                        <ChevronDownIcon className="h-4 w-4" />
                                                    ) : (
                                                        <ChevronRightIcon className="h-4 w-4" />
                                                    )}
                                                </div>
                                            </ListItem>
                                            <Collapse open={dropdownOpen === item.name}>
                                                <div className="ml-6 border-l-2 border-blue-100 pl-4 py-2 space-y-1">
                                                    {item.subItems?.map((subItem) => (
                                                        <NavLink
                                                            key={subItem.name}
                                                            onClick={onClose}
                                                            to={subItem.path}
                                                            className={({ isActive }) =>
                                                                "block transition-colors rounded-md duration-300" +
                                                                (isActive ? " bg-blue-50" : "")
                                                            }
                                                        >
                                                            <ListItem className="py-2 px-3 rounded-md hover:bg-blue-50 transition-colors duration-200">
                                                                <div className="flex items-center gap-2">
                                                                    <ListItemPrefix>{subItem.icon}</ListItemPrefix>
                                                                    <span className="text-sm">{subItem.name}</span>
                                                                </div>
                                                            </ListItem>
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            </Collapse>
                                        </>
                                    ) : (
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
                                    )}
                                </div>
                            ))}
                        </List>
                    </Card>
                </div>
            </div>
        </>
    );
}