import React from 'react';

export default function RatesCenter() {
  const rates = [
    {
      name: "Basic",
      price: "100$",
      monthly: "10$",
      duration: "10 oy",
      features: ["Asosiy darslar", "Online material", "Haftalik test"],
      popular: false
    },
    {
      name: "Standard",
      price: "200$",
      monthly: "15$",
      duration: "13 oy",
      features: ["Barcha Basic imkoniyatlar", "Individual konsultatsiya", "Amaliy mashg'ulotlar", "Sertifikat"],
      popular: true
    },
    {
      name: "Premium",
      price: "350$",
      monthly: "20$",
      duration: "17 oy",
      features: ["Barcha Standard imkoniyatlar", "1-1 mentor", "Loyiha ishi", "Ish joyiga tavsiya", "Lifetime access"],
      popular: false
    },
    {
      name: "Enterprise",
      price: "500$",
      monthly: "25$",
      duration: "20 oy",
      features: ["Barcha Premium imkoniyatlar", "Korporativ trening", "Custom curriculum", "24/7 support", "Analytics dashboard"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-8">
            Ta'lim Markazlari Tariflari
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sizning ehtiyojlaringizga mos keladigan tarif paketini tanlang va ta'lim sifatini oshiring
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rates.map((rate, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                rate.popular ? 'ring-4 ring-blue-500 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {rate.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Eng mashhur
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {rate.name}
                  </h3>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-bold text-blue-600">
                      {rate.price}
                    </span>
                  </div>
                  <div className="text-gray-600">
                    <span className="text-lg font-semibold text-blue-500">
                      {rate.monthly}
                    </span>
                    <span className="text-sm"> / oyiga</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                      {rate.duration} davomida
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {rate.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                    rate.popular
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg'
                      : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                >
                  Tanlash
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tariflarni Solishtiring
            </h2>
            <p className="text-gray-600">
              Barcha paketlarning batafsil solishtiruvi
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Xususiyatlar</th>
                    {rates.map((rate, index) => (
                      <th key={index} className={`px-6 py-4 text-center font-semibold relative ${rate.popular ? 'relative' : ''}`}>
                        {rate.name}
                        {rate.popular && (
                          <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-blue-900 text-xs px-2 py-1 rounded-full font-bold">
                            TOP
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Umumiy narx</td>
                    {rates.map((rate, index) => (
                      <td key={index} className={`px-6 py-4 text-center text-blue-600 font-bold ${rate.popular ? 'bg-blue-50' : ''}`}>
                        {rate.price}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Oylik to'lov</td>
                    {rates.map((rate, index) => (
                      <td key={index} className={`px-6 py-4 text-center text-green-600 font-semibold ${rate.popular ? 'bg-blue-50' : ''}`}>
                        {rate.monthly}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Davomiyligi</td>
                    {rates.map((rate, index) => (
                      <td key={index} className={`px-6 py-4 text-center ${rate.popular ? 'bg-blue-50' : ''}`}>
                        {rate.duration}
                      </td>
                    ))}
                  </tr>
                  {[
                    { feature: "Tezda boshqaruv", values: [true, true, true, true] },
                    { feature: "Online materiallar", values: [true, true, true, true] },
                    { feature: "Individual", values: [false, true, true, true] },
                    { feature: "24/7 Support", values: [false, false, false, true] }
                  ].map((row, rowIndex) => (
                    <tr key={rowIndex} className={`border-b border-gray-200 ${rowIndex % 2 === 1 ? 'bg-gray-50' : ''}`}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                      {row.values.map((hasFeature, index) => (
                        <td key={index} className={`px-6 py-4 text-center ${rates[index].popular ? 'bg-blue-50' : ''}`}>
                          <svg className={`h-5 w-5 mx-auto ${hasFeature ? 'text-green-500' : 'text-red-500'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d={hasFeature 
                              ? "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              : "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            } clipRule="evenodd" />
                          </svg>
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="px-6 py-6 font-semibold text-gray-900">Tanlash</td>
                    {rates.map((rate, index) => (
                      <td key={index} className={`px-6 py-6 text-center ${rate.popular ? 'bg-blue-50' : ''}`}>
                        <button className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                          rate.popular 
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg'
                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                        }`}>
                          Tanlash
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Barcha paketlarda mavjud
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
              <div className="flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                SSL himoyasi
              </div>
              <div className="flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                24/7 texnik yordam
              </div>
              <div className="flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pul qaytarish kafolati
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}