
import './D1.css';
const D1 =()=>{
    const date_a=new Date(2023,1,24);
    const name="aishwarya";
    const amount=2353.23;
    return (
    
    <div  className='h1' >
        <div className='datebox'>
        <h1>{date_a.toLocaleString('en-us',{month:'long'})}</h1>
        <h1>{date_a.toLocaleString("en-us",{day:'2-digit'})}</h1>
        <h1>{date_a.getFullYear()}</h1>
        </div>
       <div className='h2'>{name}</div>
        <div className='h3'>{amount}</div>
    </div>
  
    );

}
export default D1;