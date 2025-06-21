// ArchiveStudents.jsx

import React from 'react';
import { Search, Calendar, ArrowDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function ArchiveStudents() {
  // Sample data
  const students = [
    {
      id: 1,
      fullName: "Kamolova Oydinoy",
      phoneNumber: "+998 904004977",
      groups: "Ona tili | Juft | 14:00",
      teacher: "Akbarjon Ortiqboyev",
      absentSince: "2025-02-13",
      leftAt: "2025-03-28",
      comments: "keyinroq kelarkan imlo"
    },
    {
      id: 2,
      fullName: "Begaliyev Botir",
      phoneNumber: "+998",
      groups: "Ona tili | Juft | 16:00",
      teacher: "Akbarjon Ortiqboyev",
      absentSince: "2025-02-06",
      leftAt: "2025-03-28",
      comments: "Mavjud emas"
    },
    // ... (other sample data)
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Birtirgan Talabalar</h1>
        </div>
        <div className="flex space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Qidirish
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Qaytarish
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Ism orqali qidirish"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Fan orqali qidirish"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="relative">
            <input
              type="month"
              defaultValue="2025-06"
              className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Calendar size={16} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded flex items-center space-x-2">
            <ArrowDown size={16} className='mr-[5px]' />
            Excel
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="max-w-full w-[900px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="h-4 w-4" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ism familya</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefon raqam</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guruhlar</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ustoz</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Boshlangan vaqti</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bitirgan vaqti</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Izohlar</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amallar</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="h-4 w-4" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.fullName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.phoneNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.groups}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.teacher}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.absentSince}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.leftAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.comments}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <NavLink to={`/student/${student.id}`} >
                    <button 
                      className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                      title="Batafsil"
                    >
                      <Search size={16} />
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