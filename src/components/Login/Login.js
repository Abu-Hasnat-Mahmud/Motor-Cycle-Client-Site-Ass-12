import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { googleSignin, userLogin, user, setUser, setError, error, saveUser } =
    useAuth();

  const location = useLocation();
  const history = useHistory();

  const redirectUrl = location.state?.from || "/home";

  const handelGoogleSignin = () => {
    googleSignin().then((result) => {
      console.log(result);
      saveUser(result.user.email, result.user.displayName, "PUT");
      history.push(redirectUrl);
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    userLogin(data.Email, data.Password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        setUser(userCredential.user);
        setError("");
        history.push(redirectUrl);
        console.log(userCredential.user);
        // ...
      })
      .catch((err) => {
        alert(err.message);
        //const errorCode = err.code;
        const errorMessage = err.message;
        setError(errorMessage);
        setUser({});
        console.error(errorMessage);
      });
  };

  return (
    <div className="container">
      <div className="row row-cols-3 justify-content-center">
        <div className="mt-3">
          <h2 className="text-center ">Login</h2>
          <br></br>
          <h3 className="text-center text-danger">{error}</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                {...register("Email", { required: true })}
                className="form-control"
              />
              {errors.Email && (
                <span className="text-danger">Email is required</span>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                {...register("Password", { required: true })}
                className="form-control"
              />
              {errors.Password && (
                <span className="text-danger">Password is required</span>
              )}
            </div>

            <button type="submit" className="btn btn-success">
              Login
            </button>
            <Link className="text-decoration-none ms-5" to="/registration">
              Create new accout!!
            </Link>
          </form>

          <hr />
          <button className="btn btn-primary mb-5" onClick={handelGoogleSignin}>
            Google Signin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
