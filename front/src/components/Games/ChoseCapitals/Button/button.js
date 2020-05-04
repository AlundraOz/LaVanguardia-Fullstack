import React from 'react';
import '../gameCapitals.css';

export default function Button({action, style, text}){
    return(
        <button className={style} onClick={action} id={text}>{text}</button>
    )
}