import CeoDashboard from "../Components/Ceo-Dashboard/CeoDashboard";
import ClientCenter from "../Components/Ceo-Dashboard/componets/ClientCenter/ClientCenter";
import LeadCenter from "../Components/Ceo-Dashboard/componets/LeadCenter/LeadCenter";

export const routes = [
    {
        name: "Ceo-Dashboard",
        path: "/",
        component: <CeoDashboard />,
    },
     {
        name: "LeadCenter",
        path: "/lead-center",
        component: <LeadCenter />,
    },
        {
        name: "Client-center",
        path: "/client-center",
        component: <ClientCenter />,
    },
]