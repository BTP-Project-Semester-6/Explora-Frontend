import React, { useState, useEffect } from "react";
import "./login.scss";
import LOGIN from "../../img/log.svg";
import SIGNUP from "../../img/register.svg";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../actions/login";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

toast.configure();

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const Login = () => {
  const [state, setstate] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.loginReducer);

  function loginHandler(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    if (username != "" && password != "") {
      dispatch(loginAction({ username: username, password: password })).then(
        (res) => {
          if (data.state != null) {
            localStorage.setItem("token", data.state);
            toast.success("LOGGED IN SUCCESSFUL");
            sleep(3000).then(() => {
              navigate("/home");
              window.location.reload(false);
            });
          } else toast.error("LOGIN FAILED");
        }
      );
    } else {
      toast.warn("MISSING COLOUMN");
    }
  }

  // useEffect(() => {
  //   const decoded = jwt_decode(localStorage.getItem("token"));
  //   if (decoded) console.log(decoded);
  // }, []);

  const SSignin = () => {
    return (
      <form onSubmit={loginHandler} class="sign-in-form formlogin">
        <h2 class="titlelogin">
          {" "}
          <b>Sign in</b>
        </h2>
        <div class="input-field">
          <i class="fas fa-user"></i>
          <input type="text" name="usernameLogin" placeholder="Username" />
        </div>
        <div class="input-field">
          <i class="fas fa-lock"></i>
          <input
            type="password"
            name="passwordLogin"
            placeholder="Password"
            // onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <input class="btnlogin solid" type="submit" value="Login" />
        <p class="social-text">Or Sign in with social platforms</p>
        <div class="social-media">
          <a href="#" class="social-icon">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fab fa-google"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </form>
    );
  };

  const SSignup = () => {
    return (
      <form action="#" class="sign-up-form formlogin">
        <h2 class="titlelogin">
          {" "}
          <b>Sign up</b>
        </h2>
        <div class="input-field">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Name" />
        </div>
        <div class="input-field">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div class="input-field">
          <i class="fas fa-envelope"></i>
          <input type="email" placeholder="Email" />
        </div>
        <div class="input-field">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <div class="input-field">
          <i class="fas fa-mars"></i>
          <input type="text" placeholder="Age" />
        </div>
        <div class="input-field">
          <i class="fas fa-mars"></i>
          <input type="text" placeholder="Gender (male/female)" />
        </div>

        <input type="submit" class="btnlogin" value="Register" />
        <p class="social-text">Or Sign up with social platforms</p>
        <div class="social-media">
          <a href="#" class="social-icon">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fab fa-google"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </form>
    );
  };

  const Contentlogin = () => {
    return (
      <div class="panels-container">
        <div class="panellogin left-panellogin">
          <div class="contentlogin">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              class="btnlogin transparent"
              id="sign-up-btn"
              onClick={(e) => setstate("register")}
            >
              Sign Up
            </button>
          </div>
          <img src={SIGNUP} class="image" alt="" />
        </div>
      </div>
    );
  };

  const Contentsignup = () => {
    return (
      <div class="panels-container">
        <div class="panellogin left-panellogin">
          <div class="contentlogin">
            <h3>Already Have an Account ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              class="btnlogin transparent"
              id="sign-up-btn"
              onClick={(e) => setstate("login")}
            >
              Sign In
            </button>
          </div>
          <img src={LOGIN} class="image" alt="" />
        </div>
      </div>
    );
  };

  return (
    <div>
      <b>
        <div class="containerlogin">
          <div class="forms-container">
            <div class="signin-signup">
              {state == "login" ? <SSignin /> : <SSignup />}
            </div>
          </div>
          {state == "login" ? <Contentlogin /> : <Contentsignup />}
        </div>
      </b>
    </div>
  );
};

export default Login;
