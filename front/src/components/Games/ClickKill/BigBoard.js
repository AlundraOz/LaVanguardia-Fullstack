import React, { Fragment } from 'react';
import footballFlags from "./images/footballFlags";
import SmallSquare from './SmallSquare';
import SelectTeam from './SelectTeam';
import Grid from '@material-ui/core/Grid';
import './BigBoard.css';
import './Button.css';
import backgroundFootball from './images/FOOTBAL-03@2x.png'
import gameTitle from './images/gameTitle.png'
import InstructionGames from '../../SharedButtons/InstructionGames';
import CloseButton from '../../SharedButtons/CloseButton'
import './../../SharedButtons/iframeButtons'


const initialState = () => {
  return {
  logoClicked: false,
  gameStarted: false,
  gameEnded: false,
  squareIndex: null,
  squareIndexIframe: null,
  logoClassName: "logoDisplayed",
  clickedIndex: false,
  teamChosen: false,
  counter: 0,
  smallSquaresArray: ["","","","","","","","","","","","","","","","","","","",""],                     // COMMENT : array with all fixed position deleted
  smallSquaresArrayIframe: ["","","","","","","","","",""],
  logoSelected: '',
  restartButton: false
  }
}

export default class BigBoard extends React.Component {
  state = initialState()
  delay = 2000;
  timer = () => {setTimeout(this.onEndTimer, this.delay)}


  onClickStart = () => {
    this.chooseSmallSquare()
    //If everything is false do the set Interval + count + 1. Else stop the game + alert with counter
      console.log('here we are')
      this.timer()
      this.setState({
        gameStarted: true,
        gameEnded: false
      })
  }



  // CHOOSING A RANDOM SQUARE TO DISPLAY THE LOGO IN THE GAME
  chooseSmallSquare = () => {
    let randomIndex = Math.floor(Math.random() * this.state.smallSquaresArray.length);
    let randomIndexIframe = Math.floor(Math.random() * this.state.smallSquaresArrayIframe.length);
    this.setState ({
      squareIndex: randomIndex,
      squareIndexIframe: randomIndexIframe,
    })
  }


  itemClicked = () => {
    this.setState({
      logoClicked: true,
      clickedIndex: true
    })
  }

  // TIMER GOES FASTER AND FASTER ALONG THE GAME
  onEndTimer = () => {
    // WHEN WE CLICK ON THE FLAG, COUNTER IS INCREASED, THE FLAG DISAPPEARS FROM THAT SQUARE, A NEW RANDOM SQUARE IS CHOSEN
    if(this.state.clickedIndex === true){
      this.setState({
        logoClicked: false,
        clickedIndex: false,
        logoClassName: "logoDisplayed",
        counter: this.state.counter + 1
      })
      // HERE THE DELAY BECOMES SHORTER
      this.delay = this.delay - 50;
      this.onClickStart()
    } else {
      this.setState({
        gameEnded: true
      })
    }
    clearTimeout(this.timer);
  }


// STATE IS UPDATED WHEN RESTARTING THE GAME
  restartCounter = () => {
    this.setState ({
      gameStarted: false,
      gameEnded: false,
      counter: 0
    })
    this.delay = 2000
    this.onClickStart()
  }

  changeTeam = () => {
    this.setState(
      initialState()
    );

    console.log('TEAM CHANGES CLICKED')

  }

  printName = (e) => {
      this.setState({
          logoSelected: e.target.id,
          teamChosen: true,
          gameEnded: false,
          gameStarted: false,
      })
  }



  // WE USE MATERIAL-UI FOR LONG-TERM SUSTAINABILITY :
  // - A LONG TERM RESPONSIVE GAME THAT WILL BE EASILY ADAPTABLE TO POSSIBLE FUTURE DESIGN CHANGES (easy to change the number and disposition of lines and columns)
  // - TO USE THE AUTOMATIC Z-INDEX TO GIVE AUTOMATICALLY AS MANY THE POSSIBLE LOGO POSITIONS AS SQUARES, EVEN IN CASE OF BOARDS EVOLUTION
  //    (we can increase and decrease as much as we want the number of squares without any impact on the game functionalities)

