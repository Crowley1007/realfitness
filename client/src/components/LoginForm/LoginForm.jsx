import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";
import "./LoginForm.css";

export default function LoginForm({ isCollapsed, onToggleSignUp }) {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [rememberMe, setRememberMe] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (error) setError('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await api.post('/login', {
                email: formData.email,
                password: formData.password
            });


            const newToken = response.data.token;
            const userName = response.data.user?.name || 'Usúario';
            login(newToken, userName);


            if (rememberMe) {
                localStorage.setItem('rememberedEmail', formData.email);
            }

            console.log('Login realizado com sucesso!');
            navigate('/profile');


        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setError(error.response?.data?.message || 'Erro ao fazer login');
        } finally {
            setLoading(false);
        }
    };

    const handleButtonClick = (e) => {
        if (isCollapsed) {
            onToggleSignUp();
        } else {
            handleLogin(e);
        }
    };

    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{
                x: 0,
                opacity: 1,
                y: isCollapsed ? -3 : 0
            }}
            transition={{ duration: 0.5 }}
            className="form-section"
        >
            <h2 className="form-title">SIGN IN</h2>

            <AnimatePresence>
                {!isCollapsed && (
                    <motion.div
                        initial={{ opacity: 1, height: "auto" }}
                        exit={{
                            opacity: 0,
                            height: 0,
                            transition: { duration: 0.3 }
                        }}
                        className="login-form-content"
                    >
                        <form onSubmit={handleLogin}>
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
                                    type="password"
                                    name="password"
                                    placeholder="PASSWORD"
                                    className="form-input"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                                className="checkbox-wrapper"
                            >
                                <div
                                    className={`custom-checkbox ${rememberMe ? 'checked' : ''}`}
                                    onClick={() => setRememberMe(!rememberMe)}
                                >
                                    {rememberMe && (
                                        <motion.svg
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="check-icon"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </motion.svg>
                                    )}
                                </div>
                                <span className="checkbox-label">RELEMBRAR-ME</span>
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
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ backgroundColor: "#374151" }}
                className="submit-button"
                disabled={loading}
                onClick={handleButtonClick}
                type={!isCollapsed ? "submit" : "button"}
            >
                {loading ? 'SIGNING IN...' : 'SIGN IN'}
            </motion.button>

            <AnimatePresence>
                {!isCollapsed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.7, duration: 0.4 }}
                        className="toggle-form-link"
                    >
                        <span className="toggle-text">
                            Ainda não tem uma conta?{' '}
                            <button
                                className="toggle-button"
                                onClick={onToggleSignUp}
                            >
                                SIGN UP
                            </button>
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!isCollapsed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                        className="forgot-password"
                    >
                        <Link to="/esqueci-senha" className="forgot-link">ESQUECEU SENHA?</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}