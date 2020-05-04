import React, { Component, Fragment } from 'react';
import './gameCapitals.css';
import { Shuffle } from '../../../sheredFunctions/SheredFunctions'
import Links from './Links/links';
import Button from './Button/button';
import SelectRegion from './Select/select';
import Info from './InfoGame/infoGame';
import Exit from './Exit/exit'
import { Link } from 'react-router-dom';
import InstructionGames from '../../SharedButtons/InstructionGames';
import CloseButton from '../../SharedButtons/CloseButton';
import titleCity from './img/logo-02.png'
import backgroundCity from './img/fondo_capitales.png'


export default class GameCapitals extends Component {
    state = {
        countries: [], //save the data api that is going to change by the way the play develop
        gameStatus: 'startGame', //there is 3 states of the game to show the diferent elements in this game(start/playing/end)
        fourCapitals: [],//where we save all the answers shuffled
        incorrecto: '',//message for the wrong answer
        seconds: 30, //time remaining for the counter
        points: 0
    }

    getCountry = () => {
        let arrayCountries = []

        this.props.countries.map((country) => {
            //save api in array
            return arrayCountries.push(country)
        })
        //save always the first 4 capitals because we ara changing the arrayCountries by splicing the first 4 countries to avoid repeating them
        let fourCapitals = [arrayCountries[0].capital, arrayCountries[1].capital, arrayCountries[2].capital, arrayCountries[3].capital]
        //always saved in diferent orders
        Shuffle(fourCapitals)
        this.setState({
            countries: arrayCountries,
            gameStatus: 'playingGame', //change to the game part
            fourCapitals
        })

        const countdown = () => {
            //prepare the counter
            if (this.state.seconds <= 0) {
                //when it's finished
                this.setState({ gameStatus: 'gameOver' })
                //finish counter
                clearTimeout(timerId);
            } else {
                //update the counter resting the seconds
                this.setState({ seconds: this.state.seconds - 1 })
            }
        }
        //interval for the counter
        var timerId = setInterval(countdown, 1000);

    }

    chooseCapital = (e) => {
        //recover the buton clicked for the capital by the id where we save the name of the capital
        if (this.state.countries[0].capital === e.target.id) {
            let countriesArray = [...this.state.countries]

            //cut to another array the selected countriy in the game to put it at the end of the array
            let countrySelected = countriesArray.slice(0, 1)

            //cut out from the original array
            countriesArray.splice(0, 1)
            //disorder the array to don have the next capitals that are in the quertion for the nextcountries
            Shuffle(countriesArray)
            //put at the end of the array
            countriesArray = [...countriesArray, ...countrySelected]

            let fourCapitals = [countriesArray[0].capital, countriesArray[1].capital, countriesArray[2].capital, countriesArray[3].capital]
            Shuffle(fourCapitals)

            this.setState({
                //When the answer is right: update countries and capitals, sum seconds and points and hide incorrect message
                countries: countriesArray,
                fourCapitals,
                incorrecto: '',
                seconds: this.state.seconds + 4,
                points: this.state.points + 10
            })
        } else {
            this.setState({
                //when it is incorrect:
                incorrecto: 'INCORRECTO!',
                seconds: this.state.seconds - 3
            })
        }
    }
    tryAgain = () => {
        //in the last state of the game 'end' when we click again  we call the function for playingGame status and change the state for showing this part and reload the default state
        this.getCountry()
        this.setState({
            incorrecto: '',
            seconds: 30,
            gameStatus: 'startGame',
            points: 0
        })
    }

    render() {

        /*OBJECT WITH THE 3 STATES OF THE GAME THAT WE ARE CHANGING DURING THE FUNCTIONS */
        const gameStatus = {

            startGame: () => (<div className='startGame-page'>
                    <img className='titleCity' src={titleCity}/>
                    {/* <Info style='instrucciones' text='Instrucciones: Seleciona la capital correcta! Si aciertas ganas 10 puntos y 4 segundos y si fallas te resta 3s' /> */}
                    <div className='region-select'>
                    <h6>¿Con qué continente te atreves?</h6>
                    <SelectRegion  action={this.props.fiterContinent} /></div>
                    <Button style='startGame-button' action={this.getCountry} />
                    {/* <Exit style='back-menu' text='Exit Game' /> */}
                    <img className='backgroundCity'  src={backgroundCity}/>
                </div>),

            playingGame: () => (<div className='playingGame'>
                <Info style='counterGame-button' text={this.state.seconds} />
                <Info style='incorrecto' text={this.state.incorrecto} />
                <Info style='country' text={this.state.countries.length > 0 && this.state.countries[0].name} />
                <div className='flex-butons-capitals'>
                    {this.state.fourCapitals.map((capital, index) => {
                        return <Button style='choose-capital' action={this.chooseCapital} key={index} text={capital}></Button>
                    })}
                </div>
                <Info style='score' text={'SCORE : ' + this.state.points} />
                {/* <Exit style='back-menu' text='X' /> */}
                <img className='backgroundCity'  src={backgroundCity}/>
            </div>),

            gameOver: () => (<div className='playingGame'>
                <Info style='gameover' text='GAME OVER' />
                <Info style='score' text={'SCORE : ' + this.state.points} />
                {/* <Links style='shered-link' /> */}
                <Button style='play-again' action={this.tryAgain} text='Play Again' />
                {/* <Exit style='back-menu' text='Exit Game' /> */}
                <img className='backgroundCity'  src={backgroundCity}/>
            </div>)
        }

        return (
            <Fragment>
                <InstructionGames instructionText="City Game pone a prueba tus conocimientos de Geografia, relaciona el País con su capital, Si aciertas ganas 10 puntos y 4 segundos y si fallas restas 3s." />
                <CloseButton />
                    <div className='container-game'>
                    {gameStatus[this.state.gameStatus]()}</div>
            </Fragment>
        )
    }
}
