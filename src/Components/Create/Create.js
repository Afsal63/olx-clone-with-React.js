import React, { Fragment, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import {useHistory} from 'react-router-dom'
import { FirebaseCotext, AuthCotext } from "../../store/firebaseContext";
import { useContext } from "react/cjs/react.development";

const Create = () => {
  const history =useHistory()
  const { firebase } = useContext(FirebaseCotext);
  const { user } = useContext(AuthCotext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState();
  const date=new Date()
  const handleSubmit = () => {
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref })=>{
      ref.getDomnloadURL().then((url)=>{
        console.log(url);
        firebase.firstore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createAt:date.toDateString()
        })
        history.push('/')
      })
    });
  };
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            id="fname"
            onChange={(e) => setName(e.target.value)}
            name="Name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            value={category}
            id="kname"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            value={price}
            id="pname"
            onChange={(e) => setPrice(e.target.value)}
            name="Price"
          />
          <br />

          <br />
          {image &&  <img alt="posts" width="200px"  src={image ? URL.createObjectURL(image) : ''}></img>}
          
          <br />
          <input type="file" onChange={(e=>{
            setImage(e.target.files[0]);
          })} />
          
            <br />
           
        
          <br />

          <button onClick={handleSubmit} className="uploadBtn">
            upload and Submit
          </button>
          
        </div>
      </card>
 
    </Fragment>
  );
};

export default Create;
