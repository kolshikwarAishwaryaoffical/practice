import { useState } from "react";

const Countstate=()=>{
    const [before1,setafter1]=useState(0);
    const f2=()=>{
        return (
            setafter1(before1+1)
        );
    }
    return (
       <div>
        <h3>{before1}</h3>
        <button onClick={f2}>count me!!</button>
       </div>
    );
}
export default Countstate;