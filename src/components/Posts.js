import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deletePost } from '../api';

const Posts = ({ posts }) => {
const navigate = useNavigate();
  return (
    <div id='outer div element'>
    {
      posts.map((post) => {
        const {description, location, price, title, _id, isAuthor } = post;
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
                                <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
                            </button>
                            <button onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }}>
                                <Link to={`/posts`}>Delete</Link>
                            </button>
                        </div>
                    ) : (
                        <button>
                        <Link to={`/posts/${_id}`}>View</Link>
                        </button>
                    )
                  }
                  <button>
                    <Link to={'/posts/create-post'}>Add Your Own Post</Link>
                  </button>
              </div>
          )
      })
          }
      </div>
  )
}

export default Posts;