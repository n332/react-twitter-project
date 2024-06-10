import React, { useState } from 'react';
import './LoginPage.css';
import Login from './Login';
import Register from './Register';

const LoginPage = () => {
  const [enableLogin, setEnableLogin] = useState(false);
  const [enableRegister, setEnableRegister] = useState(false);

  const triggerLoginPanel = () => setEnableLogin(true);
  const triggerRegisterPanel = () => setEnableRegister(true);
  const closeLoginPanel = () => setEnableLogin(false);
  const closeRegisterPanel = () => setEnableRegister(false);
  const requestSuccess = () => {
    setEnableLogin(false);
    setEnableRegister(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="logo-section">
          <img className="x-logo" src="/x.png" alt="Logo" />
        </div>
        <div className="login-section">
          <h1 className="login-title">Happening Now</h1>
          <h3 className="login-subtitle">Join today.</h3>
          <div className="login-button-group">
            <button className="login-button">
              <svg className="oauth-login-icon">
                {/* SVG content here */}
              </svg>
              Sign up with Google
            </button>
            <div className="or-divider">or</div>
            <button onClick={triggerRegisterPanel} className="login-button sign-up">
              Create an account
            </button>
            <p className="signup-terms">
              By signing up, you agree to the <a className="twitter-link" href="#">Terms of Service</a> and
              <a className="twitter-link" href="#">Privacy Policy</a>, <a className="twitter-link" href="#">Cookie Use</a>.
            </p>
            <h3 className="signin-header">Already Have an account?</h3>
            <button onClick={triggerLoginPanel} className="login-button sign-in">
              Sign in
            </button>
          </div>
        </div>
      </div>
      {enableLogin && <Login closeLoginPanelEvent={closeLoginPanel} loginRequestSuccess={requestSuccess} />}
      {enableRegister && <Register closeRegisterPanelEvent={closeRegisterPanel} registerRequestSuccess={requestSuccess} />}
      <div className="footer">
        <a href="#">About</a> |
        <a href="#">Download the X app</a> |
        <a href="#">Help Center</a> |
        <a href="#">Terms of Service</a> |
        <a href="#">Privacy Policy</a> |
        <a href="#">Cookie Policy</a> |
        <a href="#">Accessibility</a> |
        <a href="#">Ads info</a> |
        <a href="#">Blog</a> |
        <a href="#">Status</a> |
        <a href="#">Careers</a> |
        <a href="#">Brand Resources</a> |
        <a href="#">Advertising</a> |
        <a href="#">Marketing</a> |
        <a href="#">X for Business</a> |
        <a href="#">Developers</a> |
        <a href="#">Directory</a> |
        <a href="#">Settings</a>
        <div>© 2024 X Corp.</div>
      </div>
    </div>
  );
};

export default LoginPage;
