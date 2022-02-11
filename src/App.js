import React, {useEffect,useContext}from 'react';
import {BrowserRouter as  Router,Route} from 'react-router-dom'
import './App.css';

import {AuthCotext, FirebaseCotext} from './store/firebaseContext'
import Post from './store/postContext';
/**
 * ?  =====Import Components=====
 * 
 */
 import Home from './Pages/Home';
 import Signup from './Pages/Signup'
 import Login from './Pages/Login'
 import Create from './Pages/Create'
import View from './Pages/ViewPost';


// import View from './Components/View/View';
function App() {
  const {user,setUser} =useContext(AuthCotext)
  const {firebase}=useContext(FirebaseCotext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
// console.log(user);
  })
  return (
    <div>
      <Post>
      <Router >
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route  path='/signup'>
        <Signup/>
        </Route>
        <Route  path='/login'>
        <Login/>
        </Route>
        <Route  path='/create'>
        <Create/>
        </Route>
        <Route  path='/view'>
       <View/>
        </Route>
      </Router>
      </Post>
    </div>
  );
}

export default App;
