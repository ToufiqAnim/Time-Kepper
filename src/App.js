import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Watches from './Pages/Watches/Watches';
import Login from './Pages/Contact/Login/Login';
import Register from './Pages/Contact/Register/Register';
import WatchDetails from './Pages/WatchDetails/WatchDetails';
import Collections from './Collections/Collections';
import Pay from './Pages/Stripe/Pay';
import Success from './Pages/Stripe/Success';
import Cart from './Pages/Cart/Cart';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/collections">
            <Collections />
          </Route>
          <Route path="/watchDetails/:id">
            <WatchDetails></WatchDetails>
          </Route>
          <Route path="/success">
            <Success></Success>
          </Route>
          <Route path="/pay">
            <Pay></Pay>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
