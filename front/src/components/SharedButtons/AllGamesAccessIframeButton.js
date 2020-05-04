import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import '../SharedButtons/CloseButton.scss';

class AllGamesAccessIframeButton extends React.Component {
   
  render(){
       //Button Icon
       const closeButton = < FontAwesomeIcon icon = {
           faTimesCircle
       }
       />

      return (
        <div>
            <Link to = "carousel" className = "moreGamesButtonContainer" ><span style={{color: "#00ECFD", fontSize: "2em"}}>{closeButton}</span></Link>
        </div>
    )}
}

export default AllGamesAccessIframeButton;
