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
import Login from './authentication/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './privateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute exact path="/services/:serviceKey">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/blood">
              <Blood></Blood>
            </PrivateRoute>
            <PrivateRoute path="/shop">
              <Shop></Shop>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
