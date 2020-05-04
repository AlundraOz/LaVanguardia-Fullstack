import React, { Component, Fragment } from 'react';
import Snake from './snake';
import Food from './food';
import './snake.css'
import InstructionGames from '../../SharedButtons/InstructionGames';
import CloseButton from '../../SharedButtons/CloseButton';
import pointer from './images/pointer.png';
import backgroundBig from './images/backgroundBig.png';
import backgroundSmall from './images/backgroundSmall.png';


const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y]
}
const initialState = {
  gameStarted: false,
  gameEnded: true,
  food: getRandomCoordinates(),
  speed: 200,
  direction: 'RIGHT',
  snakeDots: [
    [0, 0],
    [2, 0]
  ],
}
const intervalFunction = (move, speed) => {
  console.log('hola hijo de puta', speed)
  return (setInterval(move, speed))
}
class IndexSnake extends Component {
  state = initialState;
  onClickStart = (e) => {
    //If everything is false do the set Interval + count + 1. Else stop the game + alert with counter
    this.setState({
      ...initialState,
      food: getRandomCoordinates(),
      gameStarted: true,
      gameEnded: false,
      interval: intervalFunction(this.moveSnake, this.state.speed),
    })

  }
  checkIfGameOver = () => {
    // WHEN WE CLICK ON THE FLAG, COUNTER IS INCREASED, THE FLAG DISAPPEARS FROM THAT SQUARE, A NEW RANDOM SQUARE IS CHOSEN
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
  }
  checkButtonsDirections = (e) => {
    if (e.target.value) {
      switch (e.target.value) {
        case 'UP':
          this.setState({ direction: 'UP' });
          break;
        case 'DOWN':
          this.setState({ direction: 'DOWN' });
          break;
        case 'LEFT':
          this.setState({ direction: 'LEFT' });
          break;
        case 'RIGHT':
          this.setState({ direction: 'RIGHT' });
          break;
      }
    }

  }
  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({ direction: 'UP' });
        break;
      case 40:
        this.setState({ direction: 'DOWN' });
        break;
      case 37:
        this.setState({ direction: 'LEFT' });
        break;
      case 39:
        this.setState({ direction: 'RIGHT' });
        break;
    }
  }
  moveSnake = () => {
    if (this.state.gameStarted) {
      let dots = [...this.state.snakeDots];
      let head = dots[dots.length - 1];
      switch (this.state.direction) {
        case 'RIGHT':
          head = [head[0] + 2, head[1]];
          break;
        case 'LEFT':
          head = [head[0] - 2, head[1]];
          break;
        case 'DOWN':

          head = [head[0], head[1] + 2];
          break;
        case 'UP':
          head = [head[0], head[1] - 2];
          break;
      }
      //    console.log('you just passed the moveSnake function')
      dots.push(head);
      dots.shift();
      this.setState({
        snakeDots: dots
      })
      this.checkIfGameOver()
      document.onkeydown = this.onKeyDown

    }
  }
  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 97 || head[1] >= 96 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }
  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.onGameOver();
      }
    })
  }
  checkIfEat = () => {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] == food[0] && head[1] == food[1]) {
      if (this.state.speed > 5) {
        console.log(this.state.speed, this.state.interval)
        clearInterval(this.state.interval)
        this.setState({
          speed: this.state.speed - 10,
          food: getRandomCoordinates(),
          interval: intervalFunction(this.moveSnake, this.state.speed)
        })
      }
      this.enlargeSnake();
      //this.increaseSpeed();
    }
  }
  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots: newSnake
    })
  }
  /*  increaseSpeed() {
     if (this.state.speed > 10) {
       this.setState({
         speed: this.state.speed - 10
       })
     }
   }  */
  onGameOver() {
    clearInterval(this.state.interval)
    this.setState(initialState)
  }
  render() {
    return (
      <div id="snakePageContainer">
        <img className="backgroundBigLeft" src={backgroundBig} />
        <img className="backgroundBigRight" src={backgroundBig} />

        <InstructionGames  instructionText="Selecciona el pin correspondiente con la bandera que aparece, si encadenas aciertos, tus puntuaciones se van acumulando (50,100,150…) , si fallas restas 25 y empiezas desde 50 puntos otra vez." />
        <CloseButton />
        <h1 style={{ color: 'lightgrey', paddingTop: '15px', marginBottom: '15px' }}>Juega al SNAKE</h1>

        <div className="snakeGameContainer">
        {this.state.gameStarted != true
        ?
        <div id="buttonContainer">
          <button id="startSnakeButtonIframe" onClick={this.onClickStart}>
            <p>Juega al SNAKE!</p>
          </button>
          <button id="startSnakeButton" onClick={this.onClickStart}>PLAY!</button>
        </div>
        : null
        }
        <div className="game-area">
          <Snake snakeDots={this.state.snakeDots}/>
          <Food dot={this.state.food}/>
        </div>

          <div className="SnakeDirectionsMobilePad">
            <button className="padButton" value='UP' onClick={this.checkButtonsDirections}>U</button>
            <div id="sidesArrowsRow">
              <button className="padButton" value='LEFT' onClick={this.checkButtonsDirections}>L</button>
              <button className="padButton" value='RIGHT' onClick={this.checkButtonsDirections}>R</button>
            </div>
            <button id="downButton" className="padButton" value='DOWN' onClick={this.checkButtonsDirections}>D</button>
          </div>
        </div>
        <img className="backgroundSmallLeft" src={backgroundSmall} />
        <img className="backgroundSmallRight" src={backgroundSmall} />
      </div>
    );
  }
}
export default IndexSnake;
