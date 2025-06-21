// EditGroupModal.jsx

import React from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { X } from 'lucide-react';

export default function GroupEdit({ isOpen, onClose }) {
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
        <span>Guruh malumotlari</span>
        <button onClick={handleClose} className="text-gray-500 hover:text-gray-800">
          <X size={20} />
        </button>
      </DialogHeader>

      <DialogBody>
        <form className=" grid grid-cols-2 gap-4">
          {/* Guruh nomi */}
          <div>
            <label htmlFor="groupName" className="block text-sm font-medium text-gray-700 mb-1">Guruh nomi *</label>
            <input
              type="text"
              id="groupName"
              defaultValue="jaloliddin matematika toq [14;00]"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Guruh narxi */}
          <div>
            <label htmlFor="groupPrice" className="block text-sm font-medium text-gray-700 mb-1">Guruh narxi *</label>
            <input
              type="number"
              id="groupPrice"
              defaultValue="400000"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Fan */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Fan *</label>
            <select
              id="subject"
              defaultValue="Matematika"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>Ustoz tanlash</option>
              <option value="Matematika">Matematika</option>
              <option value="Ingliz tili">Ingliz tili</option>
              <option value="Tarix">Tarix</option>
              <option value="Biologiya">Biologiya</option>
            </select>
          </div>

          {/* Ustoz */}
          <div>
            <label htmlFor="teacher" className="block text-sm font-medium text-gray-700 mb-1">Ustoz *</label>
            <select
              id="teacher"
              defaultValue="Ernazarov jaloliddin"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>Ustoz tanlash</option>
              <option value="Ernazarov Jaloliddin">Ernazarov Jaloliddin</option>
              <option value="Aliboyev Husan">Aliboyev Husan</option>
              <option value="Narzullayev Eldor">Narzullayev Eldor</option>
              <option value="Aziza">Aziza</option>
            </select>
          </div>

          {/* Guruh boshlanish vaqti */}
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Guruh boshlanish vaqti *</label>
            <input
              type="datetime-local"
              id="startDate"
              defaultValue="2025-03-01T14:00"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
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
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Saqlash
        </button>
      </DialogFooter>
    </Dialog>
  );
}