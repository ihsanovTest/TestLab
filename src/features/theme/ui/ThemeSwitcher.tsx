import React, { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/Button/Button';

export const ThemeSwitcher = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (isDark) {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    }, [isDark]);

    return (
        <Button variant="ghost" onClick={() => setIsDark(!isDark)}>
            {isDark ? '🌞 Светлая' : '🌙 Темная'}
        </Button>
    );
};