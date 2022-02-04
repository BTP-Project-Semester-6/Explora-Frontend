import React, { useState, useEffect } from "react";
import "./login.scss";
import SPINNER from "../../img/Spinner.gif";
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
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.loginReducer);

  function loginHandler(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    if (username != "" && password != "") {
      setLoading(true);
      dispatch(loginAction({ username: username, password: password }));
      sleep(3000).then(() => {
        window.location.reload();
      });
    } else {
      toast.warn("MISSING COLOUMN");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      toast.warn("Please Login with valid credential");
    } else if (localStorage.getItem("token") != "null") {
      const decoded = jwt_decode(localStorage.getItem("token"));
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
      } else {
        if (decoded) {
          toast.success("LOGGED IN SUCCESSFUL");
          console.log("DECODED");
          console.log(decoded);
          navigate("/home");
        }
      }
    } else {
      toast.warn("Please Login with valid credential");
    }
  }, []);

  const SSignin = () => {
    return (
      <form onSubmit={loginHandler} className="sign-in-form formlogin">
        <h2 className="titlelogin">
          {" "}
          <b>Sign in</b>
        </h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="text" name="usernameLogin" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="password" name="passwordLogin" placeholder="Password" />
        </div>
        {!loading ? (
          <input className="btnlogin solid" type="submit" value="Login" />
        ) : (
          <div style={{ fontSize: "15px", color: "green" }}>
            {" "}
            <img src={SPINNER} width="80px" height="80px" /> Please Wait
          </div>
        )}
        <p className="social-text">Or Sign in with social platforms</p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </form>
    );
  };

  const Contentlogin = () => {
    return (
      <div className="panels-container">
        <div className="panellogin left-panellogin">
          <div className="contentlogin">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="btnlogin transparent"
              id="sign-up-btn"
              onClick={(e) => navigate("/register")}
            >
              Sign Up
            </button>
          </div>
          <img src={SIGNUP} className="image" alt="" />
        </div>
      </div>
    );
  };

  return (
    <div>
      {data.state != "null" && localStorage.setItem("token", data.state)}
      <b>
        <div className="containerlogin">
          <div className="forms-container">
            <div className="signin-signup">
              <SSignin />
            </div>
          </div>
          <Contentlogin />
        </div>
      </b>
    </div>
  );
};

export default Login;
