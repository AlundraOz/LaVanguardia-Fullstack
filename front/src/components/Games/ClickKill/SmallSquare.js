import React from 'react';
import "./SmallSquare.css";
import './BigBoard.css';



const SmallSquare = props =>(
    // (Ternary Function chosen as inside if else functions and external ones return conflicts because of the Zindex definition)
    // GIVING DIFFERENT CSS PROPERTIES TO THE IMAGE >> ONLY THE ClassName changes <<, IF CLICKED (2nd), IF UNCLICKED (1st), WHEN GAME IS FINISHED (3rd)
    
    //as long as there is a random square, that means that the game has not stoped
    props.randomSquare && !props.logoClicked    
    ?            
        <img 
        className="logoDisplayed"   
        onClick={props.itemClicked} 
        className="teamLogo" 
        src={props.logo} 
        alt='team flag'
        />
        
        : props.randomSquare && props.logoClicked
        ? 
        <div class="flip-small-box" style={{width:'90px', height:'90px' }} onClick={props.itemClicked}>
            <div class="flip-small-box-inner">
                <div class="flip-small-box-front">
                    <img 
                        className="teamLogo" 
                        src={props.logo} 
                        alt='team flag'
                        />                          
                </div>
                <div class="flip-small-box-back">
                    <img 
                        className="teamLogo" 
                        src={props.logo} 
                        alt='team flag'
                        />                          
                </div>
            </div>
        </div>
        
       
        : null
)

 export default SmallSquare;