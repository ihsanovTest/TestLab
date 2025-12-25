import React from 'react';
import Post from './Post';

const Feed = ({ posts }) => {
    return (
        <div className="feed">
            {posts.map((post, index) => (
                <Post key={index} title={post.title} text={post.text} />
            ))}
        </div>
    );
};

export default Feed;