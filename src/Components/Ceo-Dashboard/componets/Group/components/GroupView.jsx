
import { ChevronLeft } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function GroupView() {
  const navigateBack = useNavigate()
  const group = {
    name: "Jaloliddin matematika toq [14:00]",
    subject: "Matematika",
    price: "400 000 so'm",
    teacher: "Ernazarov Jaloliddin",
    studentCount: 8,
    startDate: "2025-03-01",
    creator: "Nurjamol Xidirova"
  };

  const students = [
    {
      id: 1777,
      fullName: "nasriddinova muslima 5",
      phoneNumber: "+998 90401"
    },
    {
      id: 1945,
      fullName: "xudoyberdiyev elyorjon",
      phoneNumber: "+998 932100910"
    },


  ];

  return (
    <div className='min-h-screen p-6 mt-[10px]'>
      <div className="flex justify-between items-center mb-[30px]">
        <h1 className="text-3xl font-bold text-gray-800">Barcha malumotlar</h1>
        <nav className="text-gray-500 text-sm">
          <span>Guruhlar</span>
          <span className="mx-2">/</span>
          <span>statistika</span>
        </nav>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 pt-4  flex justify-between items-center">
          <h2 className='text-2xl'>Barcha malumotlar</h2 >
          <button onClick={() => navigateBack(-1)} className="text-gray-500 hover:text-gray-800">
            <ChevronLeft size={20} />
          </button>
        </div>

        <div className="flex gap-4 px-6 py-4">
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h2 className="text-xl font-bold mb-2">{group.name}</h2>
            <p className="text-sm text-gray-500">{group.subject}</p>
            <hr className="my-2" />

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium">Guruh narxi</p>
                <p className="text-sm text-gray-500">{group.price}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Guruh ustozi</p>
                <p className="text-sm text-gray-500">{group.teacher}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Talabalar soni</p>
                <p className="text-sm text-gray-500">{group.studentCount} ta azo</p>
              </div>
              <div>
                <p className="text-sm font-medium">Yaratgan admin</p>
                <p className="text-sm text-gray-500">{group.creator}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Boshlangan vaqti</p>
                <p className="text-sm text-gray-500">{group.startDate}</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="flex space-x-4 mb-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 rounded-t-lg border-b-2 border-gray-200 active tab-border-blue focus:outline-none">
                Faol talabalar
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 rounded-t-lg border-b-2 border-gray-200 active tab-border-green focus:outline-none">
                Davomat tarixi
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 rounded-t-lg border-b-2 border-gray-200 active tab-border-red focus:outline-none">
                Tolov tarixi
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ism familya</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefon raqam</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amallar</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.fullName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{student.phoneNumber}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <NavLink to={`/student/${student.id}`}>
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
        </div>
      </div>
    </div>
  );
}