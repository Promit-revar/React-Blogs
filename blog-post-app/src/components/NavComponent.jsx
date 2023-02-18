import React from 'react';
import '../assets/style.css';
export default function NavComponent() {
    return (
        <nav >
        <div className='logo'>
            <h1>The Artifact</h1>
            <em>Culture &amp; Art blog</em>
        </div>
        <div className='nav-links'>
            <a to='#'>Home</a>
            <a to='#'>About</a>
            <a to='#'>Contact</a>
        </div>
        </nav>
        
    );  
}
