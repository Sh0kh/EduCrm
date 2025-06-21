
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { X, Trash2 } from 'lucide-react';

export default function SubjectDelete({ isOpen, onClose, onDelete }) {
  const handleClose = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <Dialog size="sm" open={isOpen} handler={handleClose} animate={{
      mount: { scale: 1, y: 0 },
      unmount: { scale: 0.95, y: -10 },
    }}>
      <DialogHeader className="flex justify-between items-center">
        <span>Fan o'chirish</span>
        <button onClick={handleClose} className="text-gray-500 hover:text-gray-800">
          <X size={20} />
        </button>
      </DialogHeader>

      <DialogBody>
        <div className="flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-red-100 mb-4">
            <Trash2 size={32} className="text-red-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-800">Haqiqatan ham ushbu fan ni o'chirmoqchimisiz?</h3>
          <p className="text-sm text-gray-600 mt-2">
            Ushbu amalni bekor qilib bo'lmaydi. Fan to'liq o'chiriladi.
          </p>
        </div>
      </DialogBody>

      <DialogFooter className="flex justify-end gap-3">
        <button
          onClick={handleClose}
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