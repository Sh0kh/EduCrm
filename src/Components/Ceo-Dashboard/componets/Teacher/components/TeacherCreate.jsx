// TeacherCreate.jsx

import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { X } from 'lucide-react';

export default function TeacherCreate({ isOpen, onClose }) {
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
        <span>Ustoz malumotlari</span>
        <button onClick={handleClose} className="text-gray-500 hover:text-gray-800">
          <X size={20} />
        </button>
      </DialogHeader>

      <DialogBody>
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">To'lliq ism familiya *</label>
            <input
              type="text"
              id="fullName"
              placeholder="Ism va familia kiriting"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Telefon raqami */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon raqam *</label>
            <input
              type="tel"
              id="phone"
              defaultValue="+998"
              placeholder="Telefon raqamni kiriting"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Login */}
          <div>
            <label htmlFor="login" className="block text-sm font-medium text-gray-700 mb-1">Login *</label>
            <input
              type="text"
              id="login"
              placeholder="Login kiriting"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Fan */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Fan *</label>
            <select
              id="subject"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>Fan tanlang</option>
              <option value="Ona tili">Ona tili</option>
              <option value="Matematika">Matematika</option>
              <option value="Kimyo">Kimyo</option>
              <option value="Tarix">Tarix</option>
            </select>
          </div>

          {/* Parol */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Parol *</label>
            <input
              type="password"
              id="password"
              placeholder="Parolni kiriting"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Parol tasdiqlash */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Parolni qayta tasdiqlash *</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Parolni qayta kiriting"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Rasm (optional) */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Rasm (majburiy emas)</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">Файл не выбран</p>
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