import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';

const data = [
    { month: 'January', value: 95 },
    { month: 'February', value: 88 },
    { month: 'March', value: 92 },
    { month: 'April', value: 85 },
    { month: 'May', value: 90 },
    { month: 'June', value: 78 },
    { month: 'July', value: 0 },
    { month: 'August', value: 0 }
];

export default function TeacherDashboard() {
    return (
        <div className="min-h-screen p-6 mt-[10px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-800">O'qituvchi Paneli</h1>
                <nav className="text-gray-500">
                    <span>Home</span>
                    <span className="mx-2">/</span>
                    <span>O'qituvchi</span>
                </nav>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Students Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm mb-1">Talabalar</p>
                            <p className="text-2xl font-bold text-gray-800">35 ta</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                </div>

                {/* Groups Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm mb-1">Mening Guruhlarim</p>
                            <p className="text-2xl font-bold text-gray-800">5 ta</p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                </div>

                {/* Lessons Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm mb-1">Darslar Soni</p>
                            <p className="text-2xl font-bold text-gray-800">68 ta</p>
                        </div>
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Award className="w-6 h-6 text-yellow-600" />
                        </div>
                    </div>
                </div>

                {/* Attendance Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm mb-1">Ishlanma Darslar</p>
                            <p className="text-2xl font-bold text-gray-800">60 ta</p>
                        </div>
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-orange-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Baholar Dinamikasi - 2025</h2>

                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#9CA3AF' }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#9CA3AF' }}
                                domain={[0, 100]}
                                tickFormatter={(value) => `${value}%`}
                            />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#10B981"
                                strokeWidth={3}
                                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                                activeDot={{ r: 6, fill: '#10B981' }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Legend */}
                <div className="mt-4 flex items-center justify-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span className="text-sm text-gray-600">O'rtacha Baholar (%)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}