 import React from "react";
import Card from "./card";
 function Button(props){
     return(
         <button onClick={props.action}>Add</button>
     )
 }

 export default Button