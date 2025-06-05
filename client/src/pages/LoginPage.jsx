import React, { useState } from "react";
import Navbar from "../components/NavBar/NavBar";
import LoginForm from "../components/LoginForm/LoginForm";
import SignUpSection from "../components/SignUpSection/SignUpSection";
import Background from "../components/Background/Background";
import "./LoginPage.css";

export default function LoginPage() {
    const [showSignUpForm, setShowSignUpForm] = useState(false);

    const handleToggleSignUp = () => {
        setShowSignUpForm(!showSignUpForm);
    };

    return (
        <div className="login-page">
            <Background />
            <div className="main-content">
                <div className="forms-container">
                    <LoginForm
                        isCollapsed={showSignUpForm}
                        onToggleSignUp={handleToggleSignUp}
                    />
                    <SignUpSection
                        showForm={showSignUpForm}
                        onToggleSignUp={handleToggleSignUp}
                    />
                </div>
            </div>
        </div>
    );
}