import Test2 from "./Test2";
const Test1 =(props)=>{
    const a1=["udayini","sreeja","srilekha"];
   
    
    return (
      <div>
        {props.Name}
        <h3>
            <Test2 A={a1}></Test2>
        </h3>
      </div>
    );
}
export default Test1;