// PaymentDelete.jsx

import React from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { X, Trash2 } from 'lucide-react';

export default function StudentPaymentDelete({ isOpen, onClose, onDelete }) {
  return (
    <Dialog size="3xl" open={isOpen} handler={onClose} animate={{
      mount: { scale: 1, y: 0 },
      unmount: { scale: 0.95, y: -10 },
    }}>
      <DialogHeader className="flex justify-between items-center">
        <span>To'lovni o'chirish</span>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          <X size={20} />
        </button>
      </DialogHeader>

      <DialogBody>
        <div className="flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-red-100 mb-4">
            <Trash2 size={32} className="text-red-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-800">O'chirishni tasdiqlang</h3>
          <p className="text-sm text-gray-600 mt-2">
            Haqiqatan ham ushbu to'lovni o'chirmoqchimisiz? Ushbu amalni bekor qilib bo'lmaydi.
          </p>
        </div>
      </DialogBody>

      <DialogFooter className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
        >
          Bekor qilish
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition flex items-center space-x-2"
        >
          <Trash2 size={16} />
          <span>O'chirish</span>
        </button>
      </DialogFooter>
    </Dialog>
  );
}