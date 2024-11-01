import React, { useState, useEffect } from 'react';
import logo from '../NesbaLogo.avif';
import './Header.css';

function HeaderBar() {

    return (
        <div className="Header-bar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="language-buttons">
                
            </div>
        </div>
    );
}

export default HeaderBar;
