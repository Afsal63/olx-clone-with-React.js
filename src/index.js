import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseCotext }from './store/firebaseContext'
import Context from './store/firebaseContext'
import firebase from './firebase/config'
ReactDOM.render(
<FirebaseCotext.Provider value={{firebase}}>
<Context>
<App />
</Context>

</FirebaseCotext.Provider>

, document.getElementById('root')); 
