import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
class HomeHeader extends React.Component {
  render() {
    return <div>
        <header className="header">
          <svg onClick={this.props.showAsideModal} className="icon sideNav" aria-hidden="true">
            <use xlinkHref="#icon-nav" />
          </svg>
          Dribbble
        </header>
        <div className="homeHero">
          <div className="imgWrapper">
            <img src={require('../../statics/imgs/dribbble1.png')} alt="" />
          </div>
          <h3>
            <div>Discover the world’s top </div>
            <div>designers & creatives</div>
          </h3>
          <p className='descDribbble'>
            <div>Dribbble is the leading destination to find</div>
            <div>& showcase creative work and home to </div>
            <div>the world's best design professionals.</div>
          </p>
          <div className='buttonWrapper'>
            <button>sign in</button>
          </div>
        </div>
        <div className="tabBar">
        </div>
      </div>;
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    showAsideModal() {
      dispatch({ type: 'change_login_modal', value: true})
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
