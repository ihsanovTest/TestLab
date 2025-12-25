import React, { useState } from 'react';

const Post = ({ title, text }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div class="card">
            <img src="https://placehold.co/50" alt="avatar" class="card-img" />
            <div class="card-content">
                <h3 class="card-title">{title}</h3>
                <p class="card-text">{text}</p>
                <button 
                    class="btn like-btn" 
                    onClick={() => setLiked(!liked)}
                >
                    {liked ? 'Лайкнуто ❤️' : 'Лайк'}
                </button>
            </div>
        </div>
    );
};

export default Post;