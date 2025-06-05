import React from "react";
import Navbar from "../components/NavBar/NavBar";
import UserProfile from "../components/UserProfile/UserProfile";
import Background from "../components/Background/Background";
import "./ProfilePage.css";
import UserWorkouts from "../components/UserProfile/UserWorkouts";

export default function ProfilePage({ onLogout }) {
    return (
        <div className="profile-page">
            <Background />
            <div className="profile-main-content">
                <UserProfile onLogout={onLogout} />
            </div>
        </div>
    );
}