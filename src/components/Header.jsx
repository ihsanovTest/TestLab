import React from 'react';

const Header = ({ toggleTheme }) => {
    return (
        <header class="header">
            <div class="container header-content">
                <h1 class="logo">GameRant</h1>
                <button onClick={toggleTheme} class="btn">
                    Светлая/Темная
                </button>
            </div>
        </header>
    );
};

export default Header;