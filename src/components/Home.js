import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center'
    }}>
      <h1 style={{
        textAlign:'center'
      }}>Welcome to Stranger's Things!</h1>
      <button>
        <Link to='/posts/create-post' style={{
        }}>Add a Post</Link>
      </button>
    </div>
  )
}

export default Home;