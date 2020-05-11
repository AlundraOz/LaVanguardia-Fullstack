import React, { useState, useEffect, Fragment } from 'react';
import shortId from 'shortid';
const Ranking=({game_score})=>{
    const [ranking, setRanking]= useState()

    useEffect(()=>{
        fetch(`http://localhost:5000/ranking/${game_score}`)
            .then(res => res.json())
            .then(data => setRanking([...data]))

           
    },[])
    
    console.log(ranking)
    return(
        <Fragment>
        {ranking &&
            <table style={{color:'black', zIndex:1000}}>
                <thead>
                <tr>
                    <th>NOMRE</th>
                    <th>PUNTUACIÓN</th>
                </tr>
                </thead>
            <tbody>
            {ranking.map((score, index)=>{
                return(
                    <tr>
                        <td key={shortId.generate()}>{score.name}</td>
                        <td key={shortId.generate()}>{Object.values(score)[1]}</td>
                    </tr>
                )
            })}     
            </tbody>
        </table>}
        </Fragment>
    )
}
export default Ranking;