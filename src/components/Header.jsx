import React from 'react';

const Header = ({ toggleTheme }) => {
    return (
        <header className="header">
            <div className="container header-content">
                <h1 className="logo">GameRant</h1>
                <button onClick={toggleTheme} className="btn">
                    Светлая/Темная
                </button>
            </div>
        </header>
    );
};

export default Header;