import React, { useState, useEffect, Fragment } from 'react';
import shortId from 'shortid';
import {
    Button, Modal, ModalBody, ModalFooter, closeAll
} from 'reactstrap';
import './Ranking.css';

/*export class Ranking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            ranking: []
         
        }
    }

    componentDidMount() {
        fetch(`http://localhost:5000/ranking/${this.props.game_score}`)
            .then(res => res.json())
            .then(data => this.setState({ranking: data})) 
    }

    toggle = () => this.setState({
            modal: !this.state.modal
        })
    
   
  render() {

      return (
        < div className = "instructionGames" >
                 <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop:"10%"}}>
                 <ModalBody>
                        {this.state.ranking &&
                            <table style={{color:'black', zIndex:1000}}>
                                <thead>
                                <tr>
                                    <th>NOMBRE</th>
                                    <th>PUNTUACIÓN</th>
                                </tr>
                                </thead>
                            <tbody>
                            {this.state.ranking.map((score, index)=>{
                                return(
                                    <tr>
                                        <td key={shortId.generate()}>{score.name}</td>
                                        <td key={shortId.generate()}>{Object.values(score)[1]}</td>
                                    </tr>
                                )
                            })}
                            <button color="primary" onClick={this.toggle}>Close</button>     
                            </tbody>
                        </table>}
                    </ModalBody>
             </Modal>    
        </div>
    )}
}

export default Ranking;*/

const Ranking=({game_score})=>{
    const [ranking, setRanking]= useState()
    const [modal, setModal] = useState(true);

    useEffect(()=>{
        fetch(`http://localhost:5000/ranking/${game_score}`)
            .then(res => res.json())
            .then(data => setRanking([...data]))

           
    },[])

    const toggle = () => setModal(!modal);

    
    console.log(ranking)
    return(
        <Fragment>
             <Modal isOpen={modal} toggle={toggle} >
                 <ModalBody>
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
                            <Button color="primary" onClick={toggle}>Close</Button>     
                            </tbody>
                        </table>}
                    </ModalBody>
             </Modal>    
        </Fragment>
    )
}
export default Ranking;