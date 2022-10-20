import { useState } from "react";

export const Message= ()=>{

    const [message, setMessage]= useState('Welcome Vistor');
return (
    
    <div>
         
         <h1> {message}</h1>
         <button onClick={()=> setMessage('Thank You For Subscribing')}> 
               Subscribe
         </button>


    </div>

);

}

