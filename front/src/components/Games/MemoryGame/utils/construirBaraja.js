import shuffle from 'lodash.shuffle';
//import FontAwesomeClasses from './fontAwesomeClasses';
import imageTable from './images/imageTable';

const createCards=(numbCards, imageTable, cards)=>{
    while (cards.length < numbCards) {
        
        const arrayImages = shuffle(imageTable)
        let card = {}
        //console.log(arrayImages)
        arrayImages.map((image, index)=>{
            if(index < numbCards/2){
                 card = {
                    icon : image,
                    //wasguessed is going to turn true when we find the couple of this card
                    wasGuessed: false
                }
                cards.push(card);
                //we clone the card
                cards.push({...card});
            }
            console.log(cards)
            return (cards)
        })
    }
}
//Quantity of cards that is going to have our deck

 
export default function construirBaraja(){
    let NUMBER_OF_CARDS = 0;
    let cards = []
    if (window.innerWidth<350){
         NUMBER_OF_CARDS = 12;        
         createCards(NUMBER_OF_CARDS, imageTable, cards)
    }else{
         NUMBER_OF_CARDS = 20;
         createCards(NUMBER_OF_CARDS, imageTable, cards)
    }

return shuffle(cards);
} 