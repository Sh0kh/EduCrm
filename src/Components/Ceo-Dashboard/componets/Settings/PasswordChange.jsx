// PasswordChangeModal.jsx

import React, { useState } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { X } from 'lucide-react';

export default function PasswordChange({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Dialog open={isOpen} handler={onClose} size="lg" animate={{
      mount: { scale: 1, y: 0 },
      unmount: { scale: 0.95, y: -10 }
    }}>
      <DialogHeader className="flex justify-between items-center">
        <span>Password o'zgartirish</span>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          <X size={20} />
        </button>
      </DialogHeader>

      <DialogBody>
        <form className="space-y-4">
          {/* Current Password */}
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">Joriy parol *</label>
            <input
              id="currentPassword"
              type={showPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Joriy parolni kiriting"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* New Password */}
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">Yangi parol *</label>
            <input
              id="newPassword"
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Yangi parolni kiriting"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Confirm New Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Yangi parolni tasdiqlash *</label>
            <input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Yangi parolni takrorlang"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Show Password Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              id="showPassword"
              type="checkbox"
              checked={showPassword}
              onChange={togglePasswordVisibility}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="showPassword" className="text-sm text-gray-600">Parolni ko'rsatish</label>
          </div>
        </form>
      </DialogBody>

      <DialogFooter className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
        >
          Bekor qilish
        </button>
        <button
          onClick={() => alert("Parol yangilandi!")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Saqlash
        </button>
      </DialogFooter>
    </Dialog>
  );
}