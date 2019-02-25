import React from 'react'
import './style.css'

class Shots extends React.Component {
  render() {
    return (
      <div className='shotsWrap'>
        <div className="avatarWrap">
          <div className="avatar">
            <img src={require('../../statics/imgs/avatar1.jpg')} alt=""/>
          </div>
          <div className="intro">
            <div className="name">zhangsan</div>
            <div className="from">by Divan Raj in Fitness scheduling app</div>
          </div>
        </div>
        <div className="savelike">
          <button> Save </button>
          <button> Like </button>
        </div>
        <div className="img">
          img
        </div>
      </div>
    )
  }
}
export default Shots