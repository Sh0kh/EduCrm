// SubjectTeacher.jsx

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';


export default function SubjectTeacher() {
        const navigateBack = useNavigate()
    
  // Sample data
  const subject = {
    id: 1,
    name: "Biologiya",
  };

  const teachers = [
    {
      id: 9,
      name: "Nazarboyev Xursand",
      phone: "+998 999418372",
      email: "xursand@example.com",
      groupCount: 5,
    },
    {
      id: 22,
      name: "ravshanov axror",
      phone: "+998 94012254",
      email: "axror1@example.com",
      groupCount: 5,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Biologiya</h1>
        <button onClick={()=>navigateBack(-1)} className="text-gray-500 hover:text-gray-800">
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Tabs */}
      <div className="px-6 py-4 border-b border-gray-200 flex space-x-2">
        <button className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 rounded-md">
          Ustozlar
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto px-6 py-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rasm</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ism familya</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefon raqam</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guruhlar soni</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amallar</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{teacher.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                  <img
                    src="https://via.placeholder.com/30" 
                    alt="User Image"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.groupCount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <NavLink to={`/teacher/${teacher.id}`}>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded"
                    title="Batafsil"
                  >
                    Batafsil
                  </button>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}