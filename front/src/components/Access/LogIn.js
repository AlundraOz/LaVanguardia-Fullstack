import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './LogIn.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from '../../context/MyProvider';
import {Link} from 'react-router-dom';
import SaveScore from '../../sheredFunctions/SheredFunctions'

const sendIcon = <FontAwesomeIcon icon={faPaperPlane} size='2x' color='white'/>

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function LogIn() {
  const classes = useStyles();
  const { state, logIn } = React.useContext(MyContext);
  //state
  const [data, updateData] = useState({
    email: "",
    password: ""
  })

  //submit button
  const submitInfo = (event) => {
    event.preventDefault();

    //all i put in the form goes to this route
    fetch('http://localhost:5000/authenticate', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        email:data.email, 
        password:data.password
      })
    }).then(res => res.json())
      .then(data => logIn(data))
  }
  /* useEffect(()=>{
    
    if(data!== undefined && state.score !== ''){
      //SaveScore(state.score, data.user_id, state.nameGame)
      let score= state.score
      let user=data.user_id
      fetch(`http://localhost:5000/game-score/${state.nameGame}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ score , user })

    }).then(res => {
        if(res.status === 200 ){
            console.log('saved score')

        }else{
            console.log('no hace naa')
          }
        })
      
    }
  },[data]) */


  return (
    <div className="SignIn">
      <form className={classes.root} noValidate autoComplete="off" onSubmit={(event) => submitInfo(event)}>
        <div className="row">
          <div className="col-12">
            <TextField id="email" label="Email" type="email" name="email"
              value={data.email}
              onChange={(event) => updateData({ ...data, email: event.target.value })} />
          </div>
          <div className="col-12">
            <TextField id="password" label="Password" type="text" name="password"
              value={data.password}
              onChange={(event) => updateData({ ...data, password: event.target.value })} />
          </div>
          < div className = "col-12 aligItems" >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={sendIcon}
            >
              Log In
            </Button>
            <Link to='games-section' >
          <button className='center-button'> MÁS JUEGOS </button>
      </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
