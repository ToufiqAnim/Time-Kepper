
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Watches from './Pages/Watches/Watches';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Contact/Login/Login';
import Register from './Pages/Contact/Register/Register';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
     
      
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/watches'>
          <Watches></Watches>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/register'>
          <Register></Register>
        </Route>
        <Route path='/'>
          <Home></Home>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
