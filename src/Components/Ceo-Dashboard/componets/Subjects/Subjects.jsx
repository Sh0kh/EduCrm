
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
    <div className='min-h-screen p-6 mt-[10px]'>
      <div className="flex justify-between items-center flex-wrap gap-2 mb-[30px]">
        <h1 className="text-3xl font-bold text-gray-800">Barcha Guruhlar</h1>
        <nav className="text-gray-500 text-sm">
          <span>Guruh</span>
          <span className="mx-2">/</span>
          <span>statistika</span>
        </nav>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mt-[20px]">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Barcha Fanlar</h1>
          <div>
            <button onClick={() => setOpenModal(true)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center space-x-2">
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
        <SubjectCreate isOpen={openModal} onClose={() => setOpenModal(false)} />
        <SubjectEdit isOpen={openEditModal} onClose={() => setOpenEditModal(false)} />
        <SubjectDelete isOpen={openDelModal} onClose={() => setOpenDelModal(false)} />

      </div>
    </div>
  );
}