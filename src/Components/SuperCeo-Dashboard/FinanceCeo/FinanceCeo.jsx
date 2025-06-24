import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function FinancialDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedCenter, setSelectedCenter] = useState('all');

  // Sample data for centers
  const centers = [
    { id: 1, name: 'Chilonzor Markazi', students: 450, monthlyRevenue: 45000000, yearlyRevenue: 540000000 },
    { id: 2, name: 'Yunusobod Markazi', students: 380, monthlyRevenue: 38000000, yearlyRevenue: 456000000 },
    { id: 3, name: 'Sergeli Markazi', students: 320, monthlyRevenue: 32000000, yearlyRevenue: 384000000 },
    { id: 4, name: 'Mirzo Ulug\'bek Markazi', students: 290, monthlyRevenue: 29000000, yearlyRevenue: 348000000 },
    { id: 5, name: 'Bektemir Markazi', students: 210, monthlyRevenue: 21000000, yearlyRevenue: 252000000 }
  ];

  // Monthly revenue data for charts
  const monthlyData = [
    { month: 'Yan', revenue: 145000000, expenses: 85000000, profit: 60000000 },
    { month: 'Fev', revenue: 152000000, expenses: 88000000, profit: 64000000 },
    { month: 'Mar', revenue: 148000000, expenses: 87000000, profit: 61000000 },
    { month: 'Apr', revenue: 165000000, expenses: 92000000, profit: 73000000 },
    { month: 'May', revenue: 171000000, expenses: 95000000, profit: 76000000 },
    { month: 'Iyun', revenue: 158000000, expenses: 90000000, profit: 68000000 },
    { month: 'Iyul', revenue: 175000000, expenses: 98000000, profit: 77000000 },
    { month: 'Avg', revenue: 182000000, expenses: 102000000, profit: 80000000 },
    { month: 'Sen', revenue: 189000000, expenses: 105000000, profit: 84000000 },
    { month: 'Okt', revenue: 195000000, expenses: 108000000, profit: 87000000 },
    { month: 'Noy', revenue: 201000000, expenses: 112000000, profit: 89000000 },
    { month: 'Dek', revenue: 208000000, expenses: 115000000, profit: 93000000 }
  ];

  // Daily revenue for last 30 days
  const dailyData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    revenue: Math.floor(Math.random() * 8000000) + 5000000,
    students: Math.floor(Math.random() * 50) + 30
  }));

  // Revenue by source
  const revenueBySource = [
    { name: 'Kurs to\'lovlari', value: 75, color: '#3B82F6' },
    { name: 'Individual darslar', value: 15, color: '#10B981' },
    { name: 'Sertifikat', value: 7, color: '#F59E0B' },
    { name: 'Qo\'shimcha xizmatlar', value: 3, color: '#EF4444' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('uz-UZ', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount) + ' so\'m';
  };

  const getTotalRevenue = () => {
    return centers.reduce((total, center) => {
      return total + (selectedPeriod === 'year' ? center.yearlyRevenue : center.monthlyRevenue);
    }, 0);
  };

  const getTotalStudents = () => {
    return centers.reduce((total, center) => total + center.students, 0);
  };

  const getFilteredCenters = () => {
    if (selectedCenter === 'all') return centers;
    return centers.filter(center => center.id === parseInt(selectedCenter));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-8">
            Moliya Boshqaruv Paneli
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ta'lim markazlarining moliyaviy ko'rsatkichlari va hisobotlari
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Davr</label>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="day">Kunlik</option>
                  <option value="month">Oylik</option>
                  <option value="year">Yillik</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Markaz</label>
                <select
                  value={selectedCenter}
                  onChange={(e) => setSelectedCenter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">Barcha markazlar</option>
                  {centers.map(center => (
                    <option key={center.id} value={center.id}>{center.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Eksport
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                Hisobot
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Umumiy daromad</p>
                <p className="text-2xl font-bold">{formatCurrency(getTotalRevenue())}</p>
                <p className="text-blue-100 text-xs mt-1">+12.5% o'tgan oyga nisbatan</p>
              </div>
              <div className="bg-blue-400 bg-opacity-30 rounded-full p-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Jami talabalar</p>
                <p className="text-2xl font-bold">{getTotalStudents()}</p>
                <p className="text-green-100 text-xs mt-1">+8.3% o'tgan oyga nisbatan</p>
              </div>
              <div className="bg-green-400 bg-opacity-30 rounded-full p-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">O'rtacha oylik daromad</p>
                <p className="text-2xl font-bold">{formatCurrency(getTotalRevenue() / centers.length)}</p>
                <p className="text-purple-100 text-xs mt-1">Markaz uchun</p>
              </div>
              <div className="bg-purple-400 bg-opacity-30 rounded-full p-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Kunlik o'rtacha</p>
                <p className="text-2xl font-bold">{formatCurrency(getTotalRevenue() / 30)}</p>
                <p className="text-orange-100 text-xs mt-1">Oylik daromaddan</p>
              </div>
              <div className="bg-orange-400 bg-opacity-30 rounded-full p-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Daromad Tendensiyasi</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `${value / 1000000}M`} />
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} name="Daromad" />
                <Line type="monotone" dataKey="profit" stroke="#10B981" strokeWidth={3} name="Foyda" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Daromad Hajmi</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={revenueBySource}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {revenueBySource.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {selectedPeriod === 'day' && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Kunlik Daromad (So'nggi 30 kun)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis tickFormatter={(value) => `${value / 1000000}M`} />
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Bar dataKey="revenue" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">Markazlar bo'yicha Hisobot</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Markaz
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Talabalar soni
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Oylik daromad
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Yillik daromad
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Talab/Daromad
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {getFilteredCenters().map((center) => (
                  <tr key={center.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-semibold text-sm">
                              {center.name.split(' ')[0].charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{center.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{center.students}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{formatCurrency(center.monthlyRevenue)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{formatCurrency(center.yearlyRevenue)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {formatCurrency(Math.floor(center.monthlyRevenue / center.students))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        center.students > 400 
                          ? 'bg-green-100 text-green-800'
                          : center.students > 300
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {center.students > 400 ? 'Yaxshi' : center.students > 300 ? 'O\'rtacha' : 'Past'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Summary */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Umumiy Ko'rsatkichlar</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-blue-100">Jami Daromad</p>
                <p className="text-3xl font-bold">{formatCurrency(getTotalRevenue())}</p>
              </div>
              <div>
                <p className="text-blue-100">Faol Markazlar</p>
                <p className="text-3xl font-bold">{centers.length}</p>
              </div>
              <div>
                <p className="text-blue-100">Jami Talabalar</p>
                <p className="text-3xl font-bold">{getTotalStudents()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}