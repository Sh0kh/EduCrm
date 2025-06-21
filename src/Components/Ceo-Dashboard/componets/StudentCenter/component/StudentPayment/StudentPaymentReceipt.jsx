// PaymentReceipt.jsx

import React from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { X, Printer } from 'lucide-react';

export default function StudentPaymentReceipt({ isOpen, onClose }) {
  const handlePrint = () => {
    window.print(); // Brauzer print oynasini ochadi
  };

  return (
    <Dialog size="xl" open={isOpen} handler={onClose} animate={{
      mount: { scale: 1, y: 0 },
      unmount: { scale: 0.95, y: -10 },
    }}>
      <DialogHeader className="flex justify-between items-center">
        <span>Kvitansiya (O'razaliyeva Zarina)</span>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          <X size={20} />
        </button>
      </DialogHeader>

      <DialogBody divider>
        <div 
          className="p-4 text-xs leading-relaxed h-[400px] overflow-y-auto font-mono whitespace-pre-line border border-gray-200 rounded-md bg-gray-50"
        >
{"MAGISTR\n"+
"O'QUV MARKAZI\n"+
"\n"+
"Номер чека: 3139\n"+
"\n"+
"Компания: Magistr o'quv markazi\n"+
"\n"+
"Филиал: Magistr o'quv markazi\n"+
"\n"+
"Тип: Plastik card\n"+
"\n"+
"Ученик: o'razaliyeva zarina\n"+
"\n"+
"Номер: +998\n"+
"\n"+
"Группа: Tarix majburiy/16.00/juft\n"+
"\n"+
"Цена курса: 300 000 UZS\n"+
"\n"+
"Учителъ: Narzullayev Eldor\n"+
"\n"+
"Сотрудник: Iroda Jo'rayeva\n"+
"\n"+
"Сумма оплаты: 25 000 UZS\n"+
"\n"+
"Date: 2025-04-05\n"+
"\n"+
"время: 2025-04-05 13:36"}
        </div>
      </DialogBody>

      <DialogFooter className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition flex items-center space-x-2"
        >
          <X size={16} />
          <span>Orqaga</span>
        </button>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center space-x-2"
        >
          <Printer size={16} />
          <span>Chop etish</span>
        </button>
      </DialogFooter>
    </Dialog>
  );
}