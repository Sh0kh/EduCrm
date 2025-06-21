import React, { useState } from 'react';
import logo from '../UI/logo.png'
export default function LeadCapture() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.phone && formData.subject) {
      console.log('Form submitted:', formData);
      alert("Ma'lumotlaringiz muvaffaqiyatli yuborildi!");
      // Reset form
      setFormData({
        name: '',
        phone: '',
        subject: ''
      });
    } else {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mb-[-60px]">
          <img src={logo} alt="" />
          </div>
          <p className="text-white/90 text-sm leading-relaxed px-4">
            Ro'yxatdan o'tish uchun iltimos quyidagi <br />
            ma'lumotlarni kiriting !
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ism familiya"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Telefon raqam"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="relative">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="" className="text-gray-800">Fan tanlang</option>
                <option value="matematika" className="text-gray-800">Matematika</option>
                <option value="fizika" className="text-gray-800">Fizika</option>
                <option value="kimyo" className="text-gray-800">Kimyo</option>
                <option value="biologiya" className="text-gray-800">Biologiya</option>
                <option value="ingliz-tili" className="text-gray-800">Ingliz tili</option>
                <option value="ona-tili" className="text-gray-800">Ona tili</option>
                <option value="tarix" className="text-gray-800">Tarix</option>
                <option value="geografiya" className="text-gray-800">Geografiya</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl mt-6"
            >
              Ro'yxatdan o'tish
            </button>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-white/60 text-xs">
            Ma'lumotlaringiz xavfsiz saqlanadi
          </p>
        </div>
      </div>
    </div>
  );
}