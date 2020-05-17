import React, { useState, useContext, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom'
import shortId from 'shortid';
import {
    Button, Modal, ModalBody, ModalFooter, closeAll
} from 'reactstrap';
import './Ranking.css';
import { MyContext } from '../../context/MyProvider';
import LogIn from '../Access/LogIn';


const Ranking=({gameName, scoreState})=>{
    const [ranking, setRanking]= useState()
    const [modal, setModal] = useState(true);
    const [closeAll, setCloseAll] = useState(true);
    const { state, logIn } = React.useContext(MyContext)

    useEffect(()=>{
        fetch(`http://localhost:5000/ranking/${gameName}`)
            .then(res => res.json())
            .then(data => setRanking([...data]))

        if(state.user.results !== undefined){
            //save score in ddbb 
        }else{
            //save score in context
           // LogIn( 0 , scoreState, gameName)
        }
           
    },[])

    const toggle = () => setModal(modal);
    const toggleAll = () => {
        setCloseAll(true);
      }
    
    console.log(state.user)
    return(
        <Fragment>
             <Modal isOpen={modal} toggle={toggle} onClosed={closeAll ? toggle : undefined} style={{ marginTop:"10%"}}>
                 <ModalBody>
                        {ranking &&
                        <div>
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
                        </table>
                        {state.user.results === undefined
                        ?
                        <div>
                            <p>Tu puntuación final es {scoreState}. Si quieres guardarla, registrate<Link to='Access'>aquí</Link></p>
                        </div>
                        : 
                        <div>
                            <p>dssdsd</p>
                        </div>}
                        </div>}

                    </ModalBody>
             </Modal>    
        </Fragment>
    )
}
export default Ranking;