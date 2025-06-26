import React, { useState, useRef, useEffect } from 'react';
import { X, User, Phone, Users, Calendar, FileText, ChevronDown, Save } from 'lucide-react';

export default function TeacherStudentsCreate({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+998',
    parentPhone: '+998',
    parentName: '',
    group: '',
    date: '2025-06-20',
    status: ''
  });

  const [isGroupDropdownOpen, setIsGroupDropdownOpen] = useState(false);
  const modalRef = useRef(null);
  const groups = [
    "Tarix majburiy/16:00/juft (Narzullayev Eldor)",
    "Ingliz tili | JUFT | 18:00",
    "Matematika | TOQ | 15:00",
    "Fizika | JUFT | 17:00"
  ];

  // Handle clicks outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleClose = () => {
    document.body.style.overflow = 'auto';
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    handleClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg w-full max-w-2xl transform transition-all duration-300 ease-out scale-95 opacity-0 animate-modal-in"
      >
        <div className="p-6 relative">
          {/* Close button */}
          <button 
            onClick={handleClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Yangi talaba qo'shish</h2>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {/* Column 1 */}
            <div className="space-y-4">
              {/* Ism Familiya */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ism Familiya <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Talaba ism familiyasi"
                  />
                </div>
              </div>

              {/* Telefon Raqam */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon Raqam <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Ota-ona ism familiyasi */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ota-ona ism familiyasi <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Ota-ona ism familiyasi"
                  />
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              {/* Ota-ona raqami */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ota-ona raqami <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="tel"
                    required
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({...formData, parentPhone: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Guruh */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Guruhlar <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsGroupDropdownOpen(!isGroupDropdownOpen)}
                    className={`w-full flex items-center justify-between pl-10 pr-4 py-3 border ${isGroupDropdownOpen ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300'} rounded-lg focus:outline-none transition-all`}
                  >
                    <span className={`truncate ${!formData.group ? 'text-gray-400' : ''}`}>
                      {formData.group || "Guruhni tanlang"}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-gray-400 transition-transform duration-200 ${isGroupDropdownOpen ? 'transform rotate-180' : ''}`} 
                    />
                  </button>
                  {isGroupDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                      {groups.map((group) => (
                        <div
                          key={group}
                          className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors"
                          onClick={() => {
                            setFormData({...formData, group});
                            setIsGroupDropdownOpen(false);
                          }}
                        >
                          {group}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Boshlagan vaqt */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Boshlagan vaqti <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                  />
                </div>
              </div>
            </div>

            {/* Izoh (full width) */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Izoh <span className="text-gray-500">(majburiy emas)</span>
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-4 text-gray-400" size={18} />
                <textarea
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all min-h-[100px]"
                  placeholder="Izoh kiriting"
                />
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 flex justify-end pt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium shadow-sm hover:shadow-md"
              >
                <Save size={18} />
                Saqlash
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};