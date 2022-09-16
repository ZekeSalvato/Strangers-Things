import shadows from '@mui/material/styles/shadows';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts, token }) => {
    const [searchString, setSearchString] = useState('');
    function searchFunction(post, str) {
        const { title, description } = post;
        if (title.toLowerCase().includes(str) || description.toLowerCase().includes(str)){
            return post;
        }
    }
    const searchedPosts = posts.filter(post => searchFunction(post, searchString));
    const searchResults = searchString.length ? searchedPosts : posts;

    const postsStyle = {
        backgroundColor: '#b9c2ca',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: '5px 2px',
        textAlign:'center'
    }
    const postStyle = {
        backgroundColor: '#edf1f5',
        padding: '2rem',
    }
    return (
        <div style={postsStyle}>
            <div id='outer div element'>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    align: 'stretch',
                }}
                    onSubmit={ev => {
                        ev.preventDefault();
                    }}>
                    <input type='text' placeholder='Search' onChange={(ev) => setSearchString(ev.target.value)}></input>
                </form>
                <button>
                    <Link to='/posts/create-post'>Add a Post</Link>
                </button>
            </div>
            {searchResults.map((post) => {
                const { description, location, price, title, _id, isAuthor } = post;
                return (
                    <div style={postStyle} key={_id}>
                        <h3 style={{
                            textDecoration: 'underline'
                        }}>{title}</h3>
                        <p>Description: {description}</p>
                        <p>Price: {price}</p>
                        <p>Location: {location}</p>
                        {
                            isAuthor ? (
                                <div>
                                    <button>
                                        <Link to={`/posts/edit-post/${_id}`}>Edit/Delete</Link>
                                    </button>
                                </div>
                            ) : (
                                <button>
                        <Link to={`/posts/${_id}`}>View</Link>
                                </button>
                            )
                        }
                    </div>
                )
            })
            }
        </div>
    )
}
export default Posts;