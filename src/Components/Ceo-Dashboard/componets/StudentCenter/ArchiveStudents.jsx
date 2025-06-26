

import React from 'react';
import { Search, Download, Plus, Eye, Edit, CreditCard } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function ArchiveStudents() {

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
   
  ];

  return (
    <div className="bg-white p-[20px] ">
   <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Arxiv Talabalar</h1>
          <nav className="text-sm text-gray-500 flex gap-4">
            <span>
              Arxiv Talabalar
            </span>
      
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
                <button
                 
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                >
                  Qaytarish
                </button>
              </div>
            </div>
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