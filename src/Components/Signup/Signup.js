import React, { useState,useContext } from 'react';


import Logo from '../../olx-logo.png';
import { FirebaseCotext } from '../../store/firebaseContext';
import { useHistory } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const history =useHistory()
  const [username,setUsername] =useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const[password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseCotext)
  const handleSubmit = (e)=>{
    e.preventDefault()
  
    firebase.auth().createUserWithEmailAndPassword(email,password).then((results)=>{
      results.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:results.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          history.push('/login');
        })
      })
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={((e)=>setUsername(e.target.value))}
            id="kname"
            name="name"
            
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={((e)=> setEmail(e.target.value))}
            name="email"
         
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            id="lname"
            onChange={((e)=>setPhone(e.target.value))}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="pname"
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
