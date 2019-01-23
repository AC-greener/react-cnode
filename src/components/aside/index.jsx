import React from 'react'
import { connect } from 'react-redux'
import './style.css'
class Aside extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <aside className='clearfix'>
        <div className="left">
          {this.props.n}
          <button id="add1" onClick={()=> this.props.add1()}>+1</button>
          <div className="loginWrapper">
            <img src="../../statics/imgs/ball.ico" alt="" />
          </div>
        </div>
        <div className="right">right</div>
      </aside>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    n: state.n
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add1: () => {dispatch({type: 'add', payload: 1})},
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Aside)