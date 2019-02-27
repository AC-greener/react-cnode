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
            <svg className="icon sideNav" aria-hidden="true">
              <use xlinkHref="#icon-nav" />
            </svg>
          </Link>

          Dribbble
        </header>
        <div className="homeHero">
          <div className="imgWrapper">
            <img src={require ('../../statics/imgs/bg.png')} alt="" />
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
          {/* <h1 class="animated infinite bounce delay-2s">Example</h1> */}
          <div className="buttonWrapper animated bounce">
            <Link className="login" to="/login">Sign In</Link>
          </div>
          <div className="artBy">
            Art by DKNG
          </div>
        </div>
        <div className="tabBar">

          <div className="display">
            <div className="itemWrap">
              <div className="squareItem" />
              <div className="squareItem" />
            </div>
            <div className="itemWrap">
              <div className="squareItem" />
              <div className="squareItem" />
            </div>
          </div>
          <div className="displayOption">
            <div className='options'>
              DISPLAY OPTIONS
            </div>
            <div className="optionWrap">
              <div className="col">
                <div className="colQuare" >
                <hr/>
                </div>
              </div>
              <div className="row">
                <div className="rowQuare" />
              </div>
            </div>

          </div>
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
