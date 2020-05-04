import React from 'react';
import '../gameCapitals.css';

export default function SelectRegion({action, style}){
    return(
        <select className={style} onChange={action}>
            <option value='all'>Todos</option>
            <option value='Europe'>Europa</option>
            <option value='Asia'>Asia</option>
            <option value='Africa'>África</option>
            <option value='Americas'>América</option>
            <option value='Oceania'>Oceanía</option>
    </select> 
    )
}