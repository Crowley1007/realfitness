import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import GymBackground from '../assets/FundoHome.avif';
import Logo from '../assets/Logo.png';

function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {

    const timer1 = setTimeout(() => {
      setShowIntro(false);
    }, 2500);

    const timer2 = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);


  const logoIntroVariants = {
    initial: {
      scale: 0.9,
      opacity: 0,
      rotate: -180
    },
    animate: {
      scale: 4,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 1.2
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };


  const contentVariants = {
    initial: {
      opacity: 0,
      filter: "blur(10px)"
    },
    animate: {
      opacity: 1,

      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const heroTextVariants = {
    initial: {
      y: 30,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleComeceAgoraClick = () => {
    navigate('/login');
  };

  return (
    <>

      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="logo-intro-screen"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5 }
            }}
          >
            <motion.div
              className="logo-intro-container"
              variants={logoIntroVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <img src={Logo} alt="HeartCore Logo" className="logo-intro" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            className="homepage-container"
            variants={contentVariants}
            initial="initial"
            animate="animate"
          >
            <div className="homepage-background" style={{ backgroundImage: `url(${GymBackground})` }}>
              <div className="homepage-overlay"></div>

              <header className="homepage-hero">
                <motion.h1
                  variants={heroTextVariants}
                >
                  SEU TREINO, SUA ROTINA, SEU SUCESSO!
                </motion.h1>
                <motion.p
                  variants={heroTextVariants}
                >
                  DESCUBRA O MELHOR DE SI COM A REAL FITNESS.
                </motion.p>
                <motion.button
                  className="homepage-button"
                  variants={heroTextVariants}
                  whileHover={{
                    scale: 1.05,

                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleComeceAgoraClick}
                >
                  COMECE AGORA
                </motion.button>
              </header>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default HomePage;