import React, { useEffect } from "react";
import "../Login/login.scss";
import LOGIN from "../../img/log.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

toast.configure();

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const Register = () => {
  const navigate = useNavigate();

  function registerHandler(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const username = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    const age = e.target[4].value;
    const gender = e.target[5].value;

    if (name != "") {
      if (username != "") {
        if (email != "") {
          if (password != "") {
            if (parseInt(age) >= 1 && parseInt(age) <= 150) {
              if (
                gender.toLowerCase() == "male" ||
                gender.toLowerCase() == "female"
              ) {
                try {
                  fetch("http://localhost:3001/api/user/register", {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name: name,
                      username: username,
                      email: email,
                      password: password,
                      age: age,
                      gender: gender,
                    }),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data);
                      if (data.errors) {
                        toast.error(data.errors);
                      } else {
                        toast.success("USER SUCCESSFULLY REGISTERED");
                        navigate("/login");
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                } catch (e) {
                  console.log(e);
                }
              } else {
                toast.error("Gender can either be male or female");
              }
            } else {
              toast.error("Age must be an interger");
            }
          } else {
            toast.error("Missing Password");
          }
        } else {
          toast.error("Missing Email");
        }
      } else {
        toast.error("Missing Username");
      }
    } else {
      toast.error("Missing Name");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      toast.warn("Register with valid credential");
    } else if (localStorage.getItem("token") != "null") {
      const decoded = jwt_decode(localStorage.getItem("token"));
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
      } else {
        if (decoded) {
          toast.success("Already Logged In");
          console.log("DECODED");
          console.log(decoded);
          navigate("/home");
        }
      }
    } else {
      toast.warn("Register with valid credential");
    }
  }, []);

  const SSignup = () => {
    return (
      <form
        onSubmit={registerHandler}
        action="#"
        class="sign-up-form formlogin"
      >
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
          <input type="text" placeholder="Gender (Eg. male/female)" />
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
              onClick={(e) => navigate("/login")}
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
              <SSignup />
            </div>
          </div>
          <Contentsignup />
        </div>
      </b>
    </div>
  );
};

export default Register;
