import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

// Demo ma'lumotlar (backenddan keladi deb tasavvur qilamiz)
const centers = [
    {
        id: 1,
        name: "IT Academy",
        address: "Toshkent, Yunusobod tumani",
        phone: "+998 90 123 45 67",
    },
    {
        id: 2,
        name: "Smart School",
        address: "Toshkent, Chilonzor tumani",
        phone: "+998 91 234 56 78",
    },
    {
        id: 3,
        name: "EduTech",
        address: "Samarqand, Registon ko'chasi",
        phone: "+998 93 345 67 89",
    },
    {
        id: 4,
        name: "NextGen Center",
        address: "Buxoro, Mustaqillik ko'chasi",
        phone: "+998 99 456 78 90",
    },
];

export default function CenterStudy() {
    return (
        <div className="p-6 min-h-screen">
            <div className="flex items-center justify-between">
                <Typography variant="h4" className=" font-bold text-blue-700 mb-8">
                    Ta'lim markazlari ro'yxati
                </Typography>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {centers.map((center) => (
                    <Card key={center.id} className="shadow-lg border-l-4 border-blue-500">
                        <CardBody>
                            <Typography variant="h5" className="mb-2 text-blue-700 font-semibold">
                                {center.name}
                            </Typography>
                            <Typography color="gray" className="mb-1">
                                📍 Manzil: {center.address}
                            </Typography>
                            <Typography color="gray" className="mb-4">
                                ☎️ Telefon: {center.phone}
                            </Typography>
                            <Button variant="filled" color="blue" size="sm">
                                Batafsil
                            </Button>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}
