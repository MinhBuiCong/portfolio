import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [overlayWidth, setOverlayWidth] = useState(0);

    const openNav = () => {
        setOverlayWidth("100%");
    }

    const closeNav = () => {
        setOverlayWidth(0);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            const myNav = document.getElementById("myNav");
            if (myNav && !myNav.contains(event.target)) {
                closeNav();
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);


    return (
        <nav>
            <div id="myNav" className="overlay" style={{ width: overlayWidth }}>
                <div className="closebtn" onClick={closeNav}>&times;</div>
                <div className="overlay-content">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                </div>
            </div>
            <div className="menu" style={{ fontSize: '50px', cursor: 'pointer' }} onClick={openNav}>&#9776;</div>

        </nav>

    );
};

export default Navbar