// TeachersPage.jsx

import React, { useState } from 'react';
import { Search, Plus, ArrowDown, Eye, Edit, Trash2 } from 'lucide-react';
import TeacherCreate from './components/TeacherCreate';
import TeacherEdit from './components/TeacherEdit';
import TeacherDelete from './components/TeacherDelete';
import { NavLink } from 'react-router-dom';

export default function Teacher() {
  const [openModal, setOpenModal] = useState(false);
const [openEditModal, setOpenEditModal] = useState(false);
const [openDelModal, setOpenDelModal] = useState(false);


  // Sample data
  const teachers = [
    {
      id: 3,
      name: "Akbarjon Ortiqboyev",
      phone: "+998 943534455",
      login: "akbarjon",
      subject: "Ona tili",
      groupsCount: 4,
    },
        {
      id: 3,
      name: "Akbarjon Ortiqboyev",
      phone: "+998 943534455",
      login: "akbarjon",
      subject: "Ona tili",
      groupsCount: 4,
    },
  ];

    const handleDelete = () => {
    console.log("Ustoz o'chirildi!");
    setOpenModal(false);
  };
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-xl font-bold text-gray-800">Ustozlar</h1>
      </div>

      <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex w-full gap-4 sm:w-auto">
          <input
            type="text"
            placeholder="Ism orqali qidirish"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex space-x-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-1">
              <Search size={16} />
              <span>Qidirish</span>
            </button>
            <button  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center space-x-1">
              <Plus size={16} />
              <span>Qaytarish</span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-end w-full sm:w-auto">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded flex items-center space-x-2">
            <ArrowDown size={16} />
            <span>Excel</span>
          </button>
          <button onClick={() => setOpenModal(true)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center space-x-2">
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rasm</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ism</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefon raqam</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Login</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fan</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Xona</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guruhlar soni</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amallar</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{teacher.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                  <img
                    src="https://via.placeholder.com/30"  
                    alt="User Image"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  {teacher.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.login}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">N/A</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.groupsCount} ta</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <NavLink to={`/teacher/${teacher.id}`}>
                    <button
                      className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition"
                      title="Batafsil"
                    >
                      <Eye size={16} />
                    </button>
                    </NavLink>
                    
                    <button  onClick={() => setOpenEditModal(true)}
                      className="text-yellow-600 hover:text-yellow-900 p-1 rounded hover:bg-yellow-50 transition"
                      title="Yangilash"
                    >
                      <Edit size={16} />
                    </button>
                    <button onClick={() => setOpenDelModal(true)}
                      className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 transition"
                      title="O'chirish"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </table>
      </div>
      <TeacherCreate isOpen={openModal} onClose={() => setOpenModal(false)} />
         <TeacherEdit isOpen={openEditModal} onClose={() => setOpenEditModal(false)} />
         <TeacherDelete isOpen={openDelModal} onClose={() => setOpenDelModal(false)} />

    </div>
  );
}