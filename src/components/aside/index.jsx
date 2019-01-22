import React from 'react'
import './style.css'
class Aside extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <aside className='clearfix'>
        <div className="left">left</div>
        <div className="right">right</div>
      </aside>
    )
  }
}
export default Aside