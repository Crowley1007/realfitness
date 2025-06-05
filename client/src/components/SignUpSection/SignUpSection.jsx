import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../services/api";
import "./SignUpSection.css";

export default function SignUpSection({ showForm, onToggleSignUp }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        userType: 'student'
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (error) setError('');
        if (success) setSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');


        if (formData.password !== formData.confirmPassword) {
            setError('As senhas não coincidem');
            setLoading(false);
            return;
        }

        if (formData.password.length < 6) {
            setError('A senha deve ter pelo menos 6 caracteres');
            setLoading(false);
            return;
        }

        try {

            const userData = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role: formData.userType === 'student' ? 'ALUNO' : 'INSTRUTOR',
                age: parseInt(formData.age) || 0
            };

            const response = await api.post('/usuarios', userData);

            setSuccess('Conta criada com sucesso!');
            console.log('Usuário criado:', response.data);


            setFormData({
                name: '',
                email: '',
                age: '',
                password: '',
                confirmPassword: '',
                userType: 'student'
            });


            setTimeout(() => {
                onToggleSignUp();
            }, 2000);

        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            setError(error.response?.data?.message || 'Erro ao criar conta');
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="form-section"
        >
            <h2 className="form-title">SIGN UP</h2>

            {!showForm && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className="signup-intro"
                >
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="signup-text"
                    >
                        Para criar um treino você precisa criar uma conta.
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="signup-button-wrapper"
                    >
                        <motion.button
                            whileHover={{ backgroundColor: "#374151" }}
                            className="submit-button"
                            onClick={onToggleSignUp}
                        >
                            SIGN UP
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}

            <AnimatePresence>
                {showForm && (
                    <motion.div
                        initial={{ y: 50, opacity: 0, height: 0 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            height: "auto",
                            transition: { duration: 0.5, ease: "easeOut" }
                        }}
                        exit={{
                            y: 50,
                            opacity: 0,
                            height: 0,
                            transition: { duration: 0.3 }
                        }}
                        className="signup-form-container"
                    >
                        <form onSubmit={handleSubmit} className="signup-form">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                                className="user-type-selection"
                            >
                                <div className="radio-group">
                                    <div className="radio-option">
                                        <div
                                            className={`custom-radio ${formData.userType === 'student' ? 'checked' : ''}`}
                                            onClick={() => setFormData({ ...formData, userType: 'student' })}
                                        >
                                            {formData.userType === 'student' && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="radio-dot"
                                                />
                                            )}
                                        </div>
                                        <span className="radio-label">ESTUDANTE</span>
                                    </div>
                                    <div className="radio-option">
                                        <div
                                            className={`custom-radio ${formData.userType === 'instructor' ? 'checked' : ''}`}
                                            onClick={() => setFormData({ ...formData, userType: 'instructor' })}
                                        >
                                            {formData.userType === 'instructor' && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="radio-dot"
                                                />
                                            )}
                                        </div>
                                        <span className="radio-label">INSTRUTOR</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
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

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
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
                                transition={{ delay: 0.5, duration: 0.4 }}
                                className="input-wrapper"
                            >
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="SENHA"
                                    className="form-input"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
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
                                    placeholder="CONFIRME SENHA"
                                    className="form-input"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                            </motion.div>

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="error-message"
                                    style={{ color: 'red', fontSize: '0.75rem', marginBottom: '1rem' }}
                                >
                                    {error}
                                </motion.div>
                            )}

                            {success && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="success-message"
                                    style={{ color: 'green', fontSize: '0.75rem', marginBottom: '1rem' }}
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
                                    className="submit-button primary"
                                    disabled={loading}
                                >
                                    {loading ? 'CREATING...' : 'CREATE ACCOUNT'}
                                </motion.button>

                                <motion.button
                                    type="button"
                                    onClick={onToggleSignUp}
                                    whileHover={{ backgroundColor: "#6b7280" }}
                                    className="submit-button secondary"
                                    disabled={loading}
                                >
                                    BACK TO SIGN IN
                                </motion.button>
                            </motion.div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}