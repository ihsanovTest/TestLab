import React from 'react';
import { IPost } from '@/shared/types';
import { PostCard } from '@/entities/post/ui/PostCard';

interface FeedProps {
    posts: IPost[];
}

export const Feed: React.FC<FeedProps> = ({ posts }) => {
    return (
        <div className="flex flex-col gap-4 pb-10">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};