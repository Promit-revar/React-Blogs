import React from 'react';  
import '../assets/style.css';   
export default function BodyComponent(props) {
    return (
        <div className='card '>
            {props.children}
        </div>
    )
}