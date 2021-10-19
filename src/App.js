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
      {/*********  This AuthProvider below is for making useFirebase global as useAuth ******/}
      <AuthProvider>
        <Router>
          {/* Putting Navigation out side of the switch to provide every component . But I want that notFound page doesn't have it and I dont know how to do it  */}
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
            {/* Wrapping up components with PrivateRoute. If user tried to access without logging in he or she cann't ha ha ha */}
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
          {/* Putting Footer out side of the switch to provide every component . But I want that notFound page doesn't have it and I dont know how to do it  */}
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
