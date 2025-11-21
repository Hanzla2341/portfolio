import React, { useState, useEffect } from 'react'; // <-- IMPORTED HOOKS
// IMPORTED: Only the necessary icons
import { Phone, Mail, MapPin, Linkedin, MessageSquare } from 'lucide-react'; 

// --- YOUR CONTACT INFORMATION ---
const MY_CONTACT_INFO = {
    name: "Ali Hunzla",
    phone: "923186117804",
    email: "hanzlsabir06@gmail.com",
    address: "Arifwala city, Punjab, Pakistan",
    linkedin: "https://www.linkedin.com/in/ali-hunzla-14528637a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
};

// Utility for general style objects
const styles = {
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Retained for other transitions, but the social icons will use explicit timing
    transitionAll: {
        transition: 'all 300ms ease-in-out',
    },
};

// --- Reusable Contact Item Component (UNMODIFIED) ---
const ContactItem = ({ Icon, title, value }) => {
    // Determine the type of link to use in the anchor tag
    const getHref = () => {
        if (title.includes('Phone')) return `tel:+${value.replace(/\s/g, '')}`;
        if (title.includes('Email')) return `mailto:${value}`;
        return '#';
    };
    
    // Styles for the main container
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: '3rem', 
    };

    // Styles for the icon circle
    const iconCircleStyle = {
        ...styles.flexCenter,
        color: 'white',
        padding: '1.25rem', 
        borderRadius: '9999px', 
        backgroundColor: '#1f2937', 
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
        ...styles.transitionAll,
        cursor: 'pointer',
    };

    // Styles for the Icon component itself
    const iconStyle = {
        width: '2rem', 
        height: '2rem', 
    };

    // Styles for the title
    const titleStyle = {
        fontSize: '0.875rem', 
        color: '#9ca3af', 
        fontWeight: '600', 
        textTransform: 'uppercase', 
        letterSpacing: '0.05em', 
    };

    // Styles for the link/value
    const valueStyle = {
        fontSize: '1.125rem', 
        fontWeight: '300', 
        color: 'white', 
        textDecoration: 'none',
        ...styles.transitionAll,
        marginTop: '0.25rem', 
    };

    // Helper to format phone number for display (e.g., +92 318 611 7804)
    const formattedValue = title.includes('Phone') ? `+${value.substring(0, 2)} ${value.substring(2, 5)} ${value.substring(5, 8)} ${value.substring(8)}` : value;

    return (
        <div style={containerStyle}>
            {/* Large Icon Circle */}
            <div style={iconCircleStyle}>
                <Icon style={iconStyle} />
            </div>

            {/* Contact Title/Value */}
            <p style={titleStyle}>{title}</p>
            <a
                href={getHref()}
                style={valueStyle}
            >
                {formattedValue}
            </a>
        </div>
    );
};


// --- ANIMATED SOCIAL ICON COMPONENT (NEW) ---
const AnimatedSocialIcon = ({ Icon, link, altText, color1, color2 }) => {
    // State to toggle between the two colors
    const [currentColor, setCurrentColor] = useState(color1); 

    useEffect(() => {
        // Set up the interval to change the color every 2000 milliseconds (2 seconds)
        const interval = setInterval(() => {
            setCurrentColor(prevColor => 
                prevColor === color1 ? color2 : color1
            );
        }, 2000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, [color1, color2]); // Re-run effect if colors change (shouldn't happen here)
    
    // Style for the link wrapper
    const iconLinkStyle = {
        padding: '0.75rem', 
        marginLeft: '0.5rem', 
        marginRight: '0.5rem', 
        borderRadius: '9999px', 
        color: 'white', 
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)', 
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Apply the dynamic color with a transition for smoothness
        backgroundColor: currentColor, 
        transition: 'background-color 0.5s ease-in-out, transform 0.2s',
    };

    const iconStyle = {
        width: '1.25rem', 
        height: '1.25rem', 
    };

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={altText}
            style={iconLinkStyle}
            // Add a slight transformation on hover for extra pop
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <Icon style={iconStyle} />
        </a>
    );
};


