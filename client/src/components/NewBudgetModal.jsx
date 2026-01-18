import React, { useState } from 'react';
import { X, Save, DollarSign, User, FileText } from 'lucide-react';

const NewBudgetModal = ({ isOpen, onClose, onSave }) => {
    const [name, setName] = useState('');
    const [procedure, setProcedure] = useState('');
    const [value, setValue] = useState('');
    const [status, setStatus] = useState('negotiation');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            id: Date.now().toString(),
            name,
            procedure,
            value: Number(value),
            status: status === 'negotiation' ? 'yellow' : 'green'
        });
        onClose();
        // Reset form
        setName('');
        setProcedure('');
        setValue('');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg border border-slate-100 overflow-hidden transform transition-all scale-100 opacity-100">
                <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="text-xl font-bold text-slate-800">Novo Orçamento</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-100">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center">
                            <User size={16} className="mr-1.5 text-teal-500" />
                            Nome do Paciente
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-slate-700 placeholder:text-slate-400"
                            placeholder="Ex: João Silva"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center">
                            <FileText size={16} className="mr-1.5 text-teal-500" />
                            Procedimento
                        </label>
                        <select
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-slate-700 bg-white"
                            value={procedure}
                            onChange={(e) => setProcedure(e.target.value)}
                            required
                        >
                            <option value="">Selecione o procedimento...</option>
                            <option value="Limpeza">Limpeza e Profilaxia</option>
                            <option value="Clareamento">Clareamento Dental</option>
                            <option value="Implante">Implante Dentário</option>
                            <option value="Ortodontia">Aparelho Ortodôntico</option>
                            <option value="Canal">Tratamento de Canal</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center">
                                <DollarSign size={16} className="mr-1.5 text-teal-500" />
                                Valor (R$)
                            </label>
                            <input
                                type="number"
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-slate-700 placeholder:text-slate-400"
                                placeholder="0,00"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                min="0"
                                step="0.01"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Status Inicial</label>
                            <select
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-slate-700 bg-white"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="negotiation">Em Análise</option>
                                <option value="waiting">Aguardando Resposta</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2.5 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 font-medium transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-2.5 bg-teal-500 text-white rounded-lg hover:bg-teal-600 font-medium shadow-lg shadow-teal-500/30 transition-all flex items-center justify-center"
                        >
                            <Save size={18} className="mr-2" />
                            Salvar Orçamento
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewBudgetModal;
