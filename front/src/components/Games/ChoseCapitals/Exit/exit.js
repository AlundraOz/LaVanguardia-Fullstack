import React from 'react';
import {Link} from 'react-router-dom';
import '../gameCapitals.css';

export default function Exit({style, text}){
    return(
        <button className={style}><Link to="/">{text}</Link></button>
    )
}