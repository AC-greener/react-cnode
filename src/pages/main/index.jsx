import React from 'react'
import './style.css'
import axios from 'axios'
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    axios
      .get('/api/test.json')
      .then(res => {
        console.log(res)
      })
  }
  render() {
    return (
      <div className='contentWrapper'>
        <div className='item'>
          <img src={require('../../statics/imgs/item1.jpg')} />
        </div>
        <div className='item'>2</div>
        <div className='item'>3</div>
        <div className='item'>4</div>
        <div className='item'>5</div>
        <div className='item'>6</div>
      </div>
    )
  }
}
export default Main