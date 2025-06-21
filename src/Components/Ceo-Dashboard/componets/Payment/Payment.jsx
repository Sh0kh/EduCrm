import React, { useState } from 'react';
import { Search, CreditCard } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Payment () {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedMonth, setSelectedMonth] = useState('June');
  const [showResults, setShowResults] = useState(false);

  // Sample student data
  const students = [
    { id: 1, name: "Abdullayev Akmal", group:"Matematika | Toq | 14:00", amount: 850000, status: "To'lanmagan", phone: "+998901234567" },
  
  ];

  const groups = [
    "Ona tili | Juft | 16:00",
    "Matematika | Toq | 14:00", 
    "Tarix | TOQ | 18:00 DTM gruppa",
    "Ingliz tili | TOQ | 8:00",
    "Biologiya | Juft | 13:00"
  ];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const years = ["2023", "2024", "2025", "2026"];

  const handleSearch = () => {
    if (selectedGroup && selectedYear && selectedMonth) {
      setShowResults(true);
    } else {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
    }
  };



  const getStatusColor = (status) => {
    switch (status) {
      case "To'langan": return "bg-green-100 text-green-800";
      case "To'lanmagan": return "bg-red-100 text-red-800";
      case "Qisman to'langan": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('uz-UZ').format(amount) + " so'm";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">To'lovlarni yig'ish</h1>
          
          {/* Filter */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div>
              <select 
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Guruh tanlang</option>
                {groups.map(group => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
            </div>

            <div>
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div>
              <select 
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {months.map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>

   <div className='flex justify-start gap-4'>

             <div>
              <button
                onClick={handleSearch}
                className="w-[100px] bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Qidirish
              </button>
            </div>

            <div>
              <button
                onClick={() => setShowResults(false)}
                className="w-[100px] bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                Qaytish
              </button>
            </div>
   </div>
          </div>
        </div>

        {/* Results */}
        {!showResults ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600">
              No required query parameters. Please select a group, year, and month to view payment history.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Table Header */}
            <div className="bg-gray-50 px-6 py-3 border-b">
              <h2 className="text-lg font-semibold text-gray-800">Talabalar ro'yxati</h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">№</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Talaba ismi</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">To'langan summa</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {students.map((student, index) => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {student.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {formatAmount(student.amount)}
                      </td>
                      <td className="px-6 py-4">
                        <NavLink to={`/studentpayment/${student.id}`}>
                        <button
                          onClick={() => handlePayment(student.id, student.name)}
                          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
                        >
                          <CreditCard className="w-4 h-4" />
                          To'lov qilish
                        </button>
                        </NavLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
