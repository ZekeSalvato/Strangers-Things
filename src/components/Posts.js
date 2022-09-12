import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
    const [searchString, setSearchString] = useState('');
    function searchFunction(post, str) {
        const { title, description, location } = post;
        if (title.toLowerCase().includes(str) || description.toLowerCase().includes(str) || location.toLowerCase().includes(str)) {
            return post;
        }
    }
    const searchedPosts = posts.filter(post => searchFunction(post, searchString));
    const searchResults = searchString.length ? searchedPosts : posts;

    return (
        <div>
            <div id='outer div element'>
                <form onSubmit={ev => {
                    ev.preventDefault();
                }}>
                    <input type='text' placeholder='Search' onChange={(ev) => setSearchString(ev.target.value)}></input>
                </form>
            </div>
            {searchResults.map((post) => {
                const { description, location, price, title, _id, isAuthor } = post;
                return (
                    <div key={_id}>
                        <h3>{title}</h3>
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