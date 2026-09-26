'use client';

import { useState } from "react";
import styles from "./navbar.css";
// import Logo from "public/Logo.png";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigationLinks = [
        { href: "./", label: "Home" },
        // { href: "#Coaching", label: "1:1 Coaching" },
        { href: "./transform_&_tone_program", label: "Transform & Tone Program" },
    ];

    const closeMenu = () => setIsMenuOpen(false);

    return(
        <nav className="navbar">
            <div className="logo">
                <img src="Logo.png" alt="Coaching by Celeste Logo"/>
            </div>
            <button
                className="menu_toggle"
                type="button"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="site-navigation"
                onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            {isMenuOpen && (
                <div
                    className="menu_overlay"
                    aria-hidden="true"
                    onClick={closeMenu}
                />
            )}
            <ul id="site-navigation" className={`nav_links${isMenuOpen ? " nav_links_open" : ""}`}>
                {navigationLinks.map((link) => (
                    <li className="nav_item" key={link.href}>
                        <a href={link.href} onClick={closeMenu}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}