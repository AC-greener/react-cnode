import React from 'react';
import './style.css';
class Login extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (
      <div className="loginWrapper">
        <header>
          <div className="name">Dribble</div>
          <div className="signin">Sign in</div>
        </header>
        <div className="box">
          <div className="item">
            <a>Sign in with Twitter</a>
          </div>
          <div className="item">
            <a>Sign in with Facebook</a>
          </div>
          <div className="item">
            <a>Sign in with Google</a>
          </div>
        </div>
        <div className="validation">
          <div className="username item">
          <div>
              <label htmlFor="username">Username or Email</label>
          </div>
            <input type="text" id="username" />
          </div>
          <div className="passwordlable item">
          </div>
          <div className="password item">
          <div>
              <label htmlFor="username">Password</label>
          </div>
            <input type="text" id='password'/>
          </div>
          <div className='sign'>
            <button>sign in</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
