// AttendanceReport.jsx

import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';

export default function AttendanceCal() {
  // Barcha guruhlar (selectda chiqadiganlar)
  const groups = [
    "Biologiya | Juft | 13:00",
    "Matematika | Juft | 16:00",
    "Tarix | TOQ | 18:00 DTM gruppa",
    "Ingliz tili | Juft | 8:00",
    "Biologiya | TOQ | 13:00"
  ];

  const students = [
    { id: 1, name: "Akbarjon Ortiqboyev", attendance: true, paymentStatus: "Kelgan", percentage: "100%",group: "Biologiya | Juft | 13:00" },
    { id: 2, name: "Gennadiyeva Faniya", attendance: false, paymentStatus: "Kelmadi", percentage: "0%",group: "Matematika | Juft | 16:00" },
    { id: 3, name: "Xo'rozova Sevinch", attendance: true, paymentStatus: "Kelgan", percentage: "100%",group: "Biologiya | Juft | 13:00" },
    { id: 4, name: "G'aybullayeva Saida", attendance: false, paymentStatus: "Kelmadi", percentage: "0%",group: "Ingliz tili | Juft | 8:00" },
    { id: 5, name: "rahmonov ozodbek", attendance: true, paymentStatus: "Kelgan", percentage: "100%",group: "Biologiya | TOQ | 13:00" },
    { id: 6, name: "botirova feruza", attendance: false, paymentStatus: "Kelmadi", percentage: "0%",group: "Tarix | TOQ | 18:00 DTM gruppa" },
  ];

  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedMonth, setSelectedMonth] = useState("");

  // Tanlangan guruhga mos talabalar
  const filteredStudents = selectedGroup
    ? students.filter((student) => student.group === selectedGroup)
    : [];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Davomat hisoboti</h1>
      </div>

      {/* Filters */}
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
            type="number"
            id="yearInput"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            id="monthSelect"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Oy tanlang</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="flex space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Qidirish
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Qaytarish
          </button>
        </div>
      </div>

      {/* Report Details */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-medium mb-4">Guruh: {selectedGroup}</h2>
        <p className="text-sm text-gray-500">{selectedYear}-yil {selectedMonth} oy uchun davomat</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto px-6 py-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">№</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Talaba Ism familyasi</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To'lov holati</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Foiz</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, idx) => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.paymentStatus}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.percentage}</td>
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

      {/* Total Payment */}
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex justify-between">
          <span>Jami To'lov</span>
          <span className="font-medium text-blue-600">0 so'm</span>
        </div>
      </div>

      {/* Download Button */}
      <div className="px-6 py-4 flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          PDF yuklash
        </button>
      </div>
    </div>
  );
}