// --- Main Contact Component (Updated Social Links) ---
const Contact = () => {
    // Updated Contact Information Array
    const contactInfo = [
        { title: "Phone", value: MY_CONTACT_INFO.phone, Icon: Phone },
        { title: "Email", value: MY_CONTACT_INFO.email, Icon: Mail },
        { title: "Address", value: MY_CONTACT_INFO.address, Icon: MapPin },
    ];

    // DEFINED SOCIAL LINKS (ONLY LINKEDIN AND WHATSAPP)
    const animatedSocialLinks = [
        { 
            Icon: Linkedin, 
            link: MY_CONTACT_INFO.linkedin, 
            altText: `${MY_CONTACT_INFO.name}'s LinkedIn profile`,
            color1: '#0077b5', // LinkedIn Blue
            color2: '#ffc107', // Yellow
        },
        { 
            Icon: MessageSquare, // Used for WhatsApp
            link: `https://wa.me/${MY_CONTACT_INFO.phone}`, 
            altText: "WhatsApp link",
            color1: '#ffc107', // Yellow
            color2: '#0077b5', // Blue
        },
    ];

    // --- Styles (Unchanged from original) ---
    const mainContainerStyle = {
        minHeight: '100vh', 
        backgroundColor: '#0f172a', 
        ...styles.flexCenter,
        padding: '1rem', 
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Inter, sans-serif', 
    };

    const contentAreaStyle = {
        width: '100%', 
        maxWidth: '48rem', 
        zIndex: 10, 
        padding: '2.5rem', 
        color: 'white', 
        textAlign: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0.3)', 
        borderRadius: '1rem', 
    };

    const headerStyle = {
        marginBottom: '3rem', 
    };

    const h1Style = {
        fontSize: '2.25rem', 
        fontWeight: '700', 
        marginBottom: '0.75rem', 
    };

    const pStyle = {
        color: '#9ca3af', 
        fontSize: '1rem', 
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr', 
        gap: '2rem', 
        '@media (min-width: 1024px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
        }
    };

    const dividerStyle = {
        width: '66.666667%', 
        height: '1px', 
        backgroundColor: '#374151', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginTop: '3rem', 
        marginBottom: '3rem', 
    };

    const socialContainerStyle = {
        marginTop: '2rem', 
        display: 'flex',
        justifyContent: 'center', 
    };

    const orb1Style = {
        position: 'absolute',
        top: '25%', 
        left: '25%', 
        width: '24rem', 
        height: '24rem', 
        backgroundColor: '#0891b2', 
        opacity: '0.1', 
        borderRadius: '50%', 
        filter: 'blur(30px)',
    };

    const orb2Style = {
        position: 'absolute',
        bottom: '25%', 
        right: '25%', 
        width: '15rem', 
        height: '15rem', 
        backgroundColor: 'white',
        opacity: '0.05', 
        borderRadius: '50%', 
        filter: 'blur(30px)',
    };
    // --- End Styles ---

    return (
        <div style={mainContainerStyle}>
            {/* Background Orbs/Circles (Static Approximation) */}
            <div style={orb1Style}></div>
            <div style={orb2Style}></div>

            {/* Contact Card/Content Area */}
            <div style={contentAreaStyle}>

                {/* Header */}
                <header style={headerStyle}>
                    <h1 style={h1Style}>
                        Contact Ali Hunzla
                    </h1>
                    <p style={pStyle}>
                        Ready to start your next MERN stack project? Let's connect!
                    </p>
                </header>

                {/* Contact Information Grid */}
                <div style={gridStyle}>
                    {contactInfo.map((item, index) => (
                        <ContactItem key={index} {...item} />
                    ))}
                </div>

                {/* Divider for Visual Separation */}
                <div style={dividerStyle}></div>
                
                <h2 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '1rem' }}>Find Me Online</h2>

                {/* Social Media Links - NOW USING ANIMATED COMPONENT */}
                <div style={socialContainerStyle}>
                    {animatedSocialLinks.map((social, index) => (
                        <AnimatedSocialIcon 
                            key={index} 
                            Icon={social.Icon} 
                            link={social.link} 
                            altText={social.altText}
                            color1={social.color1}
                            color2={social.color2}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;