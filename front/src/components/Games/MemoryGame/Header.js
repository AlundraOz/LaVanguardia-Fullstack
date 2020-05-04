import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <header className="memory-header">
                <div className="title">
                    Memory de presidentes
                </div>

                <div>
                {this.props.gameFinished 
                    ? 
                        <div>
                        {/* {` Resultado: ${ Math.round(10 / this.props.tryes * 10) }/ 10 puntos !`} */}
                        <button className="winnerMemoryResult">{` Resultado: ${ Math.round(10 / this.props.tryes * 10) }/ 10 puntos !`} </button>
                        <button className="winner-reinit-button" onClick={this.props.resetGame}>
                            INTÉNTALO OTRA VEZ !
                        </button>
                        <button className="winner-reinit-button-iframe" onClick={this.props.resetGame}>{`${ Math.round(10 / this.props.tryes * 10) }/ 6 pts`} <br/>RESTART</button>
                        </div>
                        
                    : <div>
                        <p className="memoryResult">Intentos: {this.props.tryes}</p>
                        <p className="reinit-button" onClick={this.props.resetGame}>
                            Reiniciar
                        </p>
                    </div>
                }
                </div>
            </header>
        )
    }
}

export default Header