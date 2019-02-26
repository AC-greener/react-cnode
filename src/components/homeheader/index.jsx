import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class HomeHeader extends React.Component {
  render () {
    return (
      <div>
        <header className="header">
          <Link to="/aside">
            <svg
              className="icon sideNav"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-nav" />
            </svg>
          </Link>

          Dribbble
        </header>
        <div className="homeHero">
          <div className="imgWrapper">
            <img src={require ('../../statics/imgs/dribbble1.png')} alt="" />
          </div>
          <h3>
            <div>Discover the world’s top </div>
            <div>designers & creatives</div>
          </h3>
          <div className="descDribbble">
            <div>Dribbble is the leading destination to find</div>
            <div>& showcase creative work and home to </div>
            <div>the world's best design professionals.</div>
          </div>
          <div className="buttonWrapper">
            <Link className="login" to="/login">Sign In</Link>
          </div>
        </div>
        <div className="tabBar">
          <div>
            popular
          </div>
          <div>
            rencent
          </div>
          <span>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-grid" />
            </svg>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    showAsideModal () {
      dispatch ({type: 'change_login_modal', value: true});
    },
  };
};
export default connect (mapStateToProps, mapDispatchToProps) (HomeHeader);
