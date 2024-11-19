import React, { useEffect } from "react";
import "./Home.css";
import ringImage from "../../assets/images/ring.png";
import logo from "../../assets/images/logo.png";
import white from "../../assets/images/que1.png"
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const loadGoogleScript = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = initializeGoogleSignIn;
      document.body.appendChild(script);
    };

    const initializeGoogleSignIn = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: "YOUR_GOOGLE_CLIENT_ID",
          callback: handleCredentialResponse
        });

        window.google.accounts.id.renderButton(
          document.getElementById("google-signin-button"),
          {
            theme: "outline",
            size: "large"
          }
        );
      }
    };

    const handleCredentialResponse = (response) => {
      console.log("Encoded JWT ID token: " + response.credential);
    };

    loadGoogleScript();
  }, []);

  return (
    <div className="container">
    <div className="left-container">
  <div
    className="left-image"
    style={{ backgroundImage: `url(${ringImage})` }}
  >
    <div className="white-group">
      <img src={white} alt="Illustration of a white graphic" />
    </div>
    <div className="your-container">
      <h1 className="test-product">
        Your podcast will no longer be just a hobby.
      </h1>
      <p className="super-text">
        Supercharge Your Distribution using our AI assistant!
      </p>
    </div>
  </div>
</div>


      <div className="right-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="welcome">
          <h2 className="text-welcome">Welcome to</h2>
          <h1 className="text-ai">Ques.AI</h1>
        </div>

        <div className="form-container">
          <input
            type="email"
            placeholder="Email Address"
            className="input-field"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              lineHeight: "24px",
              color: "#A7A7A7",
              fontFamily: "Roboto"
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              lineHeight: "24px",
              color: "#A7A7A7",
              fontFamily: "Roboto"
            }}
          />
        </div>

        <div className="login-container">
          <span className="text">Login to your account</span>
          <a href="#forgot-password" className="forgot-password">
            Forgot Password?
          </a>
        </div>

        <div className="google-container">
          <button className="login-button">Login</button>

          <div className="line-text">
            <div
              style={{
                height: "1px",
                width: "140px",
                backgroundColor: "#DBDBDB"
              }}
            ></div>
            <span style={{ fontSize: "24px", fontWeight: 700 }}>or</span>
            <div
              style={{
                height: "1px",
                width: "140px",
                backgroundColor: "#DBDBDB"
              }}
            ></div>
          </div>

          <div id="google-signin-button"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
