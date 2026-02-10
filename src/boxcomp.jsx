 import {useState} from 'react';
 function Boxcomp(props){
 
   const [on , setOn] = useState(props.on);
   function clickHandler(){
    setOn((prev)=> !prev);
   }

    return(
         <div 
         onClick={clickHandler} 
   style={{backgroundColor: on ? 'white':'black',
           color: on ? 'black':'white'} }
   className="box"
    key = {props.id}>
      {on ? "on":"off"}
   </div>
    )
}
export default Boxcomp;