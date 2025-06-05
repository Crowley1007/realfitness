import React, { useState } from 'react';
import axios from 'axios';
import Background from '../components/Background/Background';
import './ForgetPasswordPage.css';

export default function ForgetPasswordPage() {
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [carregando, setCarregando] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCarregando(true);
        setMensagem('');

        try {
            const res = await axios.post('http://localhost:3001/recuperar-senha', { email });
            setMensagem(res.data.message);
        } catch (error) {
            setMensagem(error.response?.data?.message || 'Erro ao enviar link de recuperação');
        } finally {
            setCarregando(false);
        }
    };

    return (
        <div className="forget-password-page">
            <Background />
            <div className="main-content">
                <div className="form-container">
                    <div className="form-section">
                        <h2 className="form-title">RECUPERÇÃO DE SENHA</h2>
                        <div className="form-content">
                            <p className="form-description">
                                Digite seu e-mail para receber o link de recuperação:
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div className="input-wrapper">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="Digite seu e-mail"
                                        required
                                        disabled={carregando}
                                        className="form-input"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={carregando}
                                    className="submit-button"
                                >
                                    {carregando ? 'Enviando...' : 'Enviar link'}
                                </button>
                            </form>

                            {mensagem && (
                                <div className={`message ${mensagem.includes('Erro') ? 'error' : 'success'}`}>
                                    {mensagem}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}