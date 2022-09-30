import React from 'react';
import './Card.css';

const Card = (props) =>{
    return(
        <div className='bg-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src={props.thumb} alt='imagine'/>
            <h3>{props.name}</h3>
        </div>
    );
}

export default Card;