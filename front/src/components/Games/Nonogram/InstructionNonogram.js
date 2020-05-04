import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './InstructionNonogram.scss';

export class InstructionNonogram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    toggle = () => this.setState({
            modal: !this.state.modal
        })
    
   
  render(){
       //Instructions Icon
       const instructions = <FontAwesomeIcon icon = {
           faQuestionCircle
       }
       />

      return (
        <div>
            {/* INSTRUCTIONS */}
                <span className="bigInstructions" style={{ color: "rgb(245, 123, 75)", fontSize: "2em"}} onClick={this.toggle}>{instructions}</span>
                <span className="smallInstructions" style={{ color: "#A2A2A2", fontSize: "1.5em"}} onClick={this.toggle}>{instructions}</span>
                <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop:"10%"}}>
                    <ModalBody>
                        <div><p>
                        Cada nonograma tiene una serie de casillas con números arriba y a la izquierda. Estos números indican grupos de cuadrados consecutivos que debes rellenar. Cada grupo debe ir separado por una o más casillas libres.<br/>
                        1 click : casilla marcada.<br/>
                        2 clicks : cuando sepas que no puede estar marcada<br/>
                        ¡ATREVETE con más niveles! </p></div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Cerrar</Button>
                    </ModalFooter>
                </Modal>
        </div>
    )}
}

export default InstructionNonogram;