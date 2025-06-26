// TeachersPage.jsx

import React, { useState } from 'react';
import { Search, Plus, ArrowDown, Eye, Edit, Trash2, Download } from 'lucide-react';
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
    <div className='min-h-screen p-6 mt-[10px] '>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className="text-3xl font-bold text-gray-800">Ustozlar</h1>
        <nav className="text-gray-500 text-sm">
          <span>Ustozlar</span>
          <span className="mx-2">/</span>
          <span>barcha Ustozlar</span>
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

      <div className="Table bg-white  rounded-lg shadow-sm border border-gray-200 mt-[20px]">
        <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Ustozlar</h2>
          </div>
          <div className="flex flex-wrap gap-2 justify-end w-full sm:w-auto">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-sm"
            >
              <Download size={18} />
              Excel
            </button>
            <button onClick={() => setOpenModal(true)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center space-x-2">
              <Plus size={16} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto ">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rasm</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ism</th>
                <th scope="col" className="qwerty-m5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefon raqam</th>
                <th scope="col" className="qwerty-m4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Login</th>
                <th scope="col" className="qwerty-m3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fan</th>
                <th scope="col" className="qwerty-m2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Xona</th>
                <th scope="col" className="qwerty-m1 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guruhlar soni</th>
                <th scope="col" className=" px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amallar</th>
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
                  <td className="qwerty-m4 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.login}</td>
                  <td className="qwerty-m3 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.subject}</td>
                  <td className="qwerty-m2 px-6 py-4 whitespace-nowrap text-sm text-gray-500">N/A</td>
                  <td className="qwerty-m1 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.groupsCount} ta</td>
                  <td className=" px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <NavLink to={`/teacher/${teacher.id}`}>
                        <button
                          className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition"
                          title="Batafsil"
                        >
                          <Eye size={16} />
                        </button>
                      </NavLink>

                      <button onClick={() => setOpenEditModal(true)}
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
        </div>
        <TeacherCreate isOpen={openModal} onClose={() => setOpenModal(false)} />
        <TeacherEdit isOpen={openEditModal} onClose={() => setOpenEditModal(false)} />
        <TeacherDelete isOpen={openDelModal} onClose={() => setOpenDelModal(false)} />

      </div>
    </div>
  );
}