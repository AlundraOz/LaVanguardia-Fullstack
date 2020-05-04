import React, { createFactory } from 'react';
import Card from './Card';
import './Table.css';

class Table extends React.Component {
    render() {
        return(
            <div className="table">
                {
                    this.props.deck.map((card, index)=>{
                    //watch if card is on selected couple then is being compared.
                    const itsBeingCompared = this.props.selectedCouple.indexOf(card) > -1;
                    return <Card 
                    key={index}
                    icon={card.icon}
                    itsBeingCompared={itsBeingCompared}
                    //it selects and save the card so it passes to memorygame and saves it in state.
                    selectCard={() => this.props.selectCard(card)}
                    wasGuessed={card.wasGuessed}
                    />
                    })
                }
            </div>
        )
    }
}

export default Table