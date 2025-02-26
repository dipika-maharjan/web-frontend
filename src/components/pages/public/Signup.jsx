// src/components/SignupPage.js
import React, { useState } from 'react';
import '../../../styles/Signup.css';
import signupImage from '../../../assets/images/signup.PNG';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../api/api'; // Import the signup function from api.js
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      const { token } = await signup(username, email, password); // Call signup function
      localStorage.setItem('token', token); // Store token
      toast.success('Account created successfully!');
      navigate('/login');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src={signupImage} alt="Signup" />
      </div>
      <div className="sign-up">
        <h1>Sign up</h1>
        <p>Create your account</p>
        <div className="signup-description">
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            id="user-email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleSubmit}>
          Sign up
        </button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
}

export default SignupPage;
