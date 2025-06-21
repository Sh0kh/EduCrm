
import { ChevronLeft } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';


export default function SubjectView() {
        const navigateBack = useNavigate()
    
  const subject = {
    id: 1,
    name: "Biologiya",
  };

  const groups = [
    {
      id: 2,
      group: "Biologiya | TOQ | 14:00",
      price: "400 000 so'm",
      teacher: "ravshanov axror",
      studentCount: 47,
      startDate: "2024-09-02",
    },
    {
      id: 3,
      group: "Biologiya | TOQ | 16:00",
      price: "400 000 so'm",
      teacher: "ravshanov axror",
      studentCount: 24,
      startDate: "2024-09-02",
    },
    {
      id: 4,
      group: "Biologiya | Juft | 08:00",
      price: "400 000 so'm",
      teacher: "ravshanov axror",
      studentCount: 35,
      startDate: "2024-09-02",
    },
    {
      id: 5,
      group: "Biologiya | Juft | 12:00",
      price: "400 000 so'm",
      teacher: "ravshanov axror",
      studentCount: 30,
      startDate: "2024-09-02",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Fan malumotlari</h1>
        <button onClick={()=>navigateBack(-1)} className="text-gray-500 hover:text-gray-800">
          <ChevronLeft size={20} />
        </button>
      </div>

      <div className="px-6 py-4 border-b border-gray-200 flex space-x-2">
        <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md">
          Guruhlar
        </button>
        <NavLink to={`/subjects/${subject.id}/techers`}>
           <button className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 rounded-md">
          Ustozlar
        </button>
        </NavLink>
     
      </div>

      <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {groups.map((group) => (
          <div key={group.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="text-sm font-medium mb-2">{group.group}</h3>
            <p className="text-sm text-gray-500">Fan: {subject.name}</p>
            <hr className="my-2" />
            <p className="text-sm text-gray-500">ID: {group.id}</p>
            <p className="text-sm text-gray-500">Narxi: {group.price}</p>
            <p className="text-sm text-gray-500">Ustoz: {group.teacher}</p>
            <p className="text-sm text-gray-500">Talabalar soni: {group.studentCount} ta azo</p>
            <p className="text-sm text-gray-500">Boshlangan vaqti: {group.startDate}</p>
            <NavLink to={`/groups/${group.id}`}>
             <button
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded mt-2"
              title="Batafsil"
            >
              Batafsil
            </button></NavLink>
           
          </div>
        ))}
      </div>
    </div>
  );
}