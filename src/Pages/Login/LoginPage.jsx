import React, { useState, useEffect } from 'react';
import './LoginPage.css';
import Login from './Login';
import Register from './Register';
import { useNavigate } from 'react-router-dom';
import useUserAuth from './useUserAuth';
const LoginPage = () => {
  const [enableLogin, setEnableLogin] = useState(false);
  const [enableRegister, setEnableRegister] = useState(false);
  const navigate = useNavigate();
  const triggerLoginPanel = () => setEnableLogin(true);
  const triggerRegisterPanel = () => setEnableRegister(true);
  const closeLoginPanel = () => setEnableLogin(false);
  const closeRegisterPanel = () => setEnableRegister(false);
  const requestSuccess = () => {
    setEnableLogin(false);
    setEnableRegister(false);
    navigate('/');
  };
  const { user } = useUserAuth();
  useEffect(() => {
    if (user && user.id) {
      // If user is not logged in or has no id, navigate to /auth
      navigate('/');
    }
  }, [user, navigate]);
  return (
    <div className="container">
      <div className="row">
        <div className="logo-section">
          <img className="x-logo" src="/Assets/x-logo.png" alt="Logo" />
        </div>
        <div className="login-section">
          <h1 className="login-title">Happening Now</h1>
          <h3 className="login-subtitle">Join today.</h3>
          <div className="login-button-group">
            <button className="login-button">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="oauth-login-icon"
              >
                <g>
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
              Sign up with Google
            </button>
            <div className="or-divider">or</div>
            <button
              onClick={triggerRegisterPanel}
              className="login-button sign-up"
            >
              Create an account
            </button>
            <p className="signup-terms">
              By signing up, you agree to the{' '}
              <a className="twitter-link" href="#">
                Terms of Service
              </a>{' '}
              and
              <a className="twitter-link" href="#">
                Privacy Policy
              </a>
              ,{' '}
              <a className="twitter-link" href="#">
                Cookie Use
              </a>
              .
            </p>
            <h3 className="signin-header">Already Have an account?</h3>
            <button
              onClick={triggerLoginPanel}
              className="login-button sign-in"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
      {enableLogin && (
        <Login
          closeLoginPanelEvent={closeLoginPanel}
          loginRequestSuccess={requestSuccess}
        />
      )}
      {enableRegister && (
        <Register
          closeRegisterPanelEvent={closeRegisterPanel}
          registerRequestSuccess={requestSuccess}
        />
      )}
      <div className="footer">
        <a href="#">About</a> |<a href="#">Download the X app</a> |
        <a href="#">Help Center</a> |<a href="#">Terms of Service</a> |
        <a href="#">Privacy Policy</a> |<a href="#">Cookie Policy</a> |
        <a href="#">Accessibility</a> |<a href="#">Ads info</a> |
        <a href="#">Blog</a> |<a href="#">Status</a> |<a href="#">Careers</a> |
        <a href="#">Brand Resources</a> |<a href="#">Advertising</a> |
        <a href="#">Marketing</a> |<a href="#">X for Business</a> |
        <a href="#">Developers</a> |<a href="#">Directory</a> |
        <a href="#">Settings</a>
        <div>© 2024 X Corp.</div>
      </div>
    </div>
  );
};

export default LoginPage;
