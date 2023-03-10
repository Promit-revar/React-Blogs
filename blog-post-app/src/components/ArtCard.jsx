import React from 'react';
import '../assets/style.css';
import clapping from '../assets/Icons/clapping.svg';
import heart_black from '../assets/Icons/heart-black.svg';
import heart_red from '../assets/Icons/heart-red.svg';
import moment from 'moment';
export default function ArtCard(props) {
  const handleLike = () => {
    props.like(props.index);
  };
  const handleClap = () => {
    props.funcClap(props.index);
  };
  return (
    <div className="art-card">
      <img
        className="art-card-image"
        src={props.data.image}
      />
      <div className="info-box">
        <div className="timeline">
          <div>{moment(props.data.date).format('LL')}</div>
          <div>{props.data.reading_time}</div>
        </div>

        <div className="title">{props.data.title}</div>
        <div className="desc">{props.data.description}</div>
        <hr />

        <div className="actions">
          <div>
            <img src={clapping} data-testid='clap' onClick={handleClap} />
            <span data-testid={'numberOfClaps'}>{props.data.claps}</span>
          </div>
          <div>
            
            {props.liked[props.index] ? (
              <img src={heart_red} data-testid="heartR" onClick={handleLike} />
            ) : (
              <img
                src={heart_black}
                data-testid="heartB"
                onClick={handleLike}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
