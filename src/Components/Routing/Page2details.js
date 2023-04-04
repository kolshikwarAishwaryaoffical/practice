import {  useParams } from "react-router-dom";
const Page2details=()=>{
    const params=useParams();
    console.log(params.page11);
    return (
     <div>
       
        <h3>hi page2</h3>
        <h2>{params.page11}</h2>
     </div>
    );
}
export default Page2details;