import React, { useState } from 'react';
import './Login.css';

const Login = ({ closeLoginPanelEvent, loginRequestSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const emailErrors = email === '' ? 'Email is required.' : !/\S+@\S+\.\S+/.test(email) ? 'Invalid Email.' : '';
  const passwordErrors =
    password.length < 8 ? 'Min. 8 Characters for password' : password.length > 64 ? 'Max. 64 Characters for password' : '';

  const isFormInvalid = emailErrors || passwordErrors;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormInvalid) return;
    setIsLoggingIn(true);
    // Perform login logic here
    loginRequestSuccess();
  };

  return (
    <div className="signin-container">
      <div className="signin-panel">
        <button onClick={() => closeLoginPanelEvent(true)} className="close">
          &times;
        </button>
        <div className="logo">
          <img src='/x.png' alt='logo' ></img>
        </div>
        <form className="login-section" onSubmit={handleSubmit}>
          <h2 className="signin-header">Sign in to X</h2>
          <div className="input-group">
            <div className="input-container">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>
            {emailErrors && <p className="input-error">{emailErrors}</p>}
          </div>
          <div className="input-group">
            <div className="input-container">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
            {passwordErrors && <p className="input-error">{passwordErrors}</p>}
          </div>
          <button type="submit" className="login-button" disabled={isFormInvalid || isLoggingIn}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
