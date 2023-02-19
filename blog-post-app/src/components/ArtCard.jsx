import React from "react";
import "../assets/style.css";
import clapping from '../assets/Icons/clapping.svg';
import heart_black from '../assets/Icons/heart-black.svg';
import heart_red from '../assets/Icons/heart-red.svg';
export default function ArtCard(props) {
    
    const handleLike = ()=>{
        props.like(props.index);
    }
    const handleClap = ()=>{
        props.funcClap(props.index);
    }
    return (
        <div className="art-card">
            <img className="art-card-image" src={require(`../assets/Images/${props.data.image}`)}/>
            <div className="info-box">
                <div className="timeline">
                    <div>{props.data.date}</div>
                    <div>{props.data.readingTime}</div>
                </div>
                
                <div className="title">{props.data.title}</div>
                <div className="desc">{props.data.description}</div>
                <hr/>
                
                <div className="actions">
                    <div><img src={clapping} onClick={handleClap}/>{props.data.claps}</div>
                    <div>{(props.liked[props.index])?<img src={heart_red} onClick={handleLike}/>:<img src={heart_black} onClick={handleLike}/>}</div>
                </div>
                    
                
            </div>
        </div>
    );
}