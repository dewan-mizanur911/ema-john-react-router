import React from 'react';
import './Login.css';
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/shop';
    const signInWithGoogle = () => {
        googleSignIn().then((result) => {
            history.push(redirect_url);
        });
    }
    return (
      <div className="login-container">
        <div>
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Enter your email" />
            <br />
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter your Password"
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
          <p>
            Create an account. Go to <Link to="/register">Register</Link>
          </p>
          <div>     --------------Or---------------     </div>
            <button className="btn-regular" onClick={signInWithGoogle}>Sign In with Google</button>

        </div>
      </div>
    );
};

export default Login;