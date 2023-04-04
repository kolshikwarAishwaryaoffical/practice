import { Link } from "react-router-dom";

const Page2=()=>{
    return (
     <h2>
        <h2>Page2</h2>
        <ul>
            <li><Link to="/page2/p1"><h2>Page21</h2></Link></li>
            <li> <Link to="/page2/p2"><h2>Page22</h2></Link></li>
            <li><Link to="/page2/p3"><h2>Page23</h2></Link></li>
        </ul>
       
     </h2>
    );
}
export default Page2;