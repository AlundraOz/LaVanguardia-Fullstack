import React from 'react';
import '../gameCapitals.css';

export default function Info({style, text}){
    return(
        <div className={style}>{text}</div>
    )
}