import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import PlaceOrder from "./components/OrderPlace/PlaceOrder";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";

import PageNotFound from "./components/PageNotFound/PageNotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import AddPackage from "./components/AddPackage/AddPackage";
import MyOrder from "./components/Order/MyOrder";
import Dashboard from "./components/Dashboard/Dashboard";
import ManageAllOrder from "./components/Order/ManageAllOrder";

function App() {
  //const { user } = useFirebase();

  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/Service">
              <Services></Services>
            </Route>

            <Route path="/OrderReview">
              <OrderReview></OrderReview>
            </Route>

            <PrivateRoute path="/ServiceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <PrivateRoute path="/Dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>          

            <PrivateRoute path="/PlaceOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

           
          

         

            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/registration">
              <Registration></Registration>
            </Route>
            <Route exact path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
