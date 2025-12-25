import React, { useState } from 'react';

const Post = ({ title, text }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="card">
            <img src="https://placehold.co/50" alt="avatar" className="card-img" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{text}</p>
                <button 
                    className="btn like-btn" 
                    onClick={() => setLiked(!liked)}
                >
                    {liked ? 'Лайкнуто ❤️' : 'Лайк'}
                </button>
            </div>
        </div>
    );
};

export default Post;