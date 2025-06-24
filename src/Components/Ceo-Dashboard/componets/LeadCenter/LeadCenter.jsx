import React, { useState, useEffect } from 'react';
import { Users, Calendar, TrendingUp, Activity } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

export default function LeadCenter() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState('2025');

  // Mock data
  const mockData = {
    summary: {
      joriyOylikFaollar: 815,
      yangiQuvchilar: 0,
      ketganlar: 1066
    },
    monthlyData: [
      { oy: 'Yanvar', active: 155, yangi: 442, ketganlar: 295 },
      { oy: 'Fevral', active: 186, yangi: 393, ketganlar: 298 },
      { oy: 'Mart', active: 174, yangi: 240, ketganlar: 161 },
      { oy: 'Aprel', active: 31, yangi: 53, ketganlar: 0 },
    ]
  };

  const fetchStatistics = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setData(mockData);
    } catch (error) {
      console.error("Xatolik:", error);
      setData(mockData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, [selectedYear]);

  const StatCard = ({ title, value, icon: Icon, color = 'blue', trend }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium mb-2">{title}</p>
          <p className={`text-3xl font-bold text-${color}-600`}>{value}</p>
          {trend && (
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-500 text-sm">+{trend}%</span>
            </div>
          )}
        </div>
        <div className={`p-4 rounded-full bg-${color}-100`}>
          <Icon className={`w-8 h-8 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600"></div>
          <p className="mt-4 text-gray-600">Ma'lumotlar yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">O'quvchilar Statistikasi</h1>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard
            title="Joriy Oylik Faollar"
            value={data?.summary?.joriyOylikFaollar || 0}
            icon={Users}
            color="green"
            trend={12}
          />
          <StatCard
            title="Yangi O'quvchilar"
            value={data?.summary?.yangiQuvchilar || 0}
            icon={Activity}
            color="blue"
          />
          <StatCard
            title="Ketganlar"
            value={data?.summary?.ketganlar || 0}
            icon={TrendingUp}
            color="red"
          />
        </div>

        {/* Filter + Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
            <h2 className="text-2xl font-bold">Statistika Ma'lumotlari {selectedYear}</h2>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Yilni tanlang:
              </label>
              <input
                type="text"
                placeholder="Yilni tanlang"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              />
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 mb-6">
              <button
                onClick={fetchStatistics}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Yuborish
              </button>
            </div>

            {/* Monthly Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Oy</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">Active</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">Yangi</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">Ketganlar</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.monthlyData?.map((month, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-gray-800">{month.oy}</td>
                      <td className="py-4 px-6 text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {month.active}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {month.yangi}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                          {month.ketganlar}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Chart */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Oylik Tahlil Grafik Ko'rinishda</h3>
              <div className="w-full h-[400px] bg-white rounded-xl shadow-lg p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data?.monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="oy" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="active" stroke="#10B981" strokeWidth={2} name="Faollar" />
                    <Line type="monotone" dataKey="yangi" stroke="#3B82F6" strokeWidth={2} name="Yangi" />
                    <Line type="monotone" dataKey="ketganlar" stroke="#EF4444" strokeWidth={2} name="Ketganlar" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
