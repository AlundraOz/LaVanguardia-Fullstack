import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './CloseButtonNonogram.scss';
class CloseButtonNonogram extends React.Component {
  render(){
       //Button Icon
       const closeButton = < FontAwesomeIcon icon = {
           faTimesCircle
       }
       />
      return (
        < div  >
            {/* CLOSE BUTTON */}
            <Link to = "/games-section" className="bigCloseButton"><span style={{color: "rgb(245, 123, 75)", fontSize: "2em"}}>{closeButton}</span></Link>
            <Link to = "carousel" className = "iframeCloseButton" ><span style={{color: "#A2A2A2", fontSize: "1.5em"}}>{closeButton}</span></Link>
        </div>
    )}
}
export default CloseButtonNonogram;