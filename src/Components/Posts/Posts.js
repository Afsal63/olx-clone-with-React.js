import React, { useState, useEffect, useContext } from "react";

import Heart from "../../assets/Heart";
import { FirebaseCotext } from "../../store/firebaseContext";
import { PostContext } from "../../store/postContext";
import "./Post.css";
import {useHistory} from 'react-router-dom'

function Posts() {
  const { firebase } = useContext(FirebaseCotext);
  const [produts, setProducts] = useState([]);
  const {setPostDetails}=useContext(PostContext)
  const histroy =useHistory()
  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const allpost = snapshot.docs.map((product) => {
          console.log("djkdjj");
          return {
            ...product.data(),
            id: product.id,
          };
        });
        console.log(allpost, "opopp");
        setProducts(allpost);
      });
  }, []);
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          
          {produts.map((product) => {
            
            return (
              <div className="card"
              onClick={()=>{
                setPostDetails(product)
                histroy.push('/view')
              }}>
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name"> {product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
