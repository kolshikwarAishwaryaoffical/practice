import { useEffect ,useState} from "react";

const UseeffectDemo =()=>{
    const [before , setafter]=useState(0);
    useEffect(
        ()=>{
            console.log("check validity!");
        }
    );
    const f1=()=>{
        return( setafter(before+1)
        );
         
    }

    return (
       <div>
         <h1>{before}</h1>
         <button onClick={f1}>clickme!</button>
       </div>
    );
}
export default UseeffectDemo;