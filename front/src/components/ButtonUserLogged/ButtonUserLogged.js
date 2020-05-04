import React from 'react';
const ButtonUserLogged =(props)=>{
    return(
        <div className="userButtons">
            {Object.entries(props.user).length === 0
            ?
            <button
                onClick={props.userHere}
                className="buttonLog">
                Log In
            </button>

            : <button
                onClick={props.quitUser}
                className="buttonLog">
                Log Out
            </button>
            }
        </div>
    )

}

export default ButtonUserLogged;
