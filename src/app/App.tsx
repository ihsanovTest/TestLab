import React, { useState } from 'react';
import { MainPage } from '@/pages/MainPage/ui/MainPage';
import { IPost } from '@/shared/types';
import './styles/index.css';

const initialPosts: IPost[] = [
    { id: 1, gameTitle: 'Bloodborne', content: 'Лучшая игра от FromSoftware. Атмосфера Лавкрафта просто невероятная. Сложно, но справедливо.', likes: 999, likedByMe: false },
    { id: 2, gameTitle: 'Minecraft', content: 'Идеальная песочница. Можно строить замки, а можно копать грязь. 10/10.', likes: 450, likedByMe: true },
    { id: 3, gameTitle: 'Hollow Knight', content: 'Полый рыцарь - это шедевр. Музыка, визуал, геймплей. Жду Silksong вечность.', likes: 321, likedByMe: false },
];

export const App = () => {
    const [posts, setPosts] = useState<IPost[]>(initialPosts);

    const handleAddPost = (title: string, content: string) => {
        const newPost: IPost = {
            id: Date.now(),
            gameTitle: title,
            content: content,
            likes: 0,
            likedByMe: false
        };
        setPosts([newPost, ...posts]);
    };

    return <MainPage posts={posts} onAddPost={handleAddPost} />;
};