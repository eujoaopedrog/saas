import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Users, Settings, Bell, Search, Plus, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PatientTable from './PatientTable';
import NewBudgetModal from './NewBudgetModal';
import { initialPatients } from '../data/mockData';

const Dashboard = () => {
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Simulate fetching data based on logged in clinic
    useEffect(() => {
        const tokenString = localStorage.getItem('user_token');
        if (tokenString) {
            const token = JSON.parse(tokenString);
            // Filter by clinicId (Mock isolation)
            const clinicPatients = initialPatients.filter(p => p.clinicId === token.clinicId);
            setPatients(clinicPatients);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user_token');
        navigate('/login');
    };

    const handleAddNewBudget = (newPatient) => {
        // Mock ID generation
        const patientWithId = { ...newPatient, id: Date.now().toString(), clinicId: 'clinic-123' };
        setPatients([patientWithId, ...patients]);
    };

    return (
        <div className="flex h-screen overflow-hidden bg-slate-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col z-20 hidden md:flex">
                <div className="p-6">
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
                        Odonto Flow
                    </h1>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    <a href="#" className="flex items-center px-4 py-3 bg-teal-50 text-teal-700 rounded-xl font-medium border border-teal-100 shadow-sm transition-all">
                        <LayoutDashboard size={20} className="mr-3" />
                        Pacientes
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-800 rounded-xl transition-all duration-200">
                        <Users size={20} className="mr-3" />
                        Equipe
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-800 rounded-xl transition-all duration-200">
                        <Settings size={20} className="mr-3" />
                        Configurações
                    </a>
                </nav>

                <div className="p-4 border-t border-slate-100">
                    <button
                        onClick={handleLogout}
                        className="flex items-center px-4 py-2 text-slate-400 hover:text-red-500 transition-colors w-full text-sm font-medium"
                    >
                        <LogOut size={18} className="mr-2" />
                        Sair do Sistema
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col relative z-10 overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex justify-between items-center px-8 shrink-0">
                    <h2 className="text-xl font-bold text-slate-800">Lista de Pacientes</h2>

                    <div className="flex items-center space-x-6">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Buscar por nome..."
                                className="bg-slate-100 border-none rounded-full pl-10 pr-4 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 w-64 transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md shadow-teal-500/20 transition-all hover:scale-105"
                        >
                            <Plus size={18} className="mr-2" />
                            Novo Paciente
                        </button>

                        <button className="relative p-2 text-slate-500 hover:text-teal-600 transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1 right-2 w-2 h-2 bg-red-400 rounded-full animate-pulse border border-white"></span>
                        </button>

                        <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center text-slate-500 font-bold text-xs">
                            CL
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="flex-1 overflow-auto p-8">
                    <PatientTable patients={patients} searchTerm={searchTerm} />
                </div>
            </main>

            {/* Modals */}
            <NewBudgetModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleAddNewBudget}
            />
        </div>
    );
};

export default Dashboard;
