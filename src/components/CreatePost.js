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
        const results = await createPost(token, newPost)
        fetchPosts();
        navigate(`/posts`);
    }

    return (

        // This needs to be a form that accepts the 5 request parameters for creating a post
        <form onSubmit={ (ev) => {
            ev.preventDefault();
            addPost();
            
          }}>
            <input 
              type='text'
              placeholder={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />
            <input 
              type='text'
              placeholder={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            <input 
              type='text'
              placeholder={location}
              onChange={(ev) => setLocation(ev.target.value)}
            />
            <input 
              type='text'
              placeholder={price}
              onChange={(ev) => setPrice(ev.target.value)}
            />
            <input 
              type='checkbox'
              checked={setWillDeliver}
              onChange={(ev) => setWillDeliver(ev.target.checked)}
            />
            <button 
                type='submit' 
                onClick={(ev) =>{
                    ev.preventDefault();
                    addPost();
                }}>
                Create a New Post
            </button>
        </form>
        )
}

export default CreatePost;