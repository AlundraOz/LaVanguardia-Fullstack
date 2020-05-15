import React, { useState, useEffect, Fragment } from 'react';
import shortId from 'shortid';
import {
    Button, Modal, ModalBody, ModalFooter, closeAll
} from 'reactstrap';
import './Ranking.css'

const Ranking=({game_score})=>{
    const [ranking, setRanking]= useState()
    const [modal, setModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:5000/ranking/${game_score}`)
            .then(res => res.json())
            .then(data => setRanking([...data]))

           
    },[])

    const toggle = () => setModal(modal);
    const toggleAll = () => {
        setCloseAll(true);
      }
    
    console.log(ranking)
    return(
        <Fragment>
             <Modal isOpen={modal} toggle={toggle} onClosed={closeAll ? toggle : undefined}>
                    {ranking &&
                        <table style={{color:'black', zIndex:1000}}>
                            <thead>
                            <tr>
                                <th>NOMBRE</th>
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
                        <button color="primary" onClick={toggleAll}>Close</button>     
                        </tbody>
                    </table>}
             </Modal>    
        </Fragment>
    )
}
export default Ranking;