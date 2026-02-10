import Nav from './navbar.jsx';
import Form from './form.jsx';
import './App.css'
import { useState } from 'react';
import Box from './boxe.jsx';
import Boxcomp from './boxcomp.jsx';









function App() {
   
   const [box , setbox] = useState(Box);
  function toggle(id){
   setbox(prevbox =>{
      const newsquare = [];
      for(let i=0 ; i< prevbox.length ; i++){
         if (prevbox[i].id === id) {
            newsquare.push({
               ...prevbox[i],
               on: !prevbox[i].on
            })}
         else {
            newsquare.push(prevbox[i]);
         }
         
         }
 
      return newsquare;
      }
       
   )
  
  }

const square = box.map((item) =>(
  
    <Boxcomp key={item.id} on={item.on} id={item.id} toggle={toggle} />)
   );


 const[text , setText] = useState("yes");
 function clickMe(){
    setText((prev) => {
    return    prev === "yes" ? "no" : "yes";
       

    })
 }


 return(
 <>
 
 
 <Nav/>

 <Form/>
 <br /><br />
 <button onClick={clickMe} className='yes-no'>{text}</button>
 <br /><br />
 <div className="container">
 {square}
 </div>
 </>
 );
}

export default App
