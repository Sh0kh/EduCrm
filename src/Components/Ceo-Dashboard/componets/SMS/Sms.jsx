import React, { useState } from 'react';

export default function Sms() {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const groups = [
        "Ona tili | TOQ | 14:00",
         "Matematika | Juft | 16:00",
        "Tarix | TOQ | 18:00 DTM gruppa",
        " Ingliz tili | TOQ | 8:00",   " Biologiya | TOQ | 13:00"
  ];

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    setIsDropdownOpen(false);
  };

  const handleSendSMS = () => {
    if (selectedGroup) {
      alert(`SMS ${selectedGroup}ga yuborildi!`);
    } else {
      alert('Iltimos, guruhni tanlang!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-10xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Xabar jo'natish</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>SMS Jonatmalar</span>
            <span>/</span>
            <span className="text-blue-600">Xabar yuborish</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tolov uchun eslatma <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full max-w-md px-4 py-3 text-left bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex justify-between items-center"
              >
                <span className={selectedGroup ? 'text-gray-900' : 'text-gray-400'}>
                  {selectedGroup || 'Click to select an group'}
                </span>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute z-10 w-full max-w-md mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                  {groups.map((group, index) => (
                    <button
                      key={index}
                      onClick={() => handleGroupSelect(group)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 border-b border-gray-100 last:border-b-0"
                    >
                      {group}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleSendSMS}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-2.5 rounded-lg transition-colors duration-200"
          >
            Yuborish
          </button>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">
              Guruhni tanlang va yuborish tugmasini bosing va SMS xabarnoma guruhdagi tolov qilmagan talabalar uchun avtomatik tarzda yuboriladi.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">SMS Namuna</h3>
              <p className="text-sm text-gray-600 italic">
                Assalomu aleykum $studentName ning ota-onasi, Iltimos $subjectName kursiga joriy oy uchun 15-sanagacha to'lov qilishni unutmang. Xurmat bilan MAGISTR o'quv markazi !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}