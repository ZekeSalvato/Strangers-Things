import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ logout, token }) => {
  const headerStyle = {
      overflow: 'hidden',
      backgroundColor: '#f1f1f1',
      padding: '20px 10px',  
    
  }

  const navStyle = { 
    float: 'right',
    display: 'flex',    
    justifyContent: 'space-between',
  }
  
  const logoStyle = {
    float: 'left',
    textDecoration: 'none',
    fontWeight: 'bold',
  }

  const linkStyle = {
    textDecoration: "none",
    paddingLeft: '1rem',
    paddingRight: '1rem',

  }
  return (
    <header style={headerStyle}>
      <div>

      <Link to='/' style = {logoStyle}> Strangers Things </Link>
      <nav style={navStyle}>

        <Link to='/' style={linkStyle}>Home</Link>
        <Link to='/posts' style={linkStyle}>Posts</Link>
        <Link to='/profile' style={linkStyle}>Profile</Link>
        
        {
          token ? (
            <Link to='/' style={linkStyle} onClick={ () => logout() }>Logout</Link>
          ) : (
            <>
              <Link to='/register' style={linkStyle}>Register</Link>
              <Link to='/login' style={linkStyle}>Login</Link>
            </>
          )
        }
      </nav>
      </div>
    </header>
  )
}

export default Navbar;