// SubjectEdit.jsx

import React from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { X } from 'lucide-react';

export default function SubjectEdit({ isOpen, onClose }) {
  const handleClose = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <Dialog size="3xl" open={isOpen} handler={handleClose} animate={{
      mount: { scale: 1, y: 0 },
      unmount: { scale: 0.95, y: -10 },
    }}>
      <DialogHeader className="flex justify-between items-center">
        <span>Fan malumotlari</span>
        <button onClick={handleClose} className="text-gray-500 hover:text-gray-800">
          <X size={20} />
        </button>
      </DialogHeader>

      <DialogBody>
        <form className="space-y-4">
          {/* Fan nomi */}
          <div>
            <label htmlFor="subjectName" className="block text-sm font-medium text-gray-700 mb-1">Fan nomi *</label>
            <input
              type="text"
              id="subjectName"
              defaultValue="Biologiya"
              placeholder="Fan nomini kiriting"
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