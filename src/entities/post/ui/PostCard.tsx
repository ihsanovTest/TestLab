import React, { useState } from 'react';
import { IPost } from '@/shared/types';
import { Card } from '@/shared/ui/Card/Card';
import { Button } from '@/shared/ui/Button/Button';

interface PostCardProps {
    post: IPost;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const [likes, setLikes] = useState(post.likes);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setLikes(prev => prev - 1);
        } else {
            setLikes(prev => prev + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <Card className="flex gap-4 items-start transition-transform hover:scale-[1.01]">
            <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full flex-shrink-0" />
            
            <div className="flex-grow">
                <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-gray-100">
                    {post.gameTitle}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    {post.content}
                </p>
                <div className="flex items-center gap-2">
                    <Button 
                        variant={isLiked ? 'primary' : 'outline'} 
                        onClick={handleLike}
                        className="text-sm py-1 px-3"
                    >
                        {isLiked ? 'Лайкнуто ❤️' : 'Лайк'}
                    </Button>
                    <span className="text-sm text-gray-500">{likes}</span>
                </div>
            </div>
        </Card>
    );
};