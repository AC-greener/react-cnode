import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import HomeHeader from '../../components/homeheader/index';

class Main extends React.Component {
  render () {
    return (
      <div>
        <HomeHeader />
        <div className="contentWrapper">
          <Link to="/shots/1">
            <div className="item">
              <img src={require ('../../statics/imgs/item10.png')} alt="" />
            </div>
          </Link>
          <Link to="/shots/2">
            <div className="item">
              <img src={require ('../../statics/imgs/item2.png')} alt="img" />
            </div>
          </Link>
          <Link to="/shots/3">
            <div className="item">
              <img src={require ('../../statics/imgs/item5.png')} alt="img" />
            </div>
          </Link>
          <Link to="/shots/4">
            <div className="item">
              <img src={require ('../../statics/imgs/item6.png')} alt="" />
            </div>
          </Link>
          <Link to="/shots/5">
            <div className="item">
              <img src={require ('../../statics/imgs/item4.png')} alt="img" />
            </div>
          </Link>
          <Link to="/shots/6">
            <div className="item">
              <img src={require ('../../statics/imgs/item3.png')} alt="img" />
            </div>
          </Link>

        </div>
      </div>
    );
  }
}
export default Main;
