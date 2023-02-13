import React, { useState,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';

function Signup() {
  const history = useHistory()
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext)
  const [error, setError] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()

    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id : result.user.uid,
          username : username,
          phone : phone
        }).then(()=>{
          history.push("/login")
        }).catch((error)=>{
          setError(error.message)
        })
      })
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <p style={{color:"red"}}>{error}</p>
        <img width="300px" height="200px" src={Logo} alt="img"/>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <br />
            <input
              className="input"
              type="text"
              value={username}
              onChange = {(e)=>{setUsername(e.target.value)}}
              name="name"
            />
            <br />

            <label htmlFor="email">Email</label>
            <br />
            <input
              className="input"
              type="email"
              value={email}
              onChange ={(e)=>{setEmail(e.target.value)}}
              name="email"
            />
            <br />

            <label htmlFor="phone">Phone</label>
            <br />
            <input
              className="input"
              type="number"
              value={phone}
              onChange ={(e)=>{setPhone(e.target.value)}}
              name="phone"
            />
            <br />

            <label htmlFor="password">Password</label>
            <br />
            <input
              className="input"
              type="password"
              value={password}
              onChange = {(e)=>{setPassword(e.target.value)}}
              name="password"
            />
            <br />

            <br />
            <button>Signup</button>
          </form>

          <button onClick={()=>[history.push('/login')]}>Login</button>
        </div>
    </div>
  );
}

export default Signup;