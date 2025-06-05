// src/components/UserWorkouts.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../services/api"; // Certifique-se que o caminho está correto
import './UserWorkouts.css'; // Vamos criar este CSS se necessário, ou usar o UserProfile.css

export default function UserWorkouts({ userId, userRole }) { // Recebe userId e userRole como props
    const [treinos, setTreinos] = useState([]);
    const [isCreatingWorkout, setIsCreatingWorkout] = useState(false);
    const [editingWorkout, setEditingWorkout] = useState(null);
    const [workoutFormData, setWorkoutFormData] = useState({
        nome: '',
        descricao: '',
        exercicios: '',
        visibilidade: 'PRIVADO'
    });
    const [loadingWorkouts, setLoadingWorkouts] = useState(true);
    const [updatingWorkout, setUpdatingWorkout] = useState(false);
    const [loadError, setLoadError] = useState('');
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');

    useEffect(() => {
        fetchTreinos();
    }, [userId]);

    const fetchTreinos = async () => {
        setLoadingWorkouts(true);
        try {
            const token = localStorage.getItem('token');

            const response = await api.get('usuarios/treinos', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTreinos(response.data);
            setLoadError('');
        } catch (error) {
            console.error('Erro ao buscar treinos:', error.response || error.message || error);
            setLoadError(error.response?.data?.message || 'Erro ao carregar treinos');
        } finally {
            setLoadingWorkouts(false);
        }
    };

    const handleWorkoutInputChange = (e) => {
        setWorkoutFormData({
            ...workoutFormData,
            [e.target.name]: e.target.value
        });
        if (error) setformError('');
        if (success) setformSuccess('');
    };

    const handleCreateWorkout = async (e) => {
        e.preventDefault();
        setUpdatingWorkout(true);
        setFormError('');
        setFormSuccess('');

        try {
            const token = localStorage.getItem('token');
            await api.post('/treinos', workoutFormData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setFormSuccess('Treino criado com sucesso!');
            setIsCreatingWorkout(false);
            setWorkoutFormData({
                nome: '',
                descricao: '',
                exercicios: '',
                visibilidade: 'PRIVADO'
            });
            fetchTreinos();

        } catch (error) {
            console.error('Erro ao criar treino:', error);
            setError(error.response?.data?.message || 'Erro ao criar treino');
        } finally {
            setUpdatingWorkout(false);
        }
    };

    const handleEditWorkout = (treino) => {
        setEditingWorkout(treino);
        setFormError('');
        setFormSuccess('');
        setWorkoutFormData({
            nome: treino.nome,
            descricao: treino.descricao,
            exercicios: treino.exercicios,
            visibilidade: treino.visibilidade
        });
        setIsCreatingWorkout(true);
    };

    const handleUpdateWorkout = async (e) => {
        e.preventDefault();
        setUpdatingWorkout(true);
        setFormError('');
        setFormSuccess('');

        try {
            const token = localStorage.getItem('token');
            await api.put(`/treinos/${editingWorkout.id}`, workoutFormData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setFormSuccess('Treino atualizado com sucesso!');
            setIsCreatingWorkout(false);
            setEditingWorkout(null);
            fetchTreinos();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            console.error('Erro ao atualizar treino:', error);
            setError(error.response?.data?.message || 'Erro ao atualizar treino');
        } finally {
            setUpdatingWorkout(false);
        }
    };

    const handleDeleteWorkout = async (treinoId) => {
        if (!window.confirm('Tem certeza que deseja excluir este treino?')) return;

        try {
            const token = localStorage.getItem('token');
            await api.delete(`/treinos/${treinoId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setFormSuccess('Treino excluído com sucesso!');
            fetchTreinos(); // Recarrega a lista
        } catch (error) {
            console.error('Erro ao excluir treino:', error);
            setFormError('Erro ao excluir treino');
        }
    };

    if (loadingWorkouts) {
        return (
            <div className="workouts-loading">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="loading-spinner"
                />
                <p>Carregando treinos...</p>
            </div>
        );
    }

    return (
        <>
            <div className="profile-info-header">
                <h2 className="card-title">GERENCIAR TREINOS</h2>
                <motion.button
                    whileHover={{ backgroundColor: "#374151" }}
                    className="action-button primary"
                    onClick={() => {
                        setIsCreatingWorkout(true);
                        setEditingWorkout(null);
                        setFormError('');
                        setFormSuccess('');
                        setWorkoutFormData({
                            nome: '',
                            descricao: '',
                            exercicios: '',
                            visibilidade: 'PRIVADO'
                        });
                    }}
                >
                    NOVO TREINO
                </motion.button>
            </div>

            {formSuccess && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="success-message"
                >
                    {formSuccess}
                </motion.div>
            )}

            {formError && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="error-message"
                >
                    {formError}
                </motion.div>
            )}

            <AnimatePresence mode="wait">
                {!isCreatingWorkout ? (
                    <motion.div
                        key="workouts-list"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="workouts-list"
                    >
                        {treinos.length === 0 ? (
                            <div className="empty-state">
                                <p>Nenhum treino encontrado. Crie seu primeiro treino!</p>
                            </div>
                        ) : (
                            treinos.map((treino, index) => (
                                <motion.div
                                    key={treino.id}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    className="workout-card"
                                >
                                    <div className="workout-header">
                                        <h3 className="workout-name">{treino.nome}</h3>
                                        <div className="workout-actions">
                                            <span className={`visibility-badge ${treino.visibilidade.toLowerCase()}`}>
                                                {treino.visibilidade}
                                            </span>
                                            <button
                                                className="workout-action-btn edit"
                                                onClick={() => handleEditWorkout(treino)}
                                            >
                                                EDITAR
                                            </button>
                                            <button
                                                className="workout-action-btn delete"
                                                onClick={() => handleDeleteWorkout(treino.id)}
                                            >
                                                EXCLUIR
                                            </button>
                                        </div>
                                    </div>
                                    <p className="workout-description">{treino.descricao}</p>
                                    <div className="workout-exercises">
                                        <strong>Exercícios:</strong>
                                        <p>{treino.exercicios}</p>
                                    </div>
                                    <button
                                        className="workout-action-btn share"
                                        onClick={() => {
                                            const link = `${window.location.origin}/treinos/${treino.id}`;
                                            navigator.clipboard.writeText(link);
                                            alert('Link copiado para a área de transferência!');
                                        }}
                                    >
                                        COMPARTILHAR🔗
                                    </button>

                                </motion.div>
                            ))
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="workout-form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="workout-form"
                    >
                        <form onSubmit={editingWorkout ? handleUpdateWorkout : handleCreateWorkout}>
                            <div className="form-grid">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1, duration: 0.4 }}
                                    className="input-wrapper"
                                >
                                    <input
                                        type="text"
                                        name="nome"
                                        placeholder="NOME DO TREINO"
                                        className="form-input"
                                        value={workoutFormData.nome}
                                        onChange={handleWorkoutInputChange}
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                    className="input-wrapper"
                                >
                                    <textarea
                                        name="descricao"
                                        placeholder="DESCRIÇÃO DO TREINO"
                                        className="form-input textarea"
                                        value={workoutFormData.descricao}
                                        onChange={handleWorkoutInputChange}
                                        rows="3"
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.4 }}
                                    className="input-wrapper"
                                >
                                    <textarea
                                        name="exercicios"
                                        placeholder="EXERCÍCIOS (Ex: 3x10 Supino, 4x8 Agachamento, etc.)"
                                        className="form-input textarea"
                                        value={workoutFormData.exercicios}
                                        onChange={handleWorkoutInputChange}
                                        rows="5"
                                        required
                                    />
                                </motion.div>
                            </div>



                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                className="form-buttons"
                            >
                                <motion.button
                                    type="submit"
                                    whileHover={{ backgroundColor: "#374151" }}
                                    className="action-button primary"
                                    disabled={updatingWorkout}
                                >
                                    {updatingWorkout ? 'SALVANDO...' : editingWorkout ? 'ATUALIZAR TREINO' : 'CRIAR TREINO'}
                                </motion.button>

                                <motion.button
                                    type="button"
                                    onClick={() => {
                                        setIsCreatingWorkout(false);
                                        setEditingWorkout(null);
                                        setFormError('');
                                        setFormSuccess('');
                                        setWorkoutFormData({
                                            nome: '',
                                            descricao: '',
                                            exercicios: '',
                                            visibilidade: 'PRIVADO'
                                        });
                                    }}
                                    whileHover={{ backgroundColor: "#6b7280" }}
                                    className="action-button secondary"
                                    disabled={updatingWorkout}
                                >
                                    CANCELAR
                                </motion.button>
                            </motion.div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}