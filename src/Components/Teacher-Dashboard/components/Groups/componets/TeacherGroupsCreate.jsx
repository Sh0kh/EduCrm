
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { X } from 'lucide-react';

export default function TeacherGroupsCreate({ isOpen, onClose }) {
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
        <form className="grid grid-cols-2 gap-4">
          {/* Guruh nomi */}
          <div>
            <label htmlFor="groupName" className="block text-sm font-medium text-gray-700 mb-1">Guruh nomi *</label>
            <input
              type="text"
              id="groupName"
              placeholder="Guruh nomini kiriting"
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
              placeholder="Narxni kiriting"
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
              <option value="">Fan tanlash</option>
              <option value="Matematika">Matematika</option>
              <option value="Ingliz tili">Ingliz tili</option>
              <option value="Tarix">Tarix</option>
              <option value="Biologiya">Biologiya</option>
            </select>
          </div>

  

    
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Guruh boshlanish vaqti *</label>
            <input
              type="datetime-local"
              id="startDate"
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
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Saqlash
        </button>
      </DialogFooter>
    </Dialog>
  );
}