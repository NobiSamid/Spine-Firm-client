import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/header/Navigation';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import ServiceDetails from './components/servicedetails/ServiceDetails';
import Shop from './components/shop/Shop';
import About from './components/about/About';
import Notfound from './components/notfound/Notfound';
import Services from './components/services/Services';
import Blood from './components/blood/Blood';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/services/:serviceKey">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/blood">
            <Blood></Blood>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
