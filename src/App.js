import "./App.css";
import Layout from "./main-layout/Layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./pages/login/Login";

import Registration from "./pages/registration/Registration.jsx";
import Dashborad from "./pages/dashboarad/Dashborad";


import NotFound from "./pages/NotFound";
import EmailSingup from "./pages/signup-email/EmailSignup";
import LoginEmail from "./pages/login-email/LoginEmail";
import Todo from "./pages/Todo";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <>
            <Redirect to="login" />
          </>
        )
      }
    />
  );
};

function App() {


  return (
    <div className="App">
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/dashboard" />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/registration" exact>
              <Registration />
            </Route>
            <Route path="/email-signup" exact component={EmailSingup} />
            <Route path="/email-login" component={LoginEmail} />
            <PrivateRoutes path="/dashboard" exact component={Dashborad} />
            <PrivateRoutes path="/dashboard/todo" component={Todo} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
