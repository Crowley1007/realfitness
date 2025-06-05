
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import About from './pages/About';
import './pages/LoginPage.css';
import ForgetPassword from './pages/ForgetPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ProfilePage from './pages/ProfilePage';
import './pages/ProfilePage.css';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';
import ContactPage from './pages/ContactPage';

function App() {


  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/contato" element={<ContactPage />} />

          <Route path="/esqueci-senha" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;