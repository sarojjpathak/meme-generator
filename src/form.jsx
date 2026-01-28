import { useState } from "react";
import memeimg from "./memeimg.json"
function Form(){
    const[ display , setImg] = useState("");

    function imgHandler(){
       
      const randomImage = memeimg.memes[Math.floor(Math.random()*memeimg.memes.length) ].url ;
      setImg(randomImage);
    }
   
    return(
        <>
       <div className="form-container">
        <div className="inner">
        <input type="text" placeholder="Top Text"/>
        <input type="text" placeholder="Bottom Text" />
        </div>
        <button className="file-input" onClick={imgHandler} >Get a new meme image</button>
        <img src={display} className="img--onscreen" alt="image" />
        </div>
        
        </>
       
    );
}
export default Form;