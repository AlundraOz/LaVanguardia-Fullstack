import React, { useState, useEffect } from 'react';

const SignUp = () => {
  const [todo, updateTodo] = useState([])
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [posted, setPosted] = useState(false)
  const postFormValue = e => {
    e.preventDefault()
    fetch('http://localhost:5000/users_profiles', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({name, email, password})
    }).then(res => {
      if(res.status === 200 ){ setPosted(!posted)
    }else{
        console.log('no hace naa')
    }
    })
    setName(name = "")
    setEmail(email = "")
    setPassword(password = "")
  }
  useEffect(() => {
    fetch('http://localhost:5000/users_profiles')
    .then(res => res.json())
    .then(data => updateTodo([...data]))
  }, [posted])
  return (
    <div >
      <h1>THINGS TO DO</h1>
      <p>
        This will be my place to take notes about my things To Do in the future.
    </p>
    <h3>Task</h3>
    <form onSubmit={postFormValue}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        name="name"
        placeholder="Name..."
      />
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
    <h3>List of tasks</h3>
      {todo.length > 0 &&
        todo.map(({name, email, password}) => (
          <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{password}</p>
            <hr />
          </div>
        ))
      }
    </div>
  );
}
export default SignUp;
