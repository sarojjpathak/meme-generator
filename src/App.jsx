import Nav from './navbar.jsx';
import Form from './form.jsx';
import './App.css'
import { useState } from 'react';

function App() {
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
 <button onClick={clickMe} className='yes-no'>{text}</button>

 </>
 );
}

export default App
