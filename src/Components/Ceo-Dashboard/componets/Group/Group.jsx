// Group.jsx

import React, { useState } from 'react';
import { Search, Plus, ArrowDown, Edit, Trash2 } from 'lucide-react';
import CreateGroup from './components/GroupCreate';
import GroupEdit from './components/GroupEdit';
import GroupDelete from './components/GroupDelete';
import { NavLink } from 'react-router-dom';

export default function Group() {
     const [openModal, setOpenModal] = useState(false);
      const [openEditModal, setOpenEditModal] = useState(false);
       const [openDelModal, setOpenDelModal] = useState(false);
        const handleDelete = () => {
    console.log("Guruh o'chirildi!");
    // Guruhni o'chirish logikasi bu yerda ishlaydi
    setOpenModal(false);
  };
  const groups = [
    {
      id: 131,
      name: "Jaloliddin matematika toq [14:00]",
      price: "400 000 so'm",
      teacher: "Ernazarov Jaloliddin",
      subject: "Matematika",
      studentCount: 8,
      startDate: "2025-03-01"
    },
    {
      id: 130,
      name: "Turk tili | Toq | 18:00",
      price: "400 000 so'm",
      teacher: "Aliboyev Husan",
      subject: "Turk tili",
      studentCount: 8,
      startDate: "2025-03-24"
    },
    {
      id: 129,
      name: "Majburiy tarix 17:00 DAN 18:00 GACHA",
      price: "250 so'm",
      teacher: "Narzullayev Eldor",
      subject: "Tarix",
      studentCount: 9,
      startDate: "2025-03-15"
    }
    // Agar 385 dona bo'lsa, quyidagicha generator bilan ham qo'shishingiz mumkin:
    // ...Array.from({ length: 382 }, (_, i) => ({
    //   id: i + 132,
    //   name: `Guruh nomi ${i + 1}`,
    //   price: `${Math.floor(Math.random() * 500000)} so'm`,
    //   teacher: `O'qituvchi Ism ${i + 1}`,
    //   subject: ["Matematika", "Ingliz tili", "Tarix", "Biologiya"][Math.floor(Math.random() * 4)],
    //   studentCount: Math.floor(Math.random() * 15) + 5,
    //   startDate: `2025-03-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`
    // }))
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-xl font-bold text-gray-800">Barcha Guruhlar</h1>
      </div>

      {/* Filters */}
      <div className="px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Guruh nomi orqali qidirish"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex space-x-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Qidirish
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Qaytarish
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-end w-full md:w-auto">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded flex items-center space-x-2">
            <ArrowDown size={16} />
            <span>Excel</span>
          </button>
          <button  onClick={() => setOpenModal(true)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center space-x-2">
            <Plus size={16} />
            <span>Guruh yaratish</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Narxi</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ustoz</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fan</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Talabalar soni</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Boshlangan vaqti</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amallar</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {groups.map((group) => (
              <tr key={group.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{group.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{group.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{group.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{group.teacher}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{group.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{group.studentCount} azo</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{group.startDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <NavLink to={`/groups/${group.id}`}>
                    <button
                      className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition"
                      title="Batafsil"
                    >
                      <Search size={16} />
                    </button>
                    </NavLink>
                    <button  onClick={() => setOpenEditModal(true)}
                      className="text-yellow-600 hover:text-yellow-900 p-1 rounded hover:bg-yellow-50 transition"
                      title="Tahrirlash"
                    >
                      <Edit size={16} />
                    </button>
                    <button   onClick={() => setOpenDelModal(true)}
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

      {/* Pagination (Agar kerak bo'lsa) */}
      <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
        <p className="text-sm text-gray-600">
          Jami <span className="font-medium">{groups.length}</span> ta guruhdan{' '}
          <span className="font-medium">{groups.length}</span> tasi ko'rsatildi
        </p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100">
            Oldingi
          </button>
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-md bg-blue-50 text-blue-700">
            1
          </button>
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100">
            Keyingi
          </button>
        </div>
      </div>
       <CreateGroup
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
        <GroupEdit
        isOpen={openEditModal}
        onClose={() => setOpenEditModal(false)}
      />
        <GroupDelete
        isOpen={openDelModal}
        onClose={() => setOpenDelModal(false)}
        onDelete={handleDelete}
      />
    </div>
  );
}