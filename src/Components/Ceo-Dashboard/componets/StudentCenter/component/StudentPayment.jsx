import { Printer, Edit, Trash2, ArrowLeft, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import StudentPaymentCreate from './StudentPayment/StudentPaymentCreate';
import StudentPaymentEdit from './StudentPayment/StudentPaymentEdit';
import StudentPaymentReceipt from './StudentPayment/StudentPaymentReceipt';
import StudentPaymentDelete from './StudentPayment/StudentPaymentDelete';
export default function StudentPayement() {
  const navigate = useNavigate();
   const [openModal, setOpenModal] = useState(false);
   const [openEditModal, setEditModal] = useState(false);
   const [openRecModal, setRecOpenModal] = useState(false);
   const [openDeleteModal, setOpenDeleteModal] = useState(false);


    const handleDelete = () => {
    console.log("To'lov o'chirildi!");
    // O'chirish logikasini bu yerda yozing (API so'rov va h.k.)
    setOpenDeleteModal(false);
  };

  const payments = [ 
    {
      id: 3137,
      groupName: "Tarix majburiy/16.00/juft",
      paymentMonth: "2025 Mart",
      amount: "125,000 söm",
      paymentType: "Plastik card",
      employee: "Iroda Jörayeva",
      paymentDate: "2025-04-05 (13:33)",
      comment: "Izoh yo'q",
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mt-[20px]">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-900 p-1 rounded hover:bg-gray-100"
            title="Orqaga"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-gray-800">To'lov yig'ilishi (Nazaliyeva Zarina)</h1>
        </div>
        <button  onClick={() => setOpenModal(true)} className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
          <Plus size={16} />
          <span>Yangi to'lov</span>
        </button>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guruh nomi</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To'lov oyi</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Miqdori</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To'lov turi</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Xodim</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sana</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Izoh</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amallar</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.groupName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.paymentMonth}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{payment.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.paymentType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.employee}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.paymentDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.comment}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <button  onClick={() => setEditModal(true)}
                      className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                      title="Tahrirlash"
                    >
                      <Edit size={16} />
                    </button>
                    <button  onClick={() => setRecOpenModal(true)}
                      className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50"
                      title="Chop etish"
                    >
                      <Printer size={16} />
                    </button>
                    <button onClick={() => setOpenDeleteModal(true)}
                      className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                      title="O'chirish"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Umumiy <span className="font-medium">{payments.length}</span> ta to'lovlardan{' '}
          <span className="font-medium">{payments.length}</span> tasi 1-sahifada ko'rsatilmoqda
        </div>
        
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50" disabled>
            Oldingi
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50" disabled>
            Keyingi
          </button>
        </div>
      </div>

       <StudentPaymentCreate isOpen={openModal} onClose={() => setOpenModal(false)} />
        <StudentPaymentEdit isOpen={openEditModal} onClose={() => setEditModal(false)}  />
          <StudentPaymentReceipt isOpen={openRecModal} onClose={() => setRecOpenModal(false)} />
              <StudentPaymentDelete 
        isOpen={openDeleteModal} 
        onClose={() => setOpenDeleteModal(false)} 
        onDelete={handleDelete} 
      />
    </div>
  );
}