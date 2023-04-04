import { Link } from 'react-router-dom';
import Page2details from './Page2details';
const LinkPage=()=>{
    return (
     <div>
 <Link to="/page1">Page1</Link>
 <Link to="/page2">Page2</Link>
     </div>
    );
}
export default LinkPage;