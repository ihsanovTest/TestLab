import React from 'react';
import { ThemeSwitcher } from '@/features/theme/ui/ThemeSwitcher';

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#1e1e1e]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 mb-8">
            <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-black tracking-tighter text-red-600">
                    GameRant
                </h1>
                <ThemeSwitcher />
            </div>
        </header>
    );
};