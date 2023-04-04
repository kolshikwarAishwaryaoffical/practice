
import Form1 from "./Form1";
//parent
const Form2 = ()=>{
    const saveHandler= (enterdata)=>{
     const store1={
        ...enterdata,
     }
     console.log(store1);
    }
    return(
        <div>
            <Form1 onSubmit={saveHandler} >
            </Form1>

        </div> 
    );
}
export default Form2;