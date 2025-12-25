import React, { useState, ChangeEvent } from 'react';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Card } from '@/shared/ui/Card/Card';

interface CreatePostFormProps {
    onCreate: (title: string, content: string) => void;
}

export const CreatePostForm: React.FC<CreatePostFormProps> = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        if (!title.trim() || !content.trim()) return;
        onCreate(title, content);
        setTitle('');
        setContent('');
    };

    return (
        <Card className="mb-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Новое мнение</h2>
            <Input 
                placeholder="Название игры" 
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <Input 
                as="textarea"
                placeholder="Выскажи всё, что думаешь..." 
                value={content}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
            />
            <div className="flex justify-end">
                <Button onClick={handleSubmit}>
                    Плюнуть мнением
                </Button>
            </div>
        </Card>
    );
};