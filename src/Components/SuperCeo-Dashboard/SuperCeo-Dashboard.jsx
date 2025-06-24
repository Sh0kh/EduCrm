import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

// Demo ma'lumotlar (kelajakda backend bilan almashtiriladi)
const centerData = {
    totalCenters: 6,
    centers: [
        { name: "IT Academy", payment: 500 },
        { name: "Smart School", payment: 700 },
        { name: "EduTech", payment: 300 },
        { name: "NextGen", payment: 450 },
        { name: "Future Academy", payment: 600 },
        { name: "SkillBoost", payment: 550 },
    ],
};

const barChartData = {
    labels: centerData.centers.map((center) => center.name),
    datasets: [
        {
            label: "Oylik to‘lov (USD)",
            data: centerData.centers.map((center) => center.payment),
            backgroundColor: "#3B82F6",
            borderRadius: 10,
        },
    ],
};

const doughnutChartData = {
    labels: ["Obuna", "Bir martalik", "Boshqa"],
    datasets: [
        {
            data: [60, 25, 15],
            backgroundColor: ["#3B82F6", "#10B981", "#F59E0B"],
            borderWidth: 1,
        },
    ],
};

export default function SuperCeoDashboard() {
    return (
        <div className="p-6">
            {/* Bosh sarlavha */}
            <Typography
                variant="h4"
                className="text-left font-bold text-blue-700 mb-8"
            >
                Super-Ceo Boshqaruv Paneli
            </Typography>

            {/* Statistik kartalar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Markazlar soni */}
                <Card className="shadow-lg border-t-4 border-blue-500">
                    <CardHeader floated={false} className="bg-blue-500 text-white p-4">
                        <Typography variant="h6" color="white">
                            Umumiy ta'lim markazlari soni
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex items-center justify-center text-5xl font-extrabold text-blue-700">
                        {centerData.totalCenters}
                    </CardBody>
                </Card>

                {/* Ustunli diagramma */}
                <Card className="shadow-lg border-t-4 border-blue-500">
                    <CardHeader floated={false} className="bg-blue-500 text-white p-4">
                        <Typography variant="h6" color="white">
                            Ta'lim markazlari oylik to‘lovlari
                        </Typography>
                    </CardHeader>
                    <CardBody>
                        <Bar
                            data={barChartData}
                            options={{
                                responsive: true,
                                plugins: { legend: { display: false } },
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        ticks: {
                                            stepSize: 100,
                                        },
                                    },
                                },
                            }}
                        />
                    </CardBody>
                </Card>
            </div>

            {/* Doira diagramma */}
            <div className="mt-6">
                <Card className="shadow-lg border-t-4 border-blue-500">
                    <CardHeader floated={false} className="bg-blue-500 text-white p-4">
                        <Typography variant="h6" color="white">
                            To‘lov turlari bo‘yicha taqsimot
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex justify-center">
                        <div className="w-[300px] md:w-[400px]">
                            <Doughnut data={doughnutChartData} />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
