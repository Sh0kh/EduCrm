import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

export default function Finance() {
  // Sample data
  const teachers = [
    "Akbarjon Ortiqboyev",
    "Gennadiyeva Faniya",
    "Xo'rozova Sevinch",
    "G'aybullayeva Saida",
    "rahmonov ozodbek",
    "botirova feruza",
  ];

  const groups = [
    "Ona tili | TOQ | 14:00",
    "Matematika | Juft | 16:00",
    "Tarix | TOQ | 18:00 DTM gruppa",
    "Ingliz tili | Juft | 8:00",
    "Biologiya | TOQ | 13:00"
  ];

  const paymentTypes = [
    "Barcha",
    "Yillik to'lov",
    "Oylik to'lov",
    "Qarz",
    "Qarzi to'lash",
  ];

  // Sample payment history data
  const paymentHistory = [
    {
      id: 1,
      studentName: "Stuk1",
      teacher: "Akbarjon Ortiqboyev",
      group: "Ona tili | TOQ | 14:00",
      paymentType: "Oylik to'lov",
      amount: 350000,
      date: "2025-01-15",
      status: "To'langan"
    },
    {
      id: 2,
      studentName: "Stuk07",
      teacher: "Akbarjon Ortiqboyev",
      group: "Ona tili | TOQ | 14:00",
      paymentType: "Oylik to'lov",
      amount: 350000,
      date: "2025-02-15",
      status: "To'langan"
    },

  ];

  // All payment data for chart
  const allPaymentData = [
    { name: '2025-01', value: 5210000 },
    { name: '2025-02', value: 1030000 },
    { name: '2025-03', value: 1030000 },
    { name: '2025-04', value: 350000 },
    { name: '2025-05', value: 0 },
    { name: '2025-06', value: 500000 }
  ];

  const [totalAmount, setTotalAmount] = useState("1 241 000 so'm");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [studentName, setStudentName] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedPaymentType, setSelectedPaymentType] = useState("");
  const [paymentMonth, setPaymentMonth] = useState("");

  // Filter function
  const filteredPayments = paymentHistory.filter(payment => {
    let matches = true;

    if (studentName && !payment.studentName.toLowerCase().includes(studentName.toLowerCase())) {
      matches = false;
    }
    if (selectedTeacher && payment.teacher !== selectedTeacher) {
      matches = false;
    }
    if (selectedGroup && payment.group !== selectedGroup) {
      matches = false;
    }
    if (selectedPaymentType && selectedPaymentType !== "Barcha" && payment.paymentType !== selectedPaymentType) {
      matches = false;
    }
    if (startDate && payment.date < startDate) {
      matches = false;
    }
    if (endDate && payment.date > endDate) {
      matches = false;
    }

    return matches;
  });

  const getChartData = () => {
    if (studentName && filteredPayments.length > 0) {
      const studentPayments = filteredPayments.reduce((acc, payment) => {
        const month = payment.date.substring(0, 7);
        if (!acc[month]) {
          acc[month] = 0;
        }
        acc[month] += payment.amount;
        return acc;
      }, {});

      return Object.entries(studentPayments)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([month, total]) => ({
          name: month,
          value: total
        }));
    }
    return allPaymentData;
  };

  const chartData = getChartData();

  const getTotalAmount = () => {
    const total = filteredPayments.reduce((sum, payment) => sum + payment.amount, 0);
    return total.toLocaleString('uz-UZ') + ' so\'m';
  };

  return (
    <div className='min-h-screen p-6 mt-[10px]'>
      <div className="">
        <h1 className="text-2xl font-bold text-gray-800">To'lov malumotlari</h1>
      </div>

      <div className=" py-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className='flex items-center gap-[10px] flex-col w-full'>
          <div className="bg-white w-full border-l-4 rounded-[10px] h-fit border-blue-500 p-4">
            <p className="text-sm text-gray-600 mb-1">To'lovlar miqdori:</p>
            <span className="text-2xl font-bold text-gray-800">{getTotalAmount()}</span>
          </div>
          <div className="bg-white w-full border-l-4 rounded-[10px] h-fit border-blue-500 p-4">
            <div className="mt-2 text-sm text-gray-500">
              {studentName && (
                <p className="font-medium text-blue-600">Student: {studentName}</p>
              )}
              <p>Filtr: 2025-06-01 dan</p>
              <p>2025-06-21 gacha,</p>
              <p>To'lov turi: {selectedPaymentType || 'Barcha'}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-[8px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-800">
              {studentName ? `${studentName} - To'lov dinamikasi` : 'Joriy oylik tushumlar'}
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-gray-600">
                {studentName ? 'Shaxsiy to\'lovlar' : 'Yillik tushumlar'}
              </span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                  tickFormatter={(value) => `${(value / 1000)}k`}
                />
                <Tooltip
                  formatter={(value) => [`${value.toLocaleString()} so'm`, studentName ? 'To\'lov' : 'Tushumllar']}
                  labelStyle={{ color: '#374151' }}
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 bg-[white] shadow rounded-[10px]">
        <h2 className="text-2xl font-medium mb-4 text-gray-800">Filter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Date Range */}
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Sanadan</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="DD.MM.YYYY"
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">Sanagacha</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="DD.MM.YYYY"
            />
          </div>
          <div>
            <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">Ism Familiya</label>
            <input
              type="text"
              id="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="o'razaliyeva zarina"
            />
          </div>
          <div>
            <label htmlFor="paymentMonth" className="block text-sm font-medium text-gray-700 mb-1">To'lov oyi</label>
            <input
              type="month"
              id="paymentMonth"
              value={paymentMonth}
              onChange={(e) => setPaymentMonth(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Teachers */}
          <div>
            <label htmlFor="teacherSelect" className="block text-sm font-medium text-gray-700 mb-1">Ustozlar</label>
            <select
              id="teacherSelect"
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Ustoz tanlang</option>
              {teachers.map((teacher, index) => (
                <option key={index} value={teacher}>
                  {teacher}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="groupSelect" className="block text-sm font-medium text-gray-700 mb-1">Guruhlar</label>
            <select
              id="groupSelect"
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Guruhni tanlang</option>
              {groups.map((group, index) => (
                <option key={index} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="paymentTypeSelect" className="block text-sm font-medium text-gray-700 mb-1">To'lov turlari</label>
            <select
              id="paymentTypeSelect"
              value={selectedPaymentType}
              onChange={(e) => setSelectedPaymentType(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">To'lov turini tanlang</option>
              {paymentTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Filtr
            </button>
          </div>
        </div>
      </div>

      {(studentName || selectedTeacher || selectedGroup || selectedPaymentType || startDate || endDate || paymentMonth) && (
        <div className="px-6 py-4">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-800">To'lov tarixi</h3>
              <p className="text-sm text-gray-500 mt-1">
                {filteredPayments.length} ta natija topildi
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ism Familiya
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ustoz
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Guruh
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      To'lov turi
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Miqdor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sana
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Holat
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredPayments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {payment.studentName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {payment.teacher}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {payment.group}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {payment.paymentType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {payment.amount.toLocaleString()} so'm
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(payment.date).toLocaleDateString('uz-UZ')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${payment.status === 'To\'langan'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                          }`}>
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredPayments.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">Hech qanday to'lov ma'lumoti topilmadi</p>
              </div>
            )}
          </div>
        </div>
      )}

      {!studentName && !selectedTeacher && !selectedGroup && !selectedPaymentType && !startDate && !endDate && !paymentMonth && (
        <div className="px-6 py-8">
          <div className="text-center">
            <div className="text-gray-400 text-4xl mb-4">📊</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">To'lov ma'lumotlarini ko'rish</h3>
            <p className="text-gray-500">
              Yuqoridagi filter maydonlarini to'ldiring va ma'lumotlarni ko'ring
            </p>
          </div>
        </div>
      )}
    </div>
  );
}