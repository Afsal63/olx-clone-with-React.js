import React,{useEffect,useState,useContext} from 'react';
import { FirebaseCotext } from '../../store/firebaseContext';
import { PostContext } from '../../store/postContext';

import './View.css';
function View() {
  const [userDetails,setUserDetails]=useState()
  const {PostDetails}=useContext(PostContext)
  const {firebase}=useContext(FirebaseCotext)
  useEffect(()=>{
  const{userId}=  PostDetails
firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
  res.forEach(doc =>{
setUserDetails(doc.data)
  })
})
  })
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={PostDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{PostDetails.price} </p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
       { userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
