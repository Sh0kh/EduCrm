import {
    List,
    ListItem,
    ListItemPrefix,
    Typography,
    Card,
} from "@material-tailwind/react";
import {
    HomeIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export default function SideBard() {
    return (
        <div className="h-screen w-64 bg-white shadow-lg fixed left-0 top-0">
            <Card className="h-full w-full p-4 shadow-none">
                <div className="mb-6">
                    <Typography variant="h5" color="blue-gray">
                        Dashboard
                    </Typography>
                </div>
                <List>
                    <NavLink to={`/`}> 
                        <ListItem className="hover:bg-blue-50 rounded-lg">
                            <ListItemPrefix>
                                <HomeIcon className="h-5 w-5 text-blue-500" />
                            </ListItemPrefix>
                            Главная
                        </ListItem>
                    </NavLink>
                    <ListItem className="hover:bg-blue-50 rounded-lg">
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5 text-green-500" />
                        </ListItemPrefix>
                        Профиль
                    </ListItem>
                    <ListItem className="hover:bg-blue-50 rounded-lg">
                        <ListItemPrefix>
                            <Cog6ToothIcon className="h-5 w-5 text-orange-500" />
                        </ListItemPrefix>
                        Настройки
                    </ListItem>
                    <ListItem className="hover:bg-red-50 rounded-lg">
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5 text-red-500" />
                        </ListItemPrefix>
                        Выйти
                    </ListItem>
                </List>
            </Card>
        </div>
    );
}
