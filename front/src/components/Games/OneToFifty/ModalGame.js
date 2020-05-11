import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { SaveScore } from '../../../sheredFunctions/SheredFunctions';
import { MyContext } from '../../../context/MyProvider';
import { useEffect } from 'react';

const ModalGame = (props) => {

  const context = useContext(MyContext);

  const [modal, setModal] = useState(props.modalState);
  const [score, setScore] = useState(0);

  let time = (props.actualTime);
  let timeSplit = time.split(':');
  let minutos = (timeSplit[0])
  let segundos = (timeSplit[1])
  let timeInSeconds = (Number(minutos) * 60) + Number(segundos);

  const toggle = () => setModal(!modal);

  useEffect(()=>{
    if (timeInSeconds >= 100) {
      setScore(10)
      SaveScore(score, context.state.user.results[0].user_id, "fifty_score")
    } else if (timeInSeconds >= 60) {
      setScore(20)
      SaveScore(score, context.state.user.results[0].user_id, "fifty_score")
    } else if (timeInSeconds >= 50) {
      setScore(30)
      SaveScore(score, context.state.user.results[0].user_id, "fifty_score")
    } else if (timeInSeconds >= 40) {
      setScore(40)
      SaveScore(score, context.state.user.results[0].user_id, "fifty_score")
    } else {
      setScore(60)
      SaveScore(score, context.state.user.results[0].user_id, "fifty_score")
    }
  },[])

  let ranking = () => {
    if (timeInSeconds >= 100) {
      return `Vete a por un cafe y vuelve...${score} PTS`
    } else if (timeInSeconds >= 60) {
      return `¡¡Normalillo!!...${score} PTS`
    } else if (timeInSeconds >= 50) {
      return `¡Por encima de la media!...${score} PTS`
    } else if (timeInSeconds >= 40) {
      return `Nivel Experto...${score} PTS`
    } else {
      return `Nivel DIOS...${score} PTS`
    }
  }

  return (
    <div>
      <Modal isOpen={modal} style={{ marginTop: '20vh' }}>
        <ModalHeader >{ranking()}</ModalHeader>
        <ModalBody>
          <p>Tu tiempo es de &nbsp; &nbsp;<span style={{ fontWeight: "bold", fontSize: "x-large" }}>{props.actualTime}</span></p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => window.location.reload()}>Restart</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalGame;