import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './style.css';
import axios from 'axios';
import store from '../../store/index';
class Aside extends React.Component {
  render () {
    return (
      <aside className="clearfix">
        <div className="goback">
          <Link to="/">
            <svg className="icon fanhui" aria-hidden="true">
              <use xlinkHref="#icon-fanhui" />
            </svg>
          </Link>
        </div>
        <div className="left">
          <div className="loginWrapper">
            <svg className="icon iconDribbble" aria-hidden="true">
              <use xlinkHref="#icon-dribbble" />
            </svg>
            <Link to="/login">
              <div className="login">
                Login
              </div>
              <div className="tabLogin">
                Tap here to login
              </div>
            </Link>

            <img src="../../statics/imgs/ball.ico" alt="" />
          </div>
          <hr />
          <div className="itemWrapper">
            <div className="item">
              <span>
                <svg className="icon " aria-hidden="true">
                  <use xlinkHref="#icon-home" />
                </svg>
              </span>
              <Link to='/'>
                <span>home</span>
              </Link>
            </div>
            <div className="item">
              <span>
                <svg className="icon " aria-hidden="true">
                  <use xlinkHref="#icon-explore" />
                </svg>
              </span>
              <span>
                Explore
              </span>
            </div>
          </div>
          <hr />
          <div className="itemWrapper">
            <div className="item">
              <span>
                <svg className="icon " aria-hidden="true">
                  <use xlinkHref="#icon-settings" />
                </svg>
              </span>
              <span>
                Settings
              </span>
            </div>
            <div className="item">
              <span>
                <svg className="icon " aria-hidden="true">
                  <use xlinkHref="#icon-about" />
                </svg>
              </span>
              <span>
                Report a bug
              </span>
            </div>
          </div>
        </div>
      </aside>
    );
  }
  componentDidMount () {
    const action = dispatch => {
      return axios.get ('/api/test.json').then (res => {
        // console.log(res.data)
        dispatch ({type: 'xxx', data: res.data});
      });
    };
    //本来的action是一个对象，现在是一个函数
    // console.log(action())
    store.dispatch (action);
  }
}
const mapStateToProps = state => {
  return {
    n: state.asideReducer.n,
    modalStatus: state.asideReducer.showLoginModal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add1: () => {
      dispatch ({type: 'add', payload: 1});
    },
    closeLoginModal () {
      dispatch ({type: 'change_login_modal', value: false});
    },
  };
};
export default connect (mapStateToProps, mapDispatchToProps) (Aside);
