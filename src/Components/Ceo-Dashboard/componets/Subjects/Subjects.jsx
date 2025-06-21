
import { Search, Plus, Eye, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';
import SubjectCreate from './components/SubjectCreate';
import SubjectEdit from './components/SubjectEdit';
import SubjectDelete from './components/SubjectDelete';
import { NavLink } from 'react-router-dom';


export default function SubjectsPage() {
      const [openModal, setOpenModal] = useState(false);
      const [openEditModal, setOpenEditModal] = useState(false);
      const [openDelModal, setOpenDelModal] = useState(false);


  // Sample data
  const subjects = [
    { id: 1, name: "Biologiya" },
  ];
  

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Barcha Fanlar</h1>
      </div>

      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Nomi orqali qidirish"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-1">
            <Search size={16} />
            <span>Qidirish</span>
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center space-x-1">
            <Plus size={16} />
            <span>Qaytarish</span>
          </button>
        </div>
        <div>
         <button   onClick={() => setOpenModal(true)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center space-x-2">
                   <Plus size={16} />
                 </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nomi</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amallar</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subjects.map((subject) => (
              <tr key={subject.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{subject.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subject.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <NavLink to={`/subjects/${subject.id}`}>
                    <button
                      className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50 transition"
                      title="Batafsil"
                    >
                      <Eye size={16} />
                    </button>
                    </NavLink>
                    <button onClick={() => setOpenEditModal(true)}
                      className="text-yellow-600 hover:text-yellow-900 p-1 rounded hover:bg-yellow-50 transition"
                      title="Tahrirlash"
                    >
                      <Edit size={16} />
                    </button>
                    <button  onClick={() => setOpenDelModal(true)}
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
       <SubjectCreate isOpen={openModal} onClose={() => setOpenModal(false)} />
         <SubjectEdit isOpen={openEditModal} onClose={() => setOpenEditModal(false)} />
         <SubjectDelete isOpen={openDelModal} onClose={() => setOpenDelModal(false)} />

    </div>
  );
}