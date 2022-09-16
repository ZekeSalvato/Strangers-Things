import React, { useState } from 'react';
import { createPost } from '../api';
import { navigate } from 'react-router-dom';

const CreatePost = ({ token, fetchPosts, navigate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver ] = useState('');

    const newPost = {
        title,
        description,
        price,
        location,
        willDeliver,
    }

    async function addPost() {
        const result = await createPost(token, newPost)
        fetchPosts();
        navigate(`/posts`);
    }

    return (

        // This needs to be a form that accepts the 5 request parameters for creating a post
        <form>
            <input 
              type='text'
              placeholder='Title'
              onChange={(event) => setTitle(event.target.value)}
            />
            <input 
              type='text'
              placeholder='Description'
              onChange={(event) => setDescription(event.target.value)}
            />
            <input 
              type='text'
              placeholder='Location'
              onChange={(event) => setLocation(event.target.value)}
            />
            <input 
              type='text'
              placeholder='Price'
              onChange={(event) => setPrice(event.target.value)}
            />
            <input 
              type='checkbox'
              checked={setWillDeliver}
              onChange={(event) => setWillDeliver(event.target.checked)}
            />
            <button 
                type='submit' 
                onClick={(event) =>{
                    event.preventDefault();
                    addPost();
                }}>
                Create a New Post
            </button>
        </form>
        )
}

export default CreatePost;