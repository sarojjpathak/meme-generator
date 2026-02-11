 import {useState} from 'react';
 function Boxcomp(props){
 
   


    return(
         <div 
         onMouseOver={()=>props.toggle(props.id)} 
   style={{backgroundColor: props.on ? 'white':'black',
           color: props.on ? 'black':'white'} }
   className="box"
    key = {props.id}>
      {props.on ? "on":"off"}
   </div>
    )
}
export default Boxcomp;