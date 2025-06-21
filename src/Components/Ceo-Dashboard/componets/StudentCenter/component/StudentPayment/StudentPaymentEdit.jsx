// PaymentEdit.jsx

import React from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { X } from 'lucide-react';

export default function StudentPaymentEdit({ isOpen, onClose }) {
  const handleClose = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <Dialog size="xl" open={isOpen} handler={handleClose} animate={{
      mount: { scale: 1, y: 0 },
      unmount: { scale: 0.95, y: -10 },
    }}>
      <DialogHeader className="flex justify-between items-center">
        <span>To'lovni tahrirlash</span>
        <button onClick={handleClose} className="text-gray-500 hover:text-gray-800">
          <X size={20} />
        </button>
      </DialogHeader>

      <DialogBody divider>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* To'lov qilingan vaqt */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To'lov qilingan vaqt</label>
              <input
                type="text"
                defaultValue="05.04.2025 13:33"
                placeholder="dd.MM.yyyy HH:mm"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* To'lov Oy va Yil */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To'lov Oy va Yil:</label>
              <input
                type="month"
                defaultValue="2025-06"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Tolov summasi */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To'lov summasi (sum):</label>
              <input
                type="number"
                defaultValue="25000"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Summani kiriting"
              />
            </div>
          </div>
        </form>
      </DialogBody>

      <DialogFooter className="flex justify-end gap-3">
        <button
          onClick={handleClose}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
        >
          Bekor qilish
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Saqlash
        </button>
      </DialogFooter>
    </Dialog>
  );
}