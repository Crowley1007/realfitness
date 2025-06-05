// src/components/UserProfile.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../services/api";
import UserWorkouts from "./UserWorkouts"; // Importa o novo componente de treinos
import "./UserProfile.css"; // Mantém o CSS original, agora sem os estilos de treino

export default function UserProfile({ onLogout }) {
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState('profile'); // 'profile' ou 'workouts'
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    useEffect(() => {
        fetchUserProfile();
        // Não precisamos mais do fetchTreinos aqui, UserWorkouts vai cuidar disso.
    }, []); // Array de dependências vazio para rodar apenas uma vez na montagem do componente

    const fetchUserProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await api.get('/usuarios/profile', {
                headers: { Authorization: `Bearer ${token}` }
            });

            setUser(response.data);
            setFormData({
                name: response.data.name || '',
                email: response.data.email || '',
                age: response.data.age || '',
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            });
            setError(''); // Limpa erro caso tenha tido antes
        } catch (error) {
            console.error('Erro ao buscar perfil:', error);
            setError('Erro ao carregar perfil do usuário');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (error) setError('');
        if (success) setSuccess('');
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setUpdating(true);
        setError('');
        setSuccess('');

        if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
            setError('As senhas não coincidem');
            setUpdating(false);
            return;
        }

        if (formData.newPassword && formData.newPassword.length < 6) {
            setError('A nova senha deve ter pelo menos 6 caracteres');
            setUpdating(false);
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const updateData = {
                name: formData.name,
                email: formData.email,
                age: parseInt(formData.age) || 0
            };

            if (formData.newPassword) {
                updateData.currentPassword = formData.currentPassword;
                updateData.newPassword = formData.newPassword;
            }

            const response = await api.put('/usuarios/profile', updateData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setUser(response.data);
            setSuccess('Perfil atualizado com sucesso!');
            setIsEditing(false);

            setFormData(prev => ({
                ...prev,
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            }));

        } catch (error) {
            console.error('Erro ao atualizar perfil:', error);
            setError(error.response?.data?.message || 'Erro ao atualizar perfil');
        } finally {
            setUpdating(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('rememberedEmail');
        if (onLogout) onLogout();
    };

    if (loading) {
        return (
            <div className="profile-loading">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="loading-spinner"
                />
                <p>Carregando perfil...</p>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="user-profile"
        >
            <div className="profile-header">
                <motion.h1
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="profile-title"
                >
                    {activeTab === 'profile' ? 'PERFIL' : 'MEUS TREINOS'}
                </motion.h1>

                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="profile-actions"
                >
                    <div className="tab-buttons">
                        <button
                            className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            PERFIL
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'workouts' ? 'active' : ''}`}
                            onClick={() => setActiveTab('workouts')}
                        >
                            TREINOS
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="profile-content">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="profile-card"
                >
                    {activeTab === 'profile' ? (
                        <>
                            <div className="profile-info-header">
                                <h2 className="card-title">INFORMAÇÕES PESSOAIS</h2>
                                <div className="user-type-badge">
                                    <span className={`badge ${user?.role === 'ALUNO' ? 'student' : 'instructor'}`}>
                                        {user?.role === 'ALUNO' ? 'STUDENT' : 'INSTRUCTOR'}
                                    </span>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                {!isEditing ? (
                                    <motion.div
                                        key="view"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="profile-view"
                                    >
                                        <div className="info-grid">
                                            <motion.div
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.1, duration: 0.4 }}
                                                className="info-item"
                                            >
                                                <label className="info-label">NOME COMPLETO</label>
                                                <p className="info-value">{user?.name || 'Não informado'}</p>
                                            </motion.div>

                                            <motion.div
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.2, duration: 0.4 }}
                                                className="info-item"
                                            >
                                                <label className="info-label">EMAIL</label>
                                                <p className="info-value">{user?.email || 'Não informado'}</p>
                                            </motion.div>

                                            <motion.div
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.3, duration: 0.4 }}
                                                className="info-item"
                                            >
                                                <label className="info-label">IDADE</label>
                                                <p className="info-value">{user?.age || 'Não informado'}</p>
                                            </motion.div>

                                            <motion.div
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.4, duration: 0.4 }}
                                                className="info-item"
                                            >
                                                <label className="info-label">DATA DE CADASTRO</label>
                                                <p className="info-value">
                                                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('pt-BR') : 'Não informado'}
                                                </p>
                                            </motion.div>
                                        </div>

                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.5, duration: 0.4 }}
                                            className="edit-button-wrapper"
                                        >
                                            <motion.button
                                                whileHover={{ backgroundColor: "#374151" }}
                                                className="action-button primary"
                                                onClick={() => setIsEditing(true)}
                                            >
                                                EDITAR PERFIL
                                            </motion.button>
                                        </motion.div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="edit"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="profile-edit"
                                    >
                                        <form onSubmit={handleUpdateProfile}>
                                            <div className="form-grid">
                                                <motion.div
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.1, duration: 0.4 }}
                                                    className="input-wrapper"
                                                >
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="NOME COMPLETO"
                                                        className="form-input"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </motion.div>

                                                <motion.div
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.2, duration: 0.4 }}
                                                    className="input-wrapper"
                                                >
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="EMAIL"
                                                        className="form-input"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </motion.div>

                                                <motion.div
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.3, duration: 0.4 }}
                                                    className="input-wrapper"
                                                >
                                                    <input
                                                        type="number"
                                                        name="age"
                                                        placeholder="IDADE"
                                                        className="form-input"
                                                        value={formData.age}
                                                        onChange={handleInputChange}
                                                        min="1"
                                                        max="120"
                                                        required
                                                    />
                                                </motion.div>
                                            </div>

                                            <div className="password-section">
                                                <h3 className="section-title">ALTERAR SENHA (OPCIONAL)</h3>

                                                <motion.div
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.4, duration: 0.4 }}
                                                    className="input-wrapper"
                                                >
                                                    <input
                                                        type="password"
                                                        name="currentPassword"
                                                        placeholder="SENHA ATUAL"
                                                        className="form-input"
                                                        value={formData.currentPassword}
                                                        onChange={handleInputChange}
                                                    />
                                                </motion.div>

                                                <motion.div
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.5, duration: 0.4 }}
                                                    className="input-wrapper"
                                                >
                                                    <input
                                                        type="password"
                                                        name="newPassword"
                                                        placeholder="NOVA SENHA"
                                                        className="form-input"
                                                        value={formData.newPassword}
                                                        onChange={handleInputChange}
                                                    />
                                                </motion.div>

                                                <motion.div
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.6, duration: 0.4 }}
                                                    className="input-wrapper"
                                                >
                                                    <input
                                                        type="password"
                                                        name="confirmPassword"
                                                        placeholder="CONFIRMAR NOVA SENHA"
                                                        className="form-input"
                                                        value={formData.confirmPassword}
                                                        onChange={handleInputChange}
                                                    />
                                                </motion.div>
                                            </div>

                                            {error && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="error-message"
                                                >
                                                    {error}
                                                </motion.div>
                                            )}

                                            {success && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="success-message"
                                                >
                                                    {success}
                                                </motion.div>
                                            )}

                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.7, duration: 0.4 }}
                                                className="form-buttons"
                                            >
                                                <motion.button
                                                    type="submit"
                                                    whileHover={{ backgroundColor: "#374151" }}
                                                    className="action-button primary"
                                                    disabled={updating}
                                                >
                                                    {updating ? 'SALVANDO...' : 'SALVAR ALTERAÇÕES'}
                                                </motion.button>

                                                <motion.button
                                                    type="button"
                                                    onClick={() => {
                                                        setIsEditing(false);
                                                        setError('');
                                                        setSuccess('');
                                                        setFormData(prev => ({
                                                            ...prev,
                                                            currentPassword: '',
                                                            newPassword: '',
                                                            confirmPassword: ''
                                                        }));
                                                    }}
                                                    whileHover={{ backgroundColor: "#6b7280" }}
                                                    className="action-button secondary"
                                                    disabled={updating}
                                                >
                                                    CANCELAR
                                                </motion.button>
                                            </motion.div>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </>
                    ) : (
                        // Renderiza o componente UserWorkouts quando a aba 'workouts' está ativa
                        <UserWorkouts userId={user?.id} userRole={user?.role} />
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
}