import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/NavBar/NavBar";
import Background from "../components/Background/Background";
import "./ContactPage.css";

export default function ContactPage() {
    return (
        <div className="contact-page">
            <Background />
            <div className="main-content">
                <div className="contact-container">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="contact-section"
                    >
                        <h2 className="contact-title">CONTATO</h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="contact-info"
                        >
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                className="contact-item"
                            >
                                <span className="contact-label">EMAIL:</span>
                                <span className="contact-value">contato@REALFITNESS.com</span>
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                className="contact-item"
                            >
                                <span className="contact-label">TELEFONE:</span>
                                <span className="contact-value">(82) 99999-9999</span>
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.4 }}
                                className="contact-item"
                            >
                                <span className="contact-label">ENDEREÇO:</span>
                                <span className="contact-value">Maceió, Alagoas - Brasil</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}