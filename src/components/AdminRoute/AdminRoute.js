import React from "react";

import { Route, Redirect } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/", state: { from: location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default AdminRoute;
