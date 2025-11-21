import React, { useState, useEffect } from 'react';
import profileimage from '../assets/images/profile.png'
import { useNavigate } from 'react-router-dom';


// ------------------------
// NavButton Component
// ------------------------
const NavButton = ({ children, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [flashColor, setFlashColor] = useState('#450000');

    // Flashing background every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setFlashColor(prev =>
                prev === '#450000' ? '#000000' : '#450000'
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const buttonStyle = {
        backgroundColor: isHovered ? '#000000' : flashColor,
        color: '#FFFFFF',
        padding: '0.5rem 1rem',
        margin: '0 0.5rem',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        border: 'none',
        transform: isHovered ? 'scale(0.98)' : 'scale(1)',
        boxShadow: isHovered
            ? '0 1px 3px rgba(0, 0, 0, 0.5)'
            : '0 4px 6px rgba(0, 0, 0, 0.4)',
        transition: 'background-color 0.3s ease, transform 0.1s, box-shadow 0.1s',
        fontSize: '0.9rem',
        fontWeight: '500',
    };

    return (
        <button
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};



// ------------------------
// CSS styles
// ------------------------
const styles = {
    appContainer: {
        backgroundColor: '#1A0E0E',
        minHeight: '100vh',
        color: '#FFFFFF',
        fontFamily: 'Inter, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    margin:'-8px',

        
        backgroundImage: `repeating-linear-gradient(
            to right, #1A0E0E, #1A0E0E 10px, #2C1A1A 10px, #2C1A1A 11px
        )`,
    },

    profileContainer: {
        width: '100%',
        maxWidth: '1200px',
        padding: '0 1rem',
    },

    navBar: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '1.5rem 0',
        marginBottom: '1rem',
    },

    heroSection: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '4rem 0',
    },

    textColumn: {
        flex: '1 1 500px',
        paddingRight: '2rem',
    },

    imageColumn: {
        flex: '1 1 300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '300px',
    },

    title: {
        fontSize: '3.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },

    introText: {
        fontSize: '1.125rem',
        lineHeight: '1.6',
        color: '#CCCCCC',
        marginBottom: '2rem',
        maxWidth: '450px',
    },

    button: {
        backgroundColor: '#4CAF50',
        color: '#FFFFFF',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        border: 'none',
        boxShadow: '0 0 10px rgba(76, 175, 80, 0.6)',
        textDecoration: 'none',
    },

    profileImage: {
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '4px solid #333333',
    },
};


// ------------------------
// Profile Component
// ------------------------
const Profile = () => {
    const navigate = useNavigate();

    const profileData = {
        name: "Ali Hunzla",
        intro:
            "Back_End Development : Node.js, express.js, MongoDB, REST APIs, Authentication | Front_End Development : HTML, CSS, JavaScript, React.js, Responsive Design, UI/UX Concepts",
        imageUrl: profileimage,
    };

    return (
        <div style={styles.appContainer}>
            <div style={styles.profileContainer}>

                {/* Navigation Bar */}
                <header style={styles.navBar}>
                    <NavButton onClick={() => navigate("/services")}>Services</NavButton>
                    <NavButton onClick={() => navigate("/portfolio")}>Portfolio</NavButton>
                    <NavButton onClick={() => navigate("/contact")}>Contact</NavButton>
                </header>

                {/* Hero Section */}
                <section style={styles.heroSection}>
                    <div style={styles.imageColumn}>
                        <img
                            src={profileData.imageUrl}
                            alt="Profile"
                            style={styles.profileImage}
                            onError={(e) => {
                                e.target.src =
                                    "https://placehold.co/300x300/1E1E1E/FFFFFF?text=Profile";
                            }}
                        />
                    </div>

                    <div style={styles.textColumn}>
                        <h1 style={styles.title}>{profileData.name}</h1>
                        <p style={styles.introText}>{profileData.intro}</p>

                        <button style={styles.button}>
                            Mern Stack Developer &gt;
                        </button>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Profile;
