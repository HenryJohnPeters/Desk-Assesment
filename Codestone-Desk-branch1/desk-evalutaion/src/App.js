import React from "react";

import "./App.css";
import "./bootstrap.min.css";

<<<<<<< HEAD
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import RegisterPage from "./Components/Pages/RegisterPage";

import ConfirmRegisterPage from "./Components/Pages/ConfirmRegisterPage";

import ResetPassword from "./Components/Pages/ResetPasswordPage";
import Home from "./Components/Pages/HomePage";
import UserQuestions from "./Components/Pages/UserQuestionsPage";
import ConfirmEmail from "./Components/Pages/ConfirmEmail";
import ConfirmPassword from "./Components/Pages/ConfirmPasswordPage";
=======
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import ResetPassword from "./Components/ResetPassword";
import LoginPage from "./Components/LoginPage";
import UserQuestions from "./Components/UserQuestions";
import Register from "./Components/Register";
import History from "./Components/History";

import AdminCenter from "./AdminComponents/AdminCenter";
import AdminQuestionEditor from "./AdminComponents/AdminQuestionEditor";

import AdminViewUsersSeverityHigh from "./AdminComponents/AdminViewUsersSeverityHigh";
import AdminViewUsersSeverityMedium from "./AdminComponents/AdminViewUsersSeverityMedium";
import AdminViewUsersSeverityCompleted from "./AdminComponents/AdminViewUsersSeverityCompleted";
import AdminViewUsers from "./AdminComponents/AdminViewUsers";
>>>>>>> 18183b340cb0f9aa27d295839e20a891ab449ff8

import ProfilePage from "./Components/Pages/ProfilePage";

<<<<<<< HEAD
import DisplayWorkStationMangmentPage from "./Components/Pages/DisplayWorkStationMangmentPage.js";
=======
import { Component } from "react";
import logo from "./logo.svg";
>>>>>>> 18183b340cb0f9aa27d295839e20a891ab449ff8

import History from "./Components/History";

import AdminQuestionEditor from "./AdminComponents/AdminQuestionEditor";

import AdminViewUsersSeverityHigh from "./AdminComponents/AdminViewUsersSeverityHigh";
import AdminViewUsersSeverityMedium from "./AdminComponents/AdminViewUsersSeverityMedium";
import AdminViewUsersSeverityCompleted from "./AdminComponents/AdminViewUsersSeverityCompleted";
import AdminViewUsers from "./AdminComponents/AdminViewUsers";

import AuthRoute from "./Routing/AuthRoute";
//import ResetAuthRoute from "./Routing/AuthRoute";

function App() {
  return (
    <div>
      <Routing></Routing>
    </div>
  );
}

<<<<<<< HEAD
const registerToken = window.localStorage.getItem("registerToken");
const RegisterAuthRoute = ({ component: Component }) => (
  <Route
    render={props =>
      registerToken && registerToken !== undefined ? (
        <Component />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const resetToken = window.localStorage.getItem("resetToken");
const ResetAuthRoute = ({ component: Component }) => (
  <Route
    render={props =>
      resetToken && resetToken !== undefined ? (
        <Component />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

=======
>>>>>>> 18183b340cb0f9aa27d295839e20a891ab449ff8
function Routing() {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/reset" component={ResetPassword} />
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/Register" component={RegisterPage} />
        <Route exact path="/confirm-email" component={ConfirmEmail} />
        <RegisterAuthRoute
          exact
          path="/confirm-register"
          component={ConfirmRegisterPage}
        />
        <ResetAuthRoute
          exact
          path="/confirm-Password"
          component={ConfirmPassword}
        />
        <AuthRoute
          exact
          path="/profile-display-work-stations"
          component={DisplayWorkStationMangmentPage}
        />

        <AuthRoute exact path="/profile" component={ProfilePage} />
        <AuthRoute exact path="/home" component={Home} />
        <AuthRoute exact path="/user-questions" component={UserQuestions} />
        <AuthRoute exact path="/user-history" component={History} />

        <AuthRoute
          exact
          path="/admin-question-editor"
          component={AdminQuestionEditor}
        />
        <AuthRoute exact path="/admin-view-users" component={AdminViewUsers} />
        <AuthRoute
          exact
          path="/admin-view-users-severity-high"
          component={AdminViewUsersSeverityHigh}
        />
        <AuthRoute
          exact
          path="/admin-view-users-severity-medium"
          component={AdminViewUsersSeverityMedium}
        />
        <AuthRoute
          exact
          path="/admin-view-users-severity-completed"
          component={AdminViewUsersSeverityCompleted}
        />
        <AuthRoute exact path="/admin-view-users" component={AdminViewUsers} />
      </Switch>
=======
        <Route exact path="/home" exact component={Home} />
        <Route exact path="/reset" exact component={ResetPassword} />
        <Route exact path="/login" exact component={LoginPage} />
        <Route exact path="/user-questions" exact component={UserQuestions} />
        <Route exact path="/Register" exact component={Register} />
        <Route exact path="/user-history" exact component={History} />
        <Route exact path="/admin-center" exact component={AdminCenter} />
        <Route
          exact
          path="/admin-question-editor"
          exact
          component={AdminQuestionEditor}
        />
        <Route
          exact
          path="/admin-view-users"
          exact
          component={AdminViewUsers}
        />
        <Route
          exact
          path="/admin-view-users-severity-high"
          exact
          component={AdminViewUsersSeverityHigh}
        />
        <Route
          exact
          path="/admin-view-users-severity-medium"
          exact
          component={AdminViewUsersSeverityMedium}
        />
        <Route
          exact
          path="/admin-view-users-severity-completed"
          exact
          component={AdminViewUsersSeverityCompleted}
        />{" "}
        <Route
          exact
          path="/admin-view-users"
          exact
          component={AdminViewUsers}
        />
      </Switch>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/login">login page</Link>
        </li>
      </ul>{" "}
>>>>>>> 18183b340cb0f9aa27d295839e20a891ab449ff8
    </BrowserRouter>
  );
}

<<<<<<< HEAD
export default App;
=======
export default Login;
>>>>>>> 18183b340cb0f9aa27d295839e20a891ab449ff8
