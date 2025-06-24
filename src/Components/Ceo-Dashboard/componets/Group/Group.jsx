import React, { useState } from 'react';
import { Search, Plus, ArrowDown, Edit, Trash2, Download } from 'lucide-react';
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
  ];

  return (
    <div className='p-6 mt-[10px] min-h-screen'>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className="text-3xl font-bold text-gray-800">Barcha Guruhlar</h1>
        <nav className="text-gray-500 text-sm">
          <span>Guruh</span>
          <span className="mx-2">/</span>
          <span>statistika</span>
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

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mt-[20px]">
        {/* Filters */}
        <div className="px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Guruh</h2>
          </div>
          <div className="flex flex-wrap gap-2 justify-end w-full md:w-auto">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-sm"
            >
              <Download size={18} />
              Excel
            </button>
            <button
              onClick={() => setOpenModal(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center space-x-2"
            >
              <Plus size={16} />
              <span>Guruh yaratish</span>
            </button>
          </div>
        </div>

        <div className=" overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Narxi</th>
                <th className="qwerty-m4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ustoz</th>
                <th className="qwerty-m3  px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fan</th>
                <th className="qwerty-m2  px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Talabalar soni</th>
                <th className="qwerty-m1  px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Boshlangan vaqti</th>
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
                  <td className="qwerty-m4 px-6 py-4 whitespace-nowrap text-sm text-gray-700">{group.teacher}</td>
                  <td className="qwerty-m3  px-6 py-4 whitespace-nowrap text-sm text-gray-700">{group.subject}</td>
                  <td className="qwerty-m2  px-6 py-4 whitespace-nowrap text-sm text-gray-700">{group.studentCount} azo</td>
                  <td className="qwerty-m1  px-6 py-4 whitespace-nowrap text-sm text-gray-700">{group.startDate}</td>
                  <td className=" px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <NavLink to={`/groups/${group.id}`}>
                        <button
                          className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition"
                          title="Batafsil"
                        >
                          <Search size={16} />
                        </button>
                      </NavLink>
                      <button onClick={() => setOpenEditModal(true)}
                        className="text-yellow-600 hover:text-yellow-900 p-1 rounded hover:bg-yellow-50 transition"
                        title="Tahrirlash"
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
    </div>
  );
}
