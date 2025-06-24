import React, { useState } from 'react';
import { Search, Download, Plus, Eye, Edit, CreditCard } from 'lucide-react';
import StudentCreate from './component/StudentCreate';
import StudentEdit from './component/StudentEdit';
import { NavLink } from 'react-router-dom';

// Sample data
const initialStudents = [
  {
    id: 1,
    name: "orazaliyeva zarina",
    phone: "+998",
    group: "Tarix majburiy/16:00/juft",
    date: "2025-03-13",
    status: "Mavjud emas"
  },
  {
    id: 2,
    name: "muhammadiyev abbos",
    phone: "+998 910223111",
    group: "Ingliz tili | JUFT | 18:00",
    date: "2025-04-04",
    status: "Mavjud emas"
  },
];

// Format date for display
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('uz-UZ', options);
};

// Main Students Component
export default function Student() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.phone.includes(searchTerm) ||
    student.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedStudents(filteredStudents.map(s => s.id));
    } else {
      setSelectedStudents([]);
    }
  };

  const handleSelectStudent = (studentId, checked) => {
    if (checked) {
      setSelectedStudents([...selectedStudents, studentId]);
    } else {
      setSelectedStudents(selectedStudents.filter(id => id !== studentId));
    }
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (updatedStudent) => {
    setStudents(students.map(s =>
      s.id === updatedStudent.id ? updatedStudent : s
    ));
    setIsEditModalOpen(false);
  };

  const handleViewDetail = (student) => {
    console.log('View detail for:', student);
    // Implement detail view modal
  };

  const handlePayment = (student) => {
    console.log('Payment for:', student);
    // Implement payment modal
  };

  const handleCreateStudent = (newStudent) => {
    const newId = Math.max(0, ...students.map(s => s.id)) + 1;
    setStudents([...students, { ...newStudent, id: newId }]);
    setIsCreateModalOpen(false);
  };

  const handleExport = () => {
    console.log('Exporting students data...');
    // Implement export functionality
  };

  const handleDeleteSelected = () => {
    setStudents(students.filter(s => !selectedStudents.includes(s.id)));
    setSelectedStudents([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Talabalar</h1>
          <nav className="text-sm text-gray-500 flex gap-4">
            <span>
              Talabalar / Barcha talabalar
            </span>
            {/* <NavLink to="/archiveStudents">
              <span>Bitirgan talabalar </span>
            </NavLink> */}
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
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                >
                  Qaytarish
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Talabalar</h2>
              <div className="flex gap-3">
                <button
                  onClick={handleExport}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-sm"
                >
                  <Download size={18} />
                  Excel
                </button>
                <button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium shadow-sm"
                >
                  <Plus size={18} />
                  Yangi
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedStudents.length === filteredStudents.length && filteredStudents.length > 0}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Ism familiya</th>
                  <th className="qwerty-m4 px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Telefon raqam</th>
                  <th className="qwerty-m3 px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Guruh</th>
                  <th className="qwerty-m2 px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Boshlagan vaqti</th>
                  <th className="qwerty-m1 px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Izoh</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Amallar</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedStudents.includes(student.id)}
                          onChange={(e) => handleSelectStudent(student.id, e.target.checked)}
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
                        />
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 capitalize font-medium">{student.name}</td>
                      <td className="qwerty-m4 px-6 py-4 text-sm text-gray-700">{student.phone}</td>
                      <td className="qwerty-m3 px-6 py-4 text-sm text-gray-700">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {student.group}
                        </span>
                      </td>
                      <td className="qwerty-m2 px-6 py-4 text-sm text-gray-700">{formatDate(student.date)}</td>
                      <td className="qwerty-m1 px-6 py-4 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${student.status === "Mavjud emas"
                          ? "bg-red-100 text-red-800"
                          : "bg-green-100 text-green-800"
                          }`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <NavLink to={`/student/${student.id}`}>

                            <button
                              onClick={() => handleViewDetail(student)}
                              className="inline-flex items-center p-2 text-blue-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-200"
                              title="Batafsil"
                              aria-label="View details"
                            >
                              <Eye size={16} />
                            </button>

                          </NavLink>

                          <button
                            onClick={() => handleEdit(student)}
                            className="inline-flex items-center p-2 text-green-600 hover:text-green-900 hover:bg-green-50 rounded-lg transition-all duration-200"
                            title="Tahrirlash"
                            aria-label="Edit student"
                          >
                            <Edit size={16} />
                          </button>


                          <NavLink to={`/studentpayment/${student.id}`}>
                            <button
                              onClick={() => handlePayment(student)}
                              className="inline-flex items-center p-2 text-purple-600 hover:text-purple-900 hover:bg-purple-50 rounded-lg transition-all duration-200"
                              title="To'lov qilish"
                              aria-label="Make payment"
                            >
                              <CreditCard size={16} />
                            </button>
                          </NavLink>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                      Hech qanday talaba topilmadi
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-700">
              <span>
                Jami {filteredStudents.length} ta talaba
                {selectedStudents.length > 0 && (
                  <span className="ml-2 text-blue-600 font-medium">
                    ({selectedStudents.length} ta tanlangan)
                  </span>
                )}
              </span>
              <div className="flex items-center gap-2">
                <span>Sahifa: 1 / 1</span>
              </div>
            </div>
          </div>
        </div>

        {selectedStudents.length > 0 && (
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-blue-800 font-medium">
                {selectedStudents.length} ta talaba tanlangan
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handleExport}
                  className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                >
                  Eksport qilish
                </button>
                <button
                  onClick={handleDeleteSelected}
                  className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm"
                >
                  O'chirish
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <StudentCreate
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={handleCreateStudent}
      />
      <StudentEdit
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        student={selectedStudent}
        onSave={handleSaveEdit}
      />
    </div>
  );
}