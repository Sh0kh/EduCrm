// AttendancePage.jsx

import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Attendance() {
  // Barcha guruhlar (selectda chiqadiganlar)
  const groups = [
    "Ona tili | Juft | 16:00",
    "Matematika | Toq | 14:00",
    "Tarix | TOQ | 18:00 DTM gruppa",
    "Ingliz tili | TOQ | 8:00",
    "Biologiya | Juft | 13:00"
  ];

  // Sample data - talabalar bilan guruh aloqasi
  const students = [
    { id: 1, name: "fayziddinova mahliyo", paymentStatus: "0 so'm", group: "Ona tili | Juft | 16:00" },
    { id: 2, name: "Gennadiyeva Faniya", paymentStatus: "0 so'm", group: "Ona tili | Juft | 16:00" },
    { id: 3, name: "Xo'rozova Sevinch", paymentStatus: "0 so'm", group: "Matematika | Toq | 14:00" },
    { id: 4, name: "G'aybullayeva Saida", paymentStatus: "0 so'm", group: "Tarix | TOQ | 18:00 DTM gruppa" },
    { id: 5, name: "rahmonov ozodbek", paymentStatus: "0 so'm", group: "Ingliz tili | TOQ | 8:00" },
    { id: 6, name: "botirova feruza", paymentStatus: "0 so'm", group: "Biologiya | Juft | 13:00" },
  ];

  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Tanlangan guruhga mos talabalar
  const filteredStudents = selectedGroup
    ? students.filter((student) => student.group === selectedGroup)
    : [];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mt-[20px]">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Davomat</h1>
        <NavLink to="/attendanceCal">
        <h1 className="text-xl font-bold text-gray-800">Davomat Hisoboti</h1>
        </NavLink>        

      </div>

      <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <select
            id="groupSelect"
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Guruhni tanlang</option>
            {groups.map((group, index) => (
              <option key={index} value={group}>
                {group}
              </option>
            ))}
          </select>

          <input
            type="date"
            id="datePicker"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Saqlash
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Qaytarish
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto px-6 py-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">№</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ism familya</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To'lov holati</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Yo'qlama</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, idx) => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.paymentStatus}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name={`attendance-${student.id}`}
                          value="Kelgan"
                          className="form-radio h-4 w-4 text-green-600"
                        />
                        <span className="ml-2">Kelgan</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name={`attendance-${student.id}`}
                          value="Kelmadi"
                          className="form-radio h-4 w-4 text-red-600"
                        />
                        <span className="ml-2">Kelmadi</span>
                      </label>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                  Ushbu guruh uchun talaba topilmadi
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Save Button */}
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Yo'qlamaning saqlash
        </button>
        <p className="text-red-500 mt-2">Davomati saqlash tugmasini bosashingiz unutmang!</p>
      </div>
    </div>
  );
}