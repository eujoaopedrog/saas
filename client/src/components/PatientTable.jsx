import React, { useState } from 'react';
import { MoreHorizontal, Phone, PenSquare, ChevronDown } from 'lucide-react';

const STATUS_CONFIG = {
    'scheduled': { label: 'Agendado', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    'negotiation': { label: 'Em Negociação', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
    'analysis': { label: 'Em Análise', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    'closed': { label: 'Fechado', color: 'bg-green-100 text-green-700 border-green-200' },
    'lost': { label: 'Arquivado', color: 'bg-slate-100 text-slate-500 border-slate-200' }
};

const PatientTable = ({ patients, searchTerm }) => {
    // Basic filter by name
    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-slate-700">Paciente</th>
                            <th className="px-6 py-4 font-semibold text-slate-700">Contato</th>
                            <th className="px-6 py-4 font-semibold text-slate-700">Procedimento</th>
                            <th className="px-6 py-4 font-semibold text-slate-700">Status</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 text-right">Valor</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filteredPatients.length > 0 ? (
                            filteredPatients.map((patient) => (
                                <tr key={patient.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="font-semibold text-slate-800">{patient.name}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center text-slate-500">
                                            <Phone size={14} className="mr-2 opacity-70" />
                                            {patient.phone}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-slate-700">{patient.procedure}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="relative inline-block">
                                            {/* Mock Dropdown for now, just visual */}
                                            <button className={`
                                                flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border
                                                ${STATUS_CONFIG[patient.status]?.color || 'bg-gray-100'}
                                            `}>
                                                <span>{STATUS_CONFIG[patient.status]?.label || patient.status}</span>
                                                <ChevronDown size={12} className="opacity-50" />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right font-medium text-slate-700">
                                        R$ {patient.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="WhatsApp">
                                                <Phone size={18} />
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-teal-600 hover:bg-slate-100 rounded-lg transition-colors" title="Editar">
                                                <PenSquare size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="px-6 py-12 text-center text-slate-400">
                                    Nenhum paciente encontrado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatientTable;
