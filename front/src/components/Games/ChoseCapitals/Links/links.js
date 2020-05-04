import React from 'react';
import '../gameCapitals.css';

import media1 from '../img/social media-01.png'
import media2 from '../img/social media-02.png'
import media3 from '../img/social media-03.png'

export default function Links({style}){
    return(
        <div className={style}>
            <img src={media2} alt=''></img>
            <img src={media1} alt=''></img>
            <img src={media3} alt=''></img>
        </div>
    )
}