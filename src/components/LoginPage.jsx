import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateForm = () => {
    if (username.length < 3) {
      setError("Username must be at least 3 characters long");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    if (!validateForm()) return;
  
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        {
          username,
          password,
        },
        { withCredentials: true } // Enable cookies if required for authentication
      );
  
      if (response.status === 200) {
        setSuccess("Login successful");
        navigate(`/addfeature/${username}`);
      }
    } catch (error) {
      if (error.response) {
        // Handle specific HTTP status codes from the backend
        if (error.response.status === 401) {
          setError("Invalid username or password.");
        } else if (error.response.status === 404) {
          setError("You are a new user, please register first.");
        } else {
          setError("An error occurred during login.");
        }
      } else {
        // Handle other errors (e.g., network issues)
        setError("Failed to connect to the server. Please try again later.");
      }
    } finally {
      setUsername("");
      setPassword("");
    }
  };
  

  const handleRegisterRedirect = () => {
    window.location.href = "/register"; // Redirect to register page
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>

        {/* Error Message */}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="alert alert-success" role="alert">
            {success}
          </div>
        )}

        <form onSubmit={handleLogin}>
          {/* Username Input */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleRegisterRedirect}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
