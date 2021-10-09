import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div className="login-container">
        <div>
          <h2>Register</h2>
          <form onSubmit="">
            <input type="text" placeholder="Your name" />
            <br />
            <input type="text" placeholder="Enter your email" />
            <br />
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter your Password"
            />
            <br />
            <input
              type="password"
              name=""
              id="password"
              placeholder="Re-enter your Password"
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
          <p>
            Create an account. Go to <Link to="/login">Register</Link>
          </p>
        </div>
      </div>
    );
};

export default Register;