import React,{useContext} from 'react';
import {useHistory} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthCotext, FirebaseCotext } from '../../store/firebaseContext';
function Header() {
  const history =useHistory()
  const {user}=useContext(AuthCotext)
  const{firebase} =useContext(FirebaseCotext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? `Welcome ${user.displayName} `: <a href='/login'>Login</a>}</span>
        
        </div>
        <hr />
         { user && <span onClick={()=>{
           firebase.auth().signOut()
           history.push('/login')
         }}>Lgout</span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <a href="/create"><span>SELL</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
