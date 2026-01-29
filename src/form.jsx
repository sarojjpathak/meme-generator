import { useState } from "react";
import memeimg from "./memeimg.json"
import star from "./assets/gold.png"
import whitestar from "./assets/white.png"
function Form(){
    const[ display , setImg] = useState("https://i.ytimg.com/vi/cuilJhxiC_g/maxresdefault.jpg");
   const[rating , setRet] = useState(true)
    function imgHandler(){
       
      const randomImage = memeimg.memes[Math.floor(Math.random()*memeimg.memes.length) ].url ;
      setImg(randomImage);
    }
    const starurl = rating ? star : whitestar
    function ratingHandler(){
        setRet((prev) => !prev)
    }
   
    return(
        <>
       <div className="form-container">
        <div className="inner">
        <input type="text" placeholder="Top Text"/>
        <input type="text" placeholder="Bottom Text" />
        </div>
        <button className="file-input" onClick={imgHandler} >Get a new meme image</button>
        <div className="imcon">
              <img  src={starurl} alt="star-img" onClick={ratingHandler} className="imstar" />
        <img src={display} className="img--onscreen" alt="image" />
      
        </div>
        </div>
        
        </>
       
    );
}
export default Form;