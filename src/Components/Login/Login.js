import React,{useState,useContext} from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import {FirebaseContext} from '../../store/Context'
import { useHistory } from 'react-router-dom'

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const [error, setError] = useState('')

  const handleLogin =(e)=> {
    e.preventDefault()
    
    firebase.auth().signInWithEmailAndPassword(email,password).then((result)=>{
      history.push('/')
    }).catch((error)=>{
      setError(error.message)
    })
  }
  
  return (
    <div>
      <div className="loginParentDiv">
        <p style={{color:"red"}}>{error}</p>
        <img width="300px" height="200px" src={Logo} alt="img"/>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange = {(e)=>{setEmail(e.target.value)}}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange = {(e)=>{setPassword(e.target.value)}}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <button onClick={()=>{history.push('/signup')}}>Signup</button>
      </div>
    </div>
  );
}

export default Login;