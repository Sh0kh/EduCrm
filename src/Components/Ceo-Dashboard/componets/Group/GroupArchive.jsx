import React from 'react';
import { Search, Download, Plus, Eye, Edit, CreditCard } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function GroupArchive() {
  const groups = [
    {
      id: 201,
      name: "Matematika | Juft | 14:00",
      teacher: "Ernazarov Jaloliddin",
      subject: "Matematika",
      studentCount: 8,
      startDate: "2025-01-10",
      endDate: "2025-03-28",
      status: "Yakunlangan",
      comments: "Barcha darslar o'tkazildi"
    },
    {
      id: 202,
      name: "Ingliz tili | Toq | 16:00",
      teacher: "Saidova Nargiza",
      subject: "Ingliz tili",
      studentCount: 10,
      startDate: "2025-02-01",
      endDate: "2025-03-28",
      status: "Arxivda",
      comments: "Guruh muddati tugadi"
    },
    {
      id: 203,
      name: "Dasturlash (Python) | Barcha kunlar",
      teacher: "Karimov Azamat",
      subject: "Python dasturlash",
      studentCount: 12,
      startDate: "2024-12-15",
      endDate: "2025-03-20",
      status: "Yakunlangan",
      comments: "Muvaffaqiyatli yakunlandi"
    }
  ];

  return (
    <div className="bg-white p-[20px] ">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Arxiv Guruhlar</h1>
        <nav className="text-sm text-gray-500 flex gap-4">
          <span>Arxiv Guruhlar</span>
        </nav>
      </div>

   
      <div className="bg-white rounded-lg shadow-sm border mb-6 mt-[30px]">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Ism orqali qidirish"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
                Qaytarish
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="max-w-full w-[1200px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="h-4 w-4" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nomi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ustoz</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Talabalar soni</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Boshlanish vaqti</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tugash vaqti</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Holati</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Izohlar</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amallar</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {groups.map((group) => (
                <tr key={group.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="h-4 w-4" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{group.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group.teacher}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group.studentCount} ta</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group.startDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group.endDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`inline-flex px-2 text-xs font-semibold leading-5 rounded-full ${
                      group.status === "Yakunlangan" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {group.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group.comments}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <NavLink to={`/groups/${group.id}`}>
                      <button 
                        className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                        title="Batafsil"
                      >
                        <Eye size={16} />
                      </button>
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}