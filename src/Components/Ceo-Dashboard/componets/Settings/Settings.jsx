import React, { useState } from 'react';
import PasswordChange from './PasswordChange';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');
  const [userSettings, setUserSettings] = useState({
    userName: 'Muhammadaziz',
    number: '+998',
    login: 'aziz',
    image: null
  });
const [openModal, setOpenModal] = useState(false);
  const handleInputChange = (field, value) => {
    setUserSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserSettings(prev => ({
          ...prev,
          image: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = () => {
    alert('Ma\'lumotlar muvaffaqiyatli yangilandi!');
  };

  const handleCancel = () => {
    setUserSettings({
      userName: 'Muhammadaziz',
      number: '+998',
      login: 'aziz',
      image: null
    });
  };

  const tabs = [
    { id: 'general', label: 'General Settings', active: true },
    { id: 'password', label: 'Password change', active: false, onClick: ()=> setOpenModal(true) },
    { id: 'social', label: 'Social Links', active: false },
    { id: 'payment', label: 'Payment Methods', active: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Sozlamalar</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Settings</span>
            <span>/</span>
            <span className="text-blue-600">General Settings</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
         {tabs.map((tab) => (
  <button
    key={tab.id}
    onClick={() => {
      setActiveTab(tab.id);
      if (tab.id === 'password') setOpenModal(true); // faqat parol tabi bosilganda
    }}
    className={`px-6 py-2.5 rounded-lg border font-medium transition-colors duration-200 ${
      activeTab === tab.id
        ? 'bg-blue-600 text-white border-blue-600'
        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
    }`}
  >
    {tab.label}
  </button>
))}

        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">User settings</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User Name
              </label>
              <input
                type="text"
                value={userSettings.userName}
                onChange={(e) => handleInputChange('userName', e.target.value)}
                className="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number
              </label>
              <input
                type="text"
                value={userSettings.number}
                onChange={(e) => handleInputChange('number', e.target.value)}
                className="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Login
              </label>
              <input
                type="text"
                value={userSettings.login}
                onChange={(e) => handleInputChange('login', e.target.value)}
                className="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  Rasm (majburiy emas) 
                  <span className="text-red-500 ml-1">*</span>
                </span>
              </label>
              <div className="flex items-center space-x-4">
                {userSettings.image && (
                  <img 
                    src={userSettings.image} 
                    alt="Profile" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                  />
                )}
                <div className="flex items-center space-x-2">
                  <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 transition-colors duration-200">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    Выберите файл
                  </label>
                  <span className="text-sm text-gray-500">
                    {userSettings.image ? 'Файл выбран' : 'Файл не выбран'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handleUpdate}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-2.5 rounded-lg transition-colors duration-200"
            >
              Update
            </button>
            <button
              onClick={handleCancel}
              className="bg-white hover:bg-gray-50 text-gray-700 font-medium px-8 py-2.5 rounded-lg border border-gray-300 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
       <PasswordChange isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}