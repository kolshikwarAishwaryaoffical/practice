import { useState } from "react";

const Form1 = (props)=>{
    const [b1,s1]=useState('');
    const [b2,s2]=useState('');
    const [b3,s3]=useState('');

    const fun1=(event)=>{
        event.preventDefault();
        const store =
    {
    Name:b1,
    comp:b2,
    loc:b3,
    };
//console.log(props.onSubmit(store));
console.log(store);
props.onSubmit(b1,b2,b3);
        s1('');
        s2('');
        s3('');
    }
    const change1=(event)=>{
        s1(event.target.value);
    }
    const change2=(event)=>{
       s2( event.target.value);
    }
    const change3=(event)=>{
        s3(event.target.value);
    }
    return (
        <form onSubmit={fun1}>
            <div>
            <label>Name</label>
            <input type="text" value={b1} onChange={change1}></input>
            </div>
            <div>
            <label>Company</label>
            <input type="text" value={b2} onChange={change2}></input>
                </div>
                <div>
                <label>location</label>
            <input type="text" value={b3} onChange={change3}></input>
                </div>
            <button>submit</button>
  
        </form>
    );
}
export default Form1;