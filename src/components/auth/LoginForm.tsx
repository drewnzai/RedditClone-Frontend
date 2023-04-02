/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import  ReactDOM  from "react-dom";
import "./LoginForm.css"; // You'll need to create the LoginModal.css file

function LoginForm(props: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle login logic here
    props.onClose(); // Close the modal
  };

  const LoginModal = (
      <div className={`modal ${props.isOpen ? "open" : ""}`}>
        <div className="modal-overlay" onClick={props.onClose} />
        <div className="modal-content">
          <div className="modal-header">
            <h2>Login</h2>
            <button className="close-button" onClick={props.onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <br />
              <button type="submit">Login</button>
              <div className="forgot-password-link">
                <a href="#">Forgot your password?</a>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <div className="create-account-link">
              <span>Don't have an account? </span>
              <a href="#">Sign up</a>
            </div>
            <div className="privacy-policy-link">
              <a href="#">Privacy policy</a>
            </div>
          </div>
        </div>
      </div>
    
  );


  
  return ReactDOM.createPortal(LoginModal, document.querySelector("#modal")!);
}

export default LoginForm;
