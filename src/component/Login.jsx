import React, { useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
const provider = new GoogleAuthProvider();

const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/home");
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log({ uid });
      } else {
        console.log("no user");
      }
    });
  }, []);
  return (
    <div className="main">
      <div className="login-body">
        <div className="login-body__form">
          <h1>Sign In</h1>
          {/* <div className="login-body__input mb-16">
                    <input type="text" placeholder="Email or phone number" onChange={onEmailChanged} />
                    </div>
                    <div className="login-body__input">
                    <input type="password" placeholder="Password" onChange={onPasswordChanged} />
                    </div> */}
          {/* <button className="login-body__submit-btn">Sign In</button> */}
          {/* <div className="login-body__options">
                    <span>Remember me</span>
                    <span className="login-body__need-help">Need help?</span>
                    </div> */}
          <div className="login-body__footer">
            <div className="login-body__fb">
              {/* <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="fb" />
                        <span>Login with Facebook</span> */}

              <button className="g-login" onClick={login}>
                {/* <img src="../assests/google-logo-9808.png" alt="" /> */}
                Login with Google
              </button>
            </div>
            <div className="login-body__new-to-nl">
              <span>New to Netflix ?</span>
              <span className="login-body__sign-up">Sign up now.</span>
            </div>
            <div className="login-body__google_captcha">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <span className="login-body__learn-more">Learn more.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
