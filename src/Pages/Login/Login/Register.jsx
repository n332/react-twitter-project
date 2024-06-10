import React, { useState } from 'react';
import useUserAuth from './useUserAuth';
import './Register.css';

const Register = ({ closeRegisterPanelEvent, registerRequestSuccess }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');

  const { register, loading, error } = useUserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted with:', { email, username, password, month, day, year }); // Debugging log
    await register({ email, username, password, month, day, year });
    if (!error) {
      registerRequestSuccess();
    }
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div className="signup-container">
      <div className="signup-panel">
        <button onClick={() => closeRegisterPanelEvent(true)} className="close" disabled={loading}>
          &times;
        </button>
        <div className="logo">
          <img src="/x.png" alt="Logo" />
        </div>
        <form className="register-section" onSubmit={handleSubmit}>
          <h2 className="signup-header">Create an account</h2>
          <div className="input-group">
            <div className="input-container">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            {error && <p className="input-error">{error}</p>}
          </div>
          <div className="input-group">
            <div className="input-container">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="username">Username</label>
              <div className="counter" id="username-counter">{username.length} / 32</div>
            </div>
            {error && <p className="input-error">{error}</p>}
          </div>
          <div className="input-group">
            <div className="input-container">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
              <div className="counter" id="password-counter">{password.length} / 64</div>
            </div>
            {error && <p className="input-error">{error}</p>}
          </div>
          <h3>Date of birth</h3>
          <div className="dob-selects">
            <select id="month" value={month} onChange={(e) => setMonth(e.target.value)} required>
              <option value="" hidden>Month</option>
              {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
            <select id="day" value={day} onChange={(e) => setDay(e.target.value)} required>
              <option value="" hidden>Day</option>
              {days.map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
            <select id="year" value={year} onChange={(e) => setYear(e.target.value)} required>
              <option value="" hidden>Year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="register-button" disabled={loading}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
