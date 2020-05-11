import React, { useState, useEffect } from 'react';
import { MyContext } from '../../context/MyProvider';
import {Link} from 'react-router-dom';

var response = "";

const LogIn = () => {
  const { logIn } = React.useContext(MyContext);

  const [todo, updateTodo] = useState([])
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [posted, setPosted] = useState(false)

  const postFormValue = e => {

    e.preventDefault()
    //all i put in the form goes to this route
    fetch('http://localhost:5000/authenticate', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({email, password})
    }).then(res => res.json())
      .then(data => logIn(data))
    //   if(res.status === 200 ){ setPosted(!posted)
    //     // response = res.url
    //
    //     console.log(res)
    // }else{
    // }
  }

  // useEffect(() => {
  //   //SI EL FORMULARIO ESTA VACIO NO HAGAS NADA, SI EL FORMULARIO ESTA LLENO
  //   fetch(`${response}`)
  //   .then(res => res.json())
  //   .then(data => updateTodo([...data]))
  // }, [posted])
  return (
    <div >
      <h1>THINGS TO DO</h1>
      <Link to='games-section' >
          <button className='center-button'> MÁS JUEGOS </button>
      </Link>
      <p>
        This will be my place to take notes about my things To Do in the future.
    </p>
    <h3>Task</h3>
    <form onSubmit={postFormValue}>
      <br />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        name="email"
        placeholder="Email..."
      />
      <br />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        name="password"
        placeholder="Password..."
      />

      <br />
      <button type="submit">Sign in</button>
    </form>
    <br />
    <hr />
    </div>

  );
}
export default LogIn;