  render() {
    return (
      <Fragment>
        <InstructionGames instructionText = "Machaca al equipo que más rábia te dé! Selecciona un equipo y pega encima de su escudo para sumar puntos, cuidado, si te equivocas pierdes." / >
        <CloseButton/>
        <div id="superFootballBackground" >
          <img className='gameTitle' src={gameTitle} alt='title'></img>
          <div id='generalContainer'>
            {/* 1ST PAGE IS DISPLAYED UNTIL A FLAG IS CHOSEN */}
            {this.state.teamChosen === false
            ? <Fragment>
                <SelectTeam printName={this.printName} footballFlags={footballFlags}/>
              </Fragment>
              /* THE GAME PAGE IS DISPLAYED ONCE THE FLAG IS CHOSEN. The Gid needs to be made from here to pass the Zindex according to the array.map */
            : <div className="footballGameContainer">
                <div className="footballGameHeader">
                  <p id="footballCounterButton">{this.state.counter}</p>
                </div>
                <div className="img-container" flexGrow={1}>
                  <Grid container direction="row" justify="center" alignItems="center" className="flagSquare">
                    {this.state.smallSquaresArray.map((x, index) =>
                      <Grid item xs={2} className="SmallSquareGrid" style={{height: 90, margin: '0 1px 2px 0', border: '1px solid grey', borderRadius: '5px'}} >
                        <SmallSquare
                        zIndex={index}
                        logo={this.state.logoSelected}
                        randomSquare={index === this.state.squareIndex}
                        itemClicked={this.itemClicked}
                        logoClicked={this.state.logoClicked}
                        />
                      </Grid>
                    )}

                    {this.state.smallSquaresArrayIframe.map((x, index) =>
                      <Grid item xs={2} className="SmallSquareGridIframe" style={{height: 70, margin: '0 2px 3px 0', border: '1px solid grey', borderRadius: '5px'}} >
                        <SmallSquare
                        zIndex={index}
                        logo={this.state.logoSelected}
                        randomSquare={index === this.state.squareIndexIframe}
                        itemClicked={this.itemClicked}
                        logoClicked={this.state.logoClicked}
                        />
                      </Grid>
                    )}
                  </Grid>
                </div>
                <div id="buttonContainer">
                  {/* BEFORE STARTING THE GAME THE "start" BUTTON IS DISPLAYED, WHEN FINISHED, the button "playagain" IS DISPLAYED with the result. No button is displayed when playing */}
                  { !this.state.gameStarted && !this.state.gameEnded && !this.state.restartButton
                    ? <div class="flip-box">
                        <div class="flip-box-inner" onClick={this.onClickStart}>
                          <div class="flip-box-front">
                            <button className="startGameButton">DALE UNA PALIZA</button>
                          </div>
                          <div class="flip-box-back">
                            <button className="startGameButton">DALE UNA PALIZA</button>
                          </div>
                        </div>
                      </div>
                    : null
                  }
                  {this.state.gameStarted && this.state.gameEnded
                    ?
                        <div class="flip-box">
                            <div class="flip-box-inner" onClick={this.restartCounter}>
                              <div class="flip-box-front">
                                <button className="playAgainButton" boxShadow={3}>
                                  <b>MACHACAR<br/>MÁS</b>
                                  <br/><p className="changeTeamLink" onClick={this.changeTeam}>cambiar de equipo
                                       </p>
                                </button>

                              </div>

                              <div class="flip-box-back">
                                <button className="playAgainButton" boxShadow={3}>
                                  {this.state.counter}
                                </button>
                              </div>
                            </div>
                          </div>

                    : null
                  }
                </div>
              </div>
            }
          </div>
          <img className="footballFooterBackground" src={backgroundFootball} alt='footballGameFooter'></img>
        </div>
      </Fragment>
    )
  }
}
