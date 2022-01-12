
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from './Pages/Shared/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Watches from './Pages/Watches/Watches';
import Header from './Pages/Home/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/watches'>
          <Watches></Watches>
        </Route>
        <Route path='/'>
          <Home></Home>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
