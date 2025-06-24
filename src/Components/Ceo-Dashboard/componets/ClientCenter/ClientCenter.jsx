import React, { useState, useEffect } from 'react';
import { Search, Plus, Phone, User, Calendar, BookOpen, MessageSquare, Edit, Trash2, UserCheck, UserX, X } from 'lucide-react';
import ClientCreate from './ClientCreate';
import ClientEdit from './ClientEdit';
import ClientActive from './ClientActive';
import ClientDelete from './ClientDelete';

export default function ClientCenter() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClients, setSelectedClients] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const clientToDelete = {
    name: "Toyirjonova Idpoloy",
    details: "Telefon: +998 91 802 01 47\nGuruh: Matematika - Dushanba/Chorshanba"
  };

  const handleDeleteConfirm = () => {
    console.log('Deleting client:', clientToDelete.name);
    setDeleteModalOpen(false);
  };

  const [clientData] = useState({
    fullName: "Toyirjonova Idpoloy",
    parentPhone: "916224147",
    studentPhone: "918020147",
    group: "",
    parentName: "",
    startDate: "2025-06-19",
    comment: "916224147 dadalarinki\nertaga keladi ismoil ingliz tili asadbek"
  });

  const handleEditClient = (client) => {
    setSelectedClient(client);
    setIsEditModalOpen(true);
  };

  const handleSubmitEdit = (updatedData) => {
    console.log('Updated client data:', updatedData);
    setIsEditModalOpen(false);
  };

  const mockClients = [
    {
      id: 1,
      name: 'Fozilova Muxlisa',
      phone: '+998942746474',
      source: 'Social media',
      addedDate: '2025-04-04, 15:44',
      subject: 'Tarix',
      comment: 'Tarix matem majburiy',
      isActive: true
    },
  ];

  const fetchClients = async () => {
    try {
      setLoading(true);
      // Real API call would go here
      await new Promise(resolve => setTimeout(resolve, 800));
      setClients(mockClients);
    } catch (error) {
      console.error('Error fetching clients:', error);
      setClients(mockClients);
    } finally {
      setLoading(false);
    }
  };

  // Create new client
  const handleCreateClient = (clientData) => {
    const newClient = {
      id: Math.max(...clients.map(c => c.id), 0) + 1,
      ...clientData,
      addedDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }) + ', ' + new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      }),
      isActive: true
    };
    setClients([...clients, newClient]);
    setIsCreateModalOpen(false);
  };

  // Update existing client
  const handleUpdateClient = (updatedData) => {
    setClients(clients.map(client =>
      client.id === updatedData.id ? updatedData : client
    ));
    setEditingClient(null);
  };

  // Delete client
  const handleDeleteClient = (clientId) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      setClients(clients.filter(client => client.id !== clientId));
    }
  };

  // Toggle client status
  const handleToggleStatus = (clientId) => {
    setClients(clients.map(client =>
      client.id === clientId
        ? { ...client, isActive: !client.isActive }
        : client
    ));
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleSelectAll = (checked) => {
    setSelectedClients(checked ? clients.map(client => client.id) : []);
  };

  const handleSelectClient = (clientId) => {
    setSelectedClients(prev =>
      prev.includes(clientId)
        ? prev.filter(id => id !== clientId)
        : [...prev, clientId]
    );
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm) ||
    client.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Badge styling functions
  const getSourceBadge = (source) => {
    const sourceColors = {
      'Social media': 'bg-blue-100 text-blue-700 border border-blue-200',
      'Telefon orqali': 'bg-green-100 text-green-700 border border-green-200',
      'Tanish orqali': 'bg-purple-100 text-purple-700 border border-purple-200',
      'Reklama': 'bg-yellow-100 text-yellow-700 border border-yellow-200'
    };
    return sourceColors[source] || 'bg-gray-100 text-gray-700 border border-gray-200';
  };

  const getSubjectBadge = (subject) => {
    const subjectColors = {
      'Tarix': 'bg-purple-100 text-purple-700 border border-purple-200',
      'Matematika': 'bg-red-100 text-red-700 border border-red-200',
      'Fizika': 'bg-blue-100 text-blue-700 border border-blue-200',
      'Kimyo': 'bg-green-100 text-green-700 border border-green-200',
      'Biologiya': 'bg-teal-100 text-teal-700 border border-teal-200',
      'Ingliz tili': 'bg-indigo-100 text-indigo-700 border border-indigo-200'
    };
    return subjectColors[subject] || 'bg-gray-100 text-gray-700 border border-gray-200';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading clients...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 mt-[10px]">
      {/* Header */}
      <div className='flex items-center justify-between'>
        <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
        <div className="flex items-center  mt-2 text-sm text-gray-500">
          <span>Mijozlar</span>
          <span className="mx-2">/</span>
          <span className="text-gray-400">All Clients</span>
        </div>
      </div>

      <div className="mt-[30px]">
        {/* Search and Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-5">
          <div className="p-3">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  className="flex items-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setIsCreateModalOpen(true)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Client
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Client List</h2>
              <div className="text-sm text-gray-500">
                {filteredClients.length} clients found
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-4 text-left w-12">
                    <input
                      type="checkbox"
                      checked={selectedClients.length === filteredClients.length && filteredClients.length > 0}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                  <th className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Added Date</th>
                  <th className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
                  <th className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredClients.map((client) => (
                  <tr key={client.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        checked={selectedClients.includes(client.id)}
                        onChange={() => handleSelectClient(client.id)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">{client.id}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <User className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-900">{client.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-gray-400 mr-2" />
                        {client.phone}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${getSourceBadge(client.source)}`}>
                        {client.source}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                        {client.addedDate}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${getSubjectBadge(client.subject)}`}>
                        {client.subject}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 max-w-xs truncate">
                      <div className="flex items-center">
                        <MessageSquare className="w-4 h-4 text-gray-400 mr-2" />
                        {client.comment}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditClient({
                            name: "John Doe",
                            source: "Social media",
                            phone: "+998901234567",
                            subject: "Matematika",
                            comment: "Regular student"
                          })}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setModalOpen(true)}
                          className={client.isActive ? "text-orange-600 hover:text-orange-900" : "text-green-600 hover:text-green-900"}
                          title={client.isActive ? "Deactivate" : "Activate"}
                        >
                          {client.isActive ? <UserX className="w-5 h-5" /> : <UserCheck className="w-5 h-5" />}
                        </button>
                        <button
                          onClick={() => setDeleteModalOpen(true)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredClients.length}</span> of{' '}
                <span className="font-medium">{filteredClients.length}</span> results
              </div>
              {selectedClients.length > 0 && (
                <div className="text-sm text-blue-600">
                  {selectedClients.length} selected
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Create Modal */}
      <ClientCreate
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateClient}
      />



      <ClientEdit
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleSubmitEdit}
        initialData={selectedClient}
      />

      <ClientActive
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        clientData={clientData}
      />
      <ClientDelete
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        clientName={clientToDelete.name}
        clientDetails={clientToDelete.details}
      />
    </div>
  );
}