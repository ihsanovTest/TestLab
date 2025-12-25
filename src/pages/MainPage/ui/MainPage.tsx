import React from 'react';
import { CreatePostForm } from '@/features/post/create/ui/CreatePostForm';
import { Feed } from '@/widgets/Feed/ui/Feed';
import { Header } from '@/widgets/Header/ui/Header';
import { IPost } from '@/shared/types';

interface MainPageProps {
    posts: IPost[];
    onAddPost: (title: string, content: string) => void;
}

export const MainPage: React.FC<MainPageProps> = ({ posts, onAddPost }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow w-full max-w-2xl mx-auto px-4">
                <CreatePostForm onCreate={onAddPost} />
                <Feed posts={posts} />
            </main>
            <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-200 dark:border-gray-800 mt-auto">
                © 2025 Toxic Gamer Opinion
            </footer>
        </div>
    );
};