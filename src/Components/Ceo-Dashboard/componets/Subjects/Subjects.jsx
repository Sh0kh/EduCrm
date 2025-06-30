import { Plus, Eye, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';
import SubjectCreate from './components/SubjectCreate';
import SubjectEdit from './components/SubjectEdit';
import SubjectDelete from './components/SubjectDelete';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';

export default function SubjectsPage() {
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDelModal, setOpenDelModal] = useState(false);

  // Пример данных
  const subjects = [
    {
      id: 1,
      name: 'Biologiya',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kvuw__Gqdx6zvsDbjODW8MHVMboedPhzFX5673zSu79sIF095UxKu82PmpXe3f85pFQ&usqp=CAU',
      date: 'Nizom',
    },
    {
      id: 2,
      name: 'Kimyo',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kvuw__Gqdx6zvsDbjODW8MHVMboedPhzFX5673zSu79sIF095UxKu82PmpXe3f85pFQ&usqp=CAU',
      date: 'Alisher',
    },
  ];

  return (
    <div className="min-h-screen p-6 mt-4">
      <div className="flex justify-between items-center flex-wrap gap-2 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Barcha Fanlar</h1>
        <Button onClick={() => setOpenModal(true)} color="green" className="flex items-center gap-2">
          <Plus size={20} />
          Yangi fan
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Card key={subject.id} className="shadow-md">
            <CardHeader floated={false} className="h-48">
              <img
                src={subject.image}
                alt={subject.name}
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {subject.name}
              </Typography>
              <Typography variant="small" color="gray" className="mb-4">
                Ustoz: {subject.date}
              </Typography>
              <div className="flex justify-end gap-2">
                <NavLink to={`/subjects/${subject.id}`}>
                  <Button variant="text" color="green" size="sm">
                    <Eye size={18} />
                  </Button>
                </NavLink>
                <Button onClick={() => setOpenEditModal(true)} variant="text" color="yellow" size="sm">
                  <Edit size={18} />
                </Button>
                <Button onClick={() => setOpenDelModal(true)} variant="text" color="red" size="sm">
                  <Trash2 size={18} />
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Модальные окна */}
      <SubjectCreate isOpen={openModal} onClose={() => setOpenModal(false)} />
      <SubjectEdit isOpen={openEditModal} onClose={() => setOpenEditModal(false)} />
      <SubjectDelete isOpen={openDelModal} onClose={() => setOpenDelModal(false)} />
    </div>
  );
}
