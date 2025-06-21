// PaymentCreate.jsx

import React from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { X } from 'lucide-react';

export default function StudentPaymentCreate({ isOpen, onClose }) {
  return (
    <Dialog size="xl" open={isOpen} handler={onClose} animate={{
      mount: { scale: 1, y: 0 },
      unmount: { scale: 0.95, y: -10 },
    }}>
      <DialogHeader className="flex justify-between items-center">
        <span>To'lov yaratish</span>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          <X size={20} />
        </button>
      </DialogHeader>

      <DialogBody divider>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Talabaning guruhi *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Guruh nomini kiriting"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tarix majburiy/16.00/juft</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
                value="Toq / 16:00"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To'lov Oy va Yil:</label>
              <input
                type="month"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To'lov sanasi va vaqti:</label>
              <input
                type="datetime-local"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To'lov summasi (sum):</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Summani kiriting"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To'lov turi *</label>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Naqd pul</option>
                <option>Plastik karta</option>
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-yellow-600">
            <input type="checkbox" id="confirmCheckbox" className="h-4 w-4" />
            <label htmlFor="confirmCheckbox" className="text-sm">
              Oylik to'lovni yopilganini tasdiqlash!
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Izoh:</label>
            <textarea
              rows={3}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Qo'shimcha izoh"
            ></textarea>
          </div>
        </form>
      </DialogBody>

      <DialogFooter className="flex justify-end gap-3">
        <button
          onClick={onClose}
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