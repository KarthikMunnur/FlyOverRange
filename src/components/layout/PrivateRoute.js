import React from "react";
import { Redirect, Route } from "react-router-dom";
import firebase from "firebase";

function PrivateRoute({ component: Component, ...rest }) {
  const userEmail = firebase.auth().currentUser.email;
  const admins = process.env.REACT_APP_ADMIN_USERS;

  const isSuperAdmin = admins.toLowerCase().split(",").indexOf(userEmail) != -1;

   return (
    <Route
      {...rest}
      render={(props) =>
        isSuperAdmin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
