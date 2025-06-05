import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Background from '../components/Background/Background';
import './ResetPasswordPage.css';

export default function ResetPasswordPage() {
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [carregando, setCarregando] = useState(false);
    const [sucesso, setSucesso] = useState(false);

    const { token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (novaSenha !== confirmarSenha) {
            setMensagem('As senhas não coincidem');
            setSucesso(false);
            return;
        }

        if (novaSenha.length < 6) {
            setMensagem('A senha deve ter pelo menos 6 caracteres');
            setSucesso(false);
            return;
        }

        setCarregando(true);
        setMensagem('');

        try {
            const res = await axios.post(`http://localhost:3001/reset-password/${token}`, {
                novaSenha
            });
            setMensagem(res.data.message);
            setSucesso(true);

            
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } catch (error) {
            setMensagem(error.response?.data?.message || 'Erro ao redefinir senha');
            setSucesso(false);
        } finally {
            setCarregando(false);
        }
    };

    return (
        <div className="reset-password-page">
            <Background />
            <div className="main-content">
                <div className="form-container">
                    <div className="form-section">
                        <h2 className="form-title">Redefinir senha</h2>
                        <div className="form-content">
                            <p className="form-description">
                                Digite sua nova senha:
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div className="input-wrapper">
                                    <input
                                        type="password"
                                        value={novaSenha}
                                        onChange={e => setNovaSenha(e.target.value)}
                                        placeholder="Nova senha"
                                        required
                                        disabled={carregando || sucesso}
                                        className="form-input"
                                    />
                                </div>

                                <div className="input-wrapper">
                                    <input
                                        type="password"
                                        value={confirmarSenha}
                                        onChange={e => setConfirmarSenha(e.target.value)}
                                        placeholder="Confirmar nova senha"
                                        required
                                        disabled={carregando || sucesso}
                                        className="form-input"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={carregando || sucesso}
                                    className={`submit-button ${sucesso ? 'success' : ''}`}
                                >
                                    {carregando ? 'Atualizando...' : sucesso ? 'Senha atualizada!' : 'Atualizar senha'}
                                </button>
                            </form>

                            {mensagem && (
                                <div className={`message ${sucesso ? 'success' : 'error'}`}>
                                    <p className="message-text">{mensagem}</p>
                                    {sucesso && (
                                        <small className="redirect-text">
                                            Redirecionando para login em 3 segundos...
                                        </small>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}