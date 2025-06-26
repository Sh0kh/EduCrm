import React, { useState } from 'react';
import { 
  PencilIcon, 
  TrashIcon, 
  EyeIcon,
  PlusIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function UltraRatesCenter() {
  const [rates, setRates] = useState([
    {
      id: 1,
      name: "Basic",
      price: "100$",
      monthly: "10$",
      duration: "10 oy",
      description: "Dasturlashga birinchi qadam. Asosiy tushunchalar, praktik mashqlar va haftalik baholash orqali mustahkam poydevor yarating.",
      popular: false,
      studentsCount: 45
    },
    {
      id: 2,
      name: "Standard",
      price: "200$",
      monthly: "15$",
      duration: "13 oy",
      description: "Professional ko'nikmalar va individual yondashuv. Mentorlık, amaliy loyihalar va karera yo'nalishi bo'yicha to'liq qo'llab-quvvatlash.",
      popular: true,
      studentsCount: 78
    },
    {
      id: 3,
      name: "Premium",
      price: "350$",
      monthly: "20$",
      duration: "17 oy",
      description: "Ekspert darajasida ta'lim. Shaxsiy mentor, real loyihalar ustida ishlash va ish joyiga tavsiya olish imkoniyati.",
      popular: false,
      studentsCount: 32
    },
    {
      id: 4,
      name: "Enterprise",
      price: "500$",
      monthly: "25$",
      duration: "20 oy",
      description: "Korporativ darajadagi premium ta'lim. Maxsus dastur, 24/7 qo'llab-quvvatlash va professional analytics bilan to'liq ekosistema.",
      popular: false,
      studentsCount: 15
    }
  ]);

  const handleView = (id) => {
    console.log('View rate:', id);
  };

  const handleEdit = (id) => {
    console.log('Edit rate:', id);
  };

  const handleDelete = (id) => {
    if (window.confirm('Bu tarifni o\'chirishni xohlaysizmi?')) {
      setRates(rates.filter(rate => rate.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Tariflar Markazi
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ta'lim markazingiz uchun eng mos tarifni tanlang
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: CurrencyDollarIcon,
              label: "Jami Tariflar",
              value: rates.length,
              bgColor: "bg-blue-500"
            },
            {
              icon: UserGroupIcon,
              label: "Jami Talabalar",
              value: rates.reduce((sum, rate) => sum + rate.studentsCount, 0),
              bgColor: "bg-green-500"
            },
            {
              icon: StarIcon,
              label: "Mashhur Tarif",
              value: rates.find(rate => rate.popular)?.name || 'Yo\'q',
              bgColor: "bg-purple-500"
            },
            {
              icon: ClockIcon,
              label: "O'rtacha Muddat",
              value: `${Math.round(rates.reduce((sum, rate) => sum + parseInt(rate.duration), 0) / rates.length)} oy`,
              bgColor: "bg-orange-500"
            }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="flex items-center">
                <div className={`p-3 ${stat.bgColor} rounded-xl shadow-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Rate Button */}
        <div className="flex justify-center mb-12">
          <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center">
              <PlusIcon className="h-6 w-6 mr-2 group-hover:rotate-90 transition-transform duration-300" />
              <span className="text-lg">Yangi Tarif Qo'shish</span>
            </div>
          </button>
        </div>

        {/* Rates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {rates.map((rate, index) => (
            <div
              key={rate.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 ${
                rate.popular ? 'border-blue-400 ring-4 ring-blue-100' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              
              {/* Popular Badge */}
              {rate.popular && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center">
                    <StarIcon className="h-4 w-4 mr-1" />
                    Eng mashhur
                  </div>
                </div>
              )}

              {/* Card Header */}
              <div className="p-8 pb-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {rate.name}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm space-x-4">
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {rate.duration}
                      </div>
                      <div className="flex items-center">
                        <UserGroupIcon className="h-4 w-4 mr-1" />
                        {rate.studentsCount} talaba
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-gray-900 mb-1 group-hover:scale-110 transition-transform duration-300">
                      {rate.price}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {rate.monthly}/oy
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Tavsif
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {rate.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8">
                <div className="grid grid-cols-3 gap-3">
          
                  <button
                    onClick={() => handleEdit(rate.id)}
                    className="group/btn flex items-center justify-center px-4 py-3 bg-amber-50 hover:bg-amber-100 text-amber-600 hover:text-amber-700 border border-amber-200 rounded-xl transition-all duration-300 hover:shadow-md"
                  >
                    <PencilIcon className="h-4 w-4 mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">Tahrirlash</span>
                  </button>
                  <button
                    onClick={() => handleDelete(rate.id)}
                    className="group/btn flex items-center justify-center px-4 py-3 bg-red-50 hover:bg-red-100 text-red-600 hover:red-700 border border-red-200 rounded-xl transition-all duration-300 hover:shadow-md"
                  >
                    <TrashIcon className="h-4 w-4 mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">O'chirish</span>
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {rates.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center p-8 bg-gray-100 rounded-full mb-8">
              <CurrencyDollarIcon className="h-16 w-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hech qanday tarif topilmadi
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Birinchi tarifingizni qo'shing va boshlab bering
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <PlusIcon className="h-6 w-6 mr-2" />
              <span className="text-lg">Birinchi Tarifni Qo'shish</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}