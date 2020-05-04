import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import '../SharedButtons/CloseButton.scss';
class CloseButton extends React.Component {
  render(){
       //Button Icon
       const closeButton = < FontAwesomeIcon icon = {
           faTimesCircle
       }
       />
      return (
        < div  >
            {/* CLOSE BUTTON */}
            <Link to = "/games-section" className = "generalCloseButton" ><span style={{color: "#00ECFD", fontSize: "2em"}}>{closeButton}</span></Link>
            <Link to = "carousel" className = "iframeCloseButton" ><span style={{color: "#A2A2A2", fontSize: "1.5em"}}>{closeButton}</span></Link>
        </div>
    )}
}
export default CloseButton;
