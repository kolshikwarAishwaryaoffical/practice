import { useReducer } from "react";
const Incdecdemo =()=>{
    const reducerfun=(before,action)=>{
        console.log(before)
        switch(action){
            case'increment':
                return before+1;
            case 'decrement':
                return before-1;
            default:
               return  0;
        } 
    }
const [count,dispatchfun]=useReducer(reducerfun,0);
const fun1=()=>{
    return (
      dispatchfun('increment')
    );
}
const fun2=()=>{
    return (
      dispatchfun('decrement')
    );
}
const fun3=()=>{
    return (
      dispatchfun('reset')
    );
}
return (
        <div>
        <h2>{count}</h2>
        <button  onClick={fun1}>increment</button>
        <button onClick={fun2}>decrement</button>
        <button onClick={fun3}>reset</button>
        </div>
    );
}
export default Incdecdemo;