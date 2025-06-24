
import { ChevronLeft } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function TeacherView() {
  const navigateBack = useNavigate()

  const teacher = {
    id: 1,
    name: "Akbarjon Ortiqboyev",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&s",
    subject: "Ona tili",
    phone: "+998 943534455",
    crmLogin: "akbarjon",
  };

  const groups = [
    {
      id: 31,
      name: "Ona tili | TOQ | 14:00",
      subject: "Ona tili",
      price: "450 000 so'm",
      studentCount: 32,
      startDate: "2024-09-02",
    },

  ];

  return (
    <div className='min-h-screen p-6 mt-[10px]'>
      <div className="flex justify-between items-center mb-[20px]">
        <h1 className="text-3xl font-bold text-gray-800">Ustoz malumotlari</h1>
        <nav className="text-gray-500 text-sm">
          <span>Ustoz</span>
          <span className="mx-2">/</span>
          <span>statistika</span>
        </nav>
      </div>
      <div className=" rounded-lg shadow-sm  overflow-hidden">
        {/* Header */}
        <div className=" py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className='flex items-center justify-between'>
              <h2 className="text-lg font-bold mb-4">{teacher.name}</h2>
              <button onClick={() => navigateBack(-1)} className="text-gray-500 hover:text-gray-800">
                <ChevronLeft size={20} />
              </button>
            </div>
            <hr className="my-2" />

            <div className="flex items-center mb-2">
              <img
                src={teacher.profileImage}
                alt="Profile Image"
                className="w-[100px] h-[100px] rounded-full mr-2"
              />
            </div>

            <div className="space-y-2">
              <div>
                <p className="font-medium">Ism familya</p>
                <p className="text-sm text-gray-500">{teacher.name}</p>
              </div>
              <div>
                <p className="font-medium">Telefon raqam</p>
                <p className="text-sm text-gray-500">{teacher.phone}</p>
              </div>
              <div>
                <p className="font-medium">CRM Login</p>
                <p className="text-sm text-gray-500">{teacher.crmLogin}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h2 className="text-lg font-bold mb-4">Guruhlar</h2>
            <hr className="my-2" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {groups.map((group) => (
                <div key={group.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <h3 className="text-sm font-medium mb-2">{group.name}</h3>
                  <p className="text-sm text-gray-500">Fan: {group.subject}</p>
                  <hr className="my-2" />
                  <p className="text-sm text-gray-500">id: {group.id}</p>
                  <p className="text-sm text-gray-500">Narxi: {group.price}</p>
                  <p className="text-sm text-gray-500">Talabalar soni: {group.studentCount} ta azo</p>
                  <p className="text-sm text-gray-500">Boshlangan vaqti: {group.startDate}</p>
                  <NavLink to={`/groups/${group.id}`}>
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded mt-2"
                      title="Ko'rish"
                    >
                      View
                    </button></NavLink>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}