import {
    Navbar as MTNavbar,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import {
    Bars3Icon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Navbar() {
    const [openNav, setOpenNav] = useState(false);

    return (
        <MTNavbar className="mx-auto max-w-full px-4 py-3 shadow-md border-b border-blue-gray-100">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography variant="h6" className="cursor-pointer">
                    My Dashboard
                </Typography>


                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    <Bars3Icon className="h-6 w-6" />
                </IconButton>
            </div>


        </MTNavbar>
    );
}
