import React, { useState, useEffect } from 'react';
import { X, User, Phone, BookOpen, MessageSquare, Edit } from 'lucide-react';

export default function ClientEdit({ isOpen, onClose, onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    source: '',
    comment: '',
    phone: '+998',
    subject: ''
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      if (initialData) {
        setFormData({
          name: initialData.name || '',
          source: initialData.source || '',
          comment: initialData.comment || '',
          phone: initialData.phone || '+998',
          subject: initialData.subject || ''
        });
      }
    }
  }, [isOpen, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    handleClose();
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'bg-black bg-opacity-50 opacity-100' : 'bg-opacity-0 opacity-0'}`}>
      <div 
        className={`bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-2xl">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-full mr-4">
              <Edit className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Mijozni Tahrirlash</h2>
              <p className="text-sm text-gray-600">Mijoz ma'lumotlarini yangilang</p>
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-blue-200 transition-colors duration-200 text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-2 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-500" />
                  Mijoz ism familiyasi *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ism va Familiya"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
              </div>

              {/* Source Field */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Mijoz oqimi *
                </label>
                <div className="relative">
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white appearance-none"
                    required
                  >
                    <option value="">Mijoz oqimini tanlang</option>
                    <option value="Social media">Social media</option>
                    <option value="Telefon orqali">Telefon orqali</option>
                    <option value="Tanish orqali">Tanish orqali</option>
                    <option value="Reklama">Reklama</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                  Fan *
                </label>
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white appearance-none"
                    required
                  >
                    <option value="">Fan tanlang</option>
                    <option value="Matematika">Matematika</option>
                    <option value="Fizika">Fizika</option>
                    <option value="Kimyo">Kimyo</option>
                    <option value="Biologiya">Biologiya</option>
                    <option value="Tarix">Tarix</option>
                    <option value="Ingliz tili">Ingliz tili</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Phone Field */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-2 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-blue-500" />
                  Mijoz telefon raqami *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 py-3 border border-r-0 border-gray-200 bg-gray-100 text-gray-600 rounded-l-lg">
                    +998
                  </span>
                  <div className="relative flex-1">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone.replace('+998', '')}
                      onChange={handleChange}
                      placeholder="90 123 45 67"
                      className="w-full px-4 py-3 border border-gray-200 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Comment Field */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-2 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-blue-500" />
                  Izoh
                </label>
                <div className="relative">
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Izoh kiriting"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end pt-6 border-t border-gray-100 mt-6">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-3 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-200 mr-3 font-medium flex items-center"
              >
                <X className="w-5 h-5 mr-2" />
                Bekor qilish
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg flex items-center"
              >
                <Edit className="w-5 h-5 mr-2" />
                O'zgarishlarni Saqlash
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}