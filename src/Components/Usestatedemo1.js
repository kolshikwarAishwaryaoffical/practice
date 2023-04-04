import { useState } from "react";

function Usestatedemo1(){
    const [before , setafter]=useState('ammu');
    const f1=()=>{
        return( setafter('Aishwarya')
        );
         
    }
    return (
      <div>
        <h1>{before}</h1>
         <button onClick={f1}>clickme!</button>
       </div>
    );

}
export default Usestatedemo1