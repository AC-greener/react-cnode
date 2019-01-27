import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import axios from 'axios'
import store from '../../store/index'
class Aside extends React.Component {
  
  render() {
    if(this.props.modalStatus) {
      return (
        <aside className='clearfix'>
          <div className="left">
            <div className="loginWrapper">
              <svg  className="icon iconDribbble" aria-hidden="true">
                <use xlinkHref="#icon-dribbble"></use>
              </svg>
              <div>
                Login
              </div>
              <div>
                Tap here to lohin
              </div>
              <img src="../../statics/imgs/ball.ico" alt="" />
            </div>
            <div className='itemWrapper'>
              <div className='item'>
                <span>
                  <svg className="icon " aria-hidden="true">
                    <use xlinkHref="#icon-home"></use>
                  </svg>
                </span>
                <span>home</span>
              </div>
              <div className='item'>
                <span>
                  <svg className="icon " aria-hidden="true">
                    <use xlinkHref="#icon-explore"></use>
                  </svg>
                </span>
                <span>
                  Explore
                </span>
              </div>
            </div>
            <div className='itemWrapper'>
              <div className='item'>
              <span>
                  <svg className="icon " aria-hidden="true">
                    <use xlinkHref="#icon-settings"></use>
                  </svg>
                </span>
                <span>
                  Settings
                </span>
              </div>
              <div className='item'>
              <span>
                  <svg className="icon " aria-hidden="true">
                    <use xlinkHref="#icon-about"></use>
                  </svg>
                </span>
                <span>
                {/* <button id="add1" onClick={()=> this.props.add1()}>+1</button>
                  {this.props.n} */}
                  Report a bug
                </span>
              </div>
            </div>
          </div>
          <div className="right" onClick={() => this.props.closeLoginModal()}>right</div>
        </aside>
      )
    } else {
      return null 
    }

  }
  componentDidMount() {
    const action = (dispatch) => {
      return axios
          .get('/api/test.json')
          .then(res => {
            console.log(res.data)
            dispatch({type: 'xxx', data: res.data})
          })
    }
    //本来的action是一个对象，现在是一个函数
    // console.log(action())
    store.dispatch(action)
  }
}
const mapStateToProps = (state) => {
  return {
    n: state.asideReducer.n,
    modalStatus: state.asideReducer.showLoginModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add1: () => {
      dispatch({type: 'add', payload: 1})
    },
    closeLoginModal() {
      dispatch({type: 'change_login_modal', value: false})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Aside)