import { useLoaderData, useNavigate } from "react-router";
import { ArrowLeft, Settings, PenSquare, LogOut, Search } from "lucide-react";
import { type User } from "./util";
import { useState } from "react";
import SearchOverlay from "./SearchOverlay";

export default function UserProfile() {
    const user = useLoaderData() as User;
    const navigate = useNavigate();
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleBack = () => {
        navigate(-1);
    };

    const handleEditProfile = () => {
        console.log("Edit profile clicked");
    };

    const handleLogout = () => {
        console.log("Logout clicked");
        navigate("/");
    };

    const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <div className="user-profile-page">
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <div className="user-header">
                <button
                    onClick={handleBack}
                    className="user-back-btn"
                    aria-label="Go back"
                >
                    <ArrowLeft size={32} />
                </button>

                <img
                    src="/images/veggie_burger.png"
                    alt="decoration"
                    className="burger-left"
                />

                <button onClick={handleSearchToggle} className="user-search-btn" aria-label="Search">
                    <Search size={28} />
                </button>

                <button className="user-settings-btn" aria-label="Settings">
                    <Settings size={32} />
                </button>

                <img
                    src="/images/veggie_burger.png"
                    alt="decoration"
                    className="burger-right"
                />

                <div className="user-avatar-container" aria-hidden={user ? "false" : "true"}>
                    <img
                        src={user.avatar ?? "/images/users/alice.png"}
                        alt={user.name ? `${user.name} avatar` : "User avatar"}
                        className="user-avatar"
                    />
                </div>
            </div>

            <div className="user-info">
                <fieldset className="form-group">
                    <legend>Name</legend>
                    <div className="value">{user?.name || ""}</div>
                </fieldset>

                <fieldset className="form-group">
                    <legend>Email</legend>
                    <div className="value">{user?.email || ""}</div>
                </fieldset>

                <fieldset className="form-group">
                    <legend>Delivery address</legend>
                    <div className="value">{user?.address || ""}</div>
                </fieldset>

                <fieldset className="form-group">
                    <legend>Password</legend>
                    <div className="value password-dots">{"●".repeat(user?.password?.length || 8)}</div>
                </fieldset>

                <div className="user-actions">
                    <button 
                        onClick={handleEditProfile}
                        className="edit-profile-btn"
                        aria-label="Edit profile"
                    >
                        Edit Profile
                        <PenSquare size={20} />
                    </button>

                    <button 
                        onClick={handleLogout}
                        className="logout-btn"
                        aria-label="Log out"
                    >
                        Log out
                        <LogOut size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}