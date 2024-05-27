import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Log.css';

const Log = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/api/admin/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/home');
      } else {
        const errorData = await response.json();
        if (errorData && errorData.error) {
          setError(errorData.error);
        } else {
          setError('Invalid Login Id Or Password.');
        }
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
    <div className="login-form">
      <h3>Sign In</h3>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-groupp">
        <p>By clicking Sign In, you agree to Vitaran's <a href="/terms">Terms of Service</a> and acknowledge our <a href="/privacy">Privacy Policy</a></p></div>
        <button type="submit">Sign In</button>
      </form>
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
    </div>
    <div className="additional-links">
        <p>New to Vitaran ?</p>
      <a href="/signup">Create an Account</a>
      <a href="/forgot-password">Forgot Password?</a>
    </div>
  </div>
  );
};

export default Log;