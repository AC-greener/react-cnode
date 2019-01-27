import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
class HomeHeader extends React.Component {
  render() {
    return (
      <div>
        <header className='header'>
          <svg onClick={this.props.showAsideModal} className="icon sideNav" aria-hidden="true">
            <use xlinkHref="#icon-nav"></use>
          </svg>
          nodeJs论坛
        </header >
        {/* <nav className='nav'>
          <ul>
            <li>
              <Link to='/'>全部</Link>  
            </li>
            <li>
              <Link to='/essence'>精华</Link>  
            </li>
            <li>
              <Link to='/share'>分享</Link>  
            </li>
            <li>
              <Link to='/question'>问答</Link>  
            </li>
            <li>
              <Link to='/job'>招聘</Link>  
            </li>
          </ul>
        </nav> */}
      </div>
    )
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
