import { useState } from "react";

const Togglecondition =()=>{
const [before3,setafter3]=useState(false);
const f3=()=>{
    return(
         setafter3(true)
    );
}
// const list1=["Aravind","Madhavi","Nayan","Aishwarya"];
//     const list2=list1.map((x)=>{
//         return <li>{x}</li>
//     })
    return (
        <div>
            <h2>Hii</h2>
           {before3&&<h2> hi there</h2>}
        <button onClick={f3}>Toggle press</button>
        </div>
    );
}
export default Togglecondition;