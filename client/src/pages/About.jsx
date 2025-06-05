import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import FundoHome from '../assets/fundoAbout.png';

function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            y: 50,
            opacity: 0,
            filter: "blur(10px)"
        },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8
            }
        }
    };

    const titleVariants = {
        hidden: {
            y: 100,
            opacity: 0,
            scale: 0.8,
            filter: "blur(15px)"
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20,
                duration: 1.2
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="about-container"
        >
            <div className="background-img" style={{ backgroundImage: `url(${FundoHome})` }}>
                <div className="overlay"></div>

                <div className="content-wrapper">
                    <motion.div
                        className="hero-content"
                        variants={titleVariants}
                    >
                        <motion.h1 className="main-title">
                            SOBRE NOSSA
                        </motion.h1>
                        <motion.h1 className="main-title secondary">
                            FILOSOFIA.
                        </motion.h1>
                    </motion.div>

                    <motion.div
                        className="description-section"
                        variants={itemVariants}
                    >
                        <motion.p className="description-text">
                            A REAL FITNESS é a plataforma ideal para alunos e instrutores que buscam excelência em treinamento. Simplificamos a criação, gestão e acompanhamento de treinos, garantindo que cada meta seja atingida com planejamento e precisão. Conecte-se, treine e evolua com a gente!
                        </motion.p>
                    </motion.div>
                </div>

                <motion.div
                    className="scroll-indicator"
                    animate={{
                        y: [0, 10, 0],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div className="scroll-arrow"></div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default About;