import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Stethoscope, ArrowRight } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock login
        if (email && password) {
            // Save mock token
            localStorage.setItem('user_token', JSON.stringify({
                name: 'Secretaria',
                clinicId: 'clinic-123',
                token: 'mock-jwt-token-123'
            }));
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/40 w-full max-w-md relative z-10">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg text-white">
                        <Stethoscope size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Bem-vindo de volta</h2>
                    <p className="text-slate-500">Acesse o painel da sua clínica</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Corporativo</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all text-slate-800"
                            placeholder="clinica@odonto.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all text-slate-800"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
                            <span className="ml-2 text-slate-600">Lembrar-me</span>
                        </div>
                        <a href="#" className="text-teal-600 hover:text-teal-700 font-medium">Esqueceu a senha?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center group"
                    >
                        Entrar
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-500">
                    Ainda não tem conta? <Link to="/register" className="text-teal-600 hover:text-teal-700 font-semibold">Cadastre sua clínica</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
