import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';

class Login extends React.Component {
  render () {
    return (
      <div className="loginWrap">
        <div className="goback">
          <Link to="/">
            <svg className="icon fanhui" aria-hidden="true">
              <use xlinkHref="#icon-fanhui" />
            </svg>
          </Link>
        </div>
        <header>
          <div className="name">
            <img
              src={require ('../../statics/imgs/dribbble.png')}
              alt="dribbble"
            />
          </div>
          <div className="signin">
            <h2>Sign in</h2>
          </div>
        </header>
        <div className="box">
          <div className="item">
          {/* eslint-disable-next-line  */} 
            <a href="#">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-twitter" />
              </svg>
              Sign in with Twitter
            </a>
          </div>
          <div className="item">
           {/* eslint-disable-next-line  */}
            <a href="#">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-facebook" />
              </svg>
              Sign in with Facebook
            </a>
          </div>
          <div className="item">
          {/* eslint-disable-next-line  */}
            <a href="#">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-google" />
              </svg>
              Sign in with Google

            </a>
          </div>
        </div>
        <div className="validation">
          <div className="username">
            <div className="label">
              <label htmlFor="username">Username or Email</label>
            </div>
            <input type="text" id="username" />
          </div>
          <div className="password">
            <div className="label">
              <label htmlFor="username">Password</label>
            </div>
            <input type="text" id="password" />
          </div>
          <div className="sign">
            <button>sign in</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
