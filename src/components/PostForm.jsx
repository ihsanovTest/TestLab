import React, { useState } from 'react';

const PostForm = ({ onAddPost }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (!title.trim() || !text.trim()) {
            alert('Заполни оба поля!');
            return;
        }
        onAddPost(title, text);
        setTitle('');
        setText('');
    };

    return (
        <div class="post-form">
            <input 
                type="text" 
                placeholder="Название игры" 
                class="input-field"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea 
                placeholder="Твое мнение..." 
                class="input-field"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleSubmit} class="btn primary">
                Плюнуть мнением
            </button>
        </div>
    );
};

export default PostForm;