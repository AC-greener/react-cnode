import React from 'react'
import './style.css'
import axios from 'axios'
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='contentWrapper'>
        <div className='item'>
          <img src={require('../../statics/imgs/item1.jpg')} />
        </div>
        <div className='item'>
          <img src={require('../../statics/imgs/item2.png')} alt=""/>
        </div>
        <div className='item'>
          <img src={require('../../statics/imgs/item3.png')} alt="" />
        </div>
        <div className='item'>
          <img src={require('../../statics/imgs/item4.png')} alt="" />
        </div>
        <div className='item'>
          <img src={require('../../statics/imgs/item5.png')} alt="" />
        </div>
        <div className='item'>
          <img src={require('../../statics/imgs/item6.png')} alt="" />
        </div>
      </div>
    )
  }
}
export default Main