import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation, Link, Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoggedIn, userName, logout } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);
    const MotionLink = motion(RouterLink);

    const HOME_PAGE_DELAY = 3000;
    const isHomePage = location.pathname === '/home' || location.pathname === '/homepage';

    const [showNavbar, setShowNavbar] = useState(!isHomePage);

    useEffect(() => {
        if (isHomePage) {
            const timer = setTimeout(() => {
                setShowNavbar(true);
            }, HOME_PAGE_DELAY);
            return () => clearTimeout(timer);
        }
    }, [isHomePage]);

    const handleViewProfile = () => {
        navigate('/profile');
        setShowDropdown(false);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
        setShowDropdown(false);
    };

    const handleAuthButton = () => {
        navigate('/login');
    };

    const navbarVariants = {
        hidden: {
            y: -100,
            opacity: 1,
            scale: 0.95
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 1,
                when: "beforeChildren",
                staggerChildren: 0.1,
                delay: isHomePage ? 0 : 0
            }
        }
    };

    const itemVariants = {
        hidden: {
            y: -20,
            opacity: 0,
            filter: "blur(5px)"
        },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 12,
                duration: 0.5
            }
        }
    };


    if (!showNavbar) return null;

    return (
        <motion.nav
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            className="navbar-container"
        >
            <nav className="navbar">
                <motion.div className="nav-left" variants={itemVariants}>
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.3 }
                        }}
                        className="logo"
                        onClick={() => navigate('/home')}
                        variants={itemVariants}
                    >
                        <img src={Logo} alt="Sua Logo" className="logo-img" />
                    </motion.div>

                    <motion.div className="nav-links" variants={itemVariants}>
                        {[
                            { label: "INICIO", to: "/home" },
                            { label: "SOBRE", to: "/about" },
                            { label: "CONTATO", to: "/contato" }
                        ].map(({ label, to }, index) => (
                            <MotionLink
                                key={index}
                                to={to}
                                className={`nav-link${location.pathname === to ? ' active' : ''}`}
                                whileHover={{
                                    y: -2,
                                    scale: 1.02,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                variants={itemVariants}
                            >
                                {label}
                            </MotionLink>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div className="nav-right-container" variants={itemVariants}>
                    {isLoggedIn ? (
                        <div className="nav-right">
                            <motion.span className="greeting" variants={itemVariants}>
                                Olá, {userName}!
                            </motion.span>
                            <div
                                className="profile-dropdown"
                                onMouseEnter={() => setShowDropdown(true)}
                                onMouseLeave={() => setShowDropdown(false)}
                            >
                                <motion.button
                                    whileHover={{
                                        y: -2,
                                        scale: 1.02,
                                        transition: { type: "spring", stiffness: 300 }
                                    }}
                                    className="login-button profile-button"
                                    variants={itemVariants}
                                >
                                    VER PERFIL
                                </motion.button>

                                <AnimatePresence>
                                    {showDropdown && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: -10,
                                                scale: 0.95,
                                                filter: "blur(3px)"
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                filter: "blur(0px)"
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -10,
                                                scale: 0.95,
                                                filter: "blur(3px)"
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 20,
                                                duration: 0.3
                                            }}
                                            className="dropdown-menu"
                                        >
                                            <motion.button
                                                whileHover={{
                                                    backgroundColor: "#4a5568",
                                                    x: 3,
                                                    transition: { duration: 0.2 }
                                                }}
                                                className="dropdown-item"
                                                onClick={handleViewProfile}
                                            >
                                                Ver Perfil
                                            </motion.button>
                                            <motion.button
                                                whileHover={{
                                                    backgroundColor: "#e53e3e",
                                                    x: 3,
                                                    transition: { duration: 0.2 }
                                                }}
                                                className="dropdown-item logout-item"
                                                onClick={handleLogout}
                                            >
                                                Logout
                                            </motion.button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ) : (
                        <motion.button
                            whileHover={{
                                y: -2,
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            className="login-button"
                            onClick={handleAuthButton}
                            variants={itemVariants}
                        >
                            LOGIN & SIGN UP
                        </motion.button>
                    )}
                </motion.div>
            </nav>
        </motion.nav>
    );
}
