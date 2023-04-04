
import './App.css';
import Test1 from './Components/Test1';
import Usestatedemo1 from './Components/Usestatedemo1';
import Countstate from './Components/Countstate';
import Alertdemo from './Components/Alertdemo';
import RenderingList from './Components/RenderingList';
import Togglecondition from './Components/Togglecondition';
import UseeffectDemo from './Components/UseeffectDemo';
import Incdecdemo from './Components/Incdecdemo';
import Form2 from './Components/Form2';
import Page1 from './Components/Routing/Page1';
import Page2 from './Components/Routing/Page2';
import { Route, Switch } from 'react-router-dom';
import LinkPage from './Components/Routing/LinkPage';
import Page2details from './Components/Routing/Page2details';
import D1 from './Components/DemoTest/D1';
function App() {
  const name="Aishwarya";
  return (
    <div>
      <Countstate></Countstate>
      <h2>Routing</h2>
     <LinkPage></LinkPage>
     <Switch>
      
     <Route path='/page1'><Page1></Page1></Route>
<Route path='/page2' exact><Page2></Page2></Route>
<Route path='/page2/:page11'><Page2details></Page2details></Route>    
     </Switch>
     
       <h2>Demo</h2>
       <D1></D1>
      <Togglecondition></Togglecondition>
      <h2>ListDemo</h2>
       <RenderingList></RenderingList>
     <Test1  Name={name}></Test1>
     <Usestatedemo1></Usestatedemo1>
    
     <h2>AlertDemo</h2>
     <Alertdemo></Alertdemo>
     <UseeffectDemo></UseeffectDemo>
     
    </div>
  );
}

export default App;
