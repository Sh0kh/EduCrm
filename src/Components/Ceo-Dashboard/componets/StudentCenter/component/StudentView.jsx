import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { User, Phone, Calendar, ChevronDown, ChevronUp } from 'lucide-react';


export default function StudentView(){
  const { ID } = useParams();
  const [student, setStudent] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const [isGroupExpanded, setIsGroupExpanded] = useState(true);
  const [studentImage, setStudentImage] = useState(null);

  useEffect(() => {
    // Mock data - API dan keladigan ma'lumotlar
    const mockStudent = {
      id: ID,
      name: "Otzaliyeva Zarina",
      phone: "+998 ",
      parentName: "Otzaliyev Ali",
      parentPhone: "+998  ",
      startDate: "2025-09-13",
      birthDate: "2005-03-15",
      group: {
        name: "Tarix majburiy/16:00/juft",
        subject: "Tarix",
        room: "113",
        price: "300 000 so'm",
        status: "Rasmiy a'zo",
        startDate: "2025-01-09",
        teacher: "Narzullayev Eldor"
      },
      status: "Active"
    };
    
    // Mock student image (aslida API dan keladi)
    const mockImage = "https://marketplace.canva.com/OEQ9I/MAEuj_OEQ9I/1/tl/canva-buildable-instagram-ui-filled-person-icon-MAEuj_OEQ9I.png";
    
    setStudent(mockStudent);
    setStudentImage(mockImage);
  }, [ID]);

  if (!student) return <div className="p-4">Yuklanmoqda...</div>;

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Talaba ma'lumotlari</h1>
        
        {/* Profile section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Student photo */}
            <div className="w-full md:w-1/4 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden mb-4">
                {studentImage && (
                  <img 
                    src={studentImage} 
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <button className="text-blue-600 text-sm font-medium">
                Rasmni o'zgartirish
              </button>
            </div>
            
            {/* Student info */}
            <div className="w-full md:w-3/4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Shaxsiy ma'lumotlari:</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                <div className="flex items-start">
                  <div className="w-1/3 text-gray-600">Ism Familiya</div>
                  <div className="w-2/3 font-medium flex items-center">
                    <User className="mr-2 text-gray-400" size={16} />
                    {student.name}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-1/3 text-gray-600">Telefon </div>
                  <div className="w-2/3 font-medium flex items-center">
                    <Phone className="mr-2 text-gray-400" size={16} />
                    {student.phone}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-1/3 text-gray-600">Ota-ona ismi</div>
                  <div className="w-2/3 font-medium">
                    {student.parentName || "-"}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-1/3 text-gray-600">Ota-ona </div>
                  <div className="w-2/3 font-medium flex items-center">
                    <Phone className="mr-2 text-gray-400" size={16} />
                    {student.parentPhone}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-1/3 text-gray-600">Boshlagan sana</div>
                  <div className="w-2/3 font-medium flex items-center">
                    <Calendar className="mr-2 text-gray-400" size={16} />
                    {student.startDate}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-1/3 text-gray-600">Tug'ilgan kuni</div>
                  <div className="w-2/3 font-medium flex items-center">
                    <Calendar className="mr-2 text-gray-400" size={16} />
                    {student.birthDate}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Group information */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div 
            className="flex justify-between items-center cursor-pointer mb-2"
            onClick={() => setIsGroupExpanded(!isGroupExpanded)}
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {student.group.name}
            </h2>
            {isGroupExpanded ? (
              <ChevronUp size={20} className="text-gray-500" />
            ) : (
              <ChevronDown size={20} className="text-gray-500" />
            )}
          </div>

          <p className="text-gray-600 mb-4">Fan: {student.group.subject}</p>

          {isGroupExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg mt-2">
              <div className="flex items-start">
                <div className="w-1/3 text-gray-600">Xona</div>
                <div className="w-2/3 font-medium">{student.group.room}</div>
              </div>
              
              <div className="flex items-start">
                <div className="w-1/3 text-gray-600">Narx</div>
                <div className="w-2/3 font-medium">{student.group.price}</div>
              </div>
              
              <div className="flex items-start">
                <div className="w-1/3 text-gray-600">Talaba statusi</div>
                <div className="w-2/3 font-medium">{student.group.status}</div>
              </div>
              
              <div className="flex items-start">
                <div className="w-1/3 text-gray-600">O'qituvchi</div>
                <div className="w-2/3 font-medium">{student.group.teacher}</div>
              </div>
              
              <div className="flex items-start">
                <div className="w-1/3 text-gray-600">Boshlagan vaqti</div>
                <div className="w-2/3 font-medium">{student.group.startDate}</div>
              </div>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'payments' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('payments')}
          >
            To'lovlar
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'attendance' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('attendance')}
          >
            Davomat
          </button>
        </div>

        {/* Tab content */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Qo'shimcha ma'lumotlar</h3>
            <p className="text-gray-500">Bu yerda talaba haqida qo'shimcha ma'lumotlar ko'rsatiladi</p>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">To'lovlar tarixi</h3>
            <p className="text-gray-500">To'lovlar ma'lumotlari bu yerda ko'rsatiladi</p>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Davomat tarixi</h3>
            <p className="text-gray-500">Davomat ma'lumotlari bu yerda ko'rsatiladi</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-sm text-gray-500 text-center border-t border-gray-200 pt-4">
          Talabalar / Talaba ma'lumotlari
        </div>
      </div>
    </div>
  );
};
