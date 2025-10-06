import { useLoaderData, useNavigate } from "react-router";
import { ArrowLeft, Settings, Edit, LogOut } from "lucide-react";
import { type User } from "./util";

export default function UserProfile() {
    const user = useLoaderData() as User;
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handleEditProfile = () => {
        console.log("Edit profile");
    };

    const handleLogout = () => {
        console.log("Logout");
    };

    return (
        <div className="user-profile-page">
            <div className="user-header">
                <button 
                    onClick={handleBack} 
                    className="user-back-btn"
                    aria-label="Go back"
                >
                    <ArrowLeft size={32} strokeWidth={3} />
                </button>

                <img 
                    src="/images/veggie_burger.png" 
                    alt="decoration" 
                    className="burger-left"
                />

                <button className="user-settings-btn" aria-label="Settings">
                    <Settings size={32} strokeWidth={2.5} />
                </button>

                <img 
                    src="/images/veggie_burger.png" 
                    alt="decoration" 
                    className="burger-right"
                />
            </div>
        </div>
    );
}