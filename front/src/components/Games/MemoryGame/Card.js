import React from 'react';
import './Card.css';
import ReactCardFlip from 'react-card-flip';

class Card extends React.Component {

    render() {
        return(
            <div className="item-card" onClick={this.props.selectCard}>
               <ReactCardFlip
                //flip the card if user is comparing or if the card couple was guessed.
                isFlipped={this.props.itsBeingCompared || this.props.wasGuessed}
               >
                    <div className="cover">
                    </div>
                    <div className="content">
                        <img src={this.props.icon}/>
                    </div>
                </ReactCardFlip>         
            </div>
        )
    }
}

export default Card