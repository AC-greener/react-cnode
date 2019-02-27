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
              <img src={require ('../../statics/imgs/shots1.png')} alt="" />
            </div>
          </Link>
          <Link to="/shots/2">
            <div className="item">
              <img src={require ('../../statics/imgs/shots2.png')} alt="img" />
            </div>
          </Link>
          <Link to="/shots/3">
            <div className="item">
              <img src={require ('../../statics/imgs/shots3.jpg')} alt="img" />
            </div>
          </Link>
          <Link to="/shots/4">
            <div className="item">
              <img src={require ('../../statics/imgs/shots4.jpg')} alt="" />
            </div>
          </Link>
          <Link to="/shots/5">
            <div className="item">
              <img src={require ('../../statics/imgs/shots5.jpg')} alt="img" />
            </div>
          </Link>
          <Link to="/shots/6">
            <div className="item">
              <img src={require ('../../statics/imgs/shots6.jpg')} alt="img" />
            </div>
          </Link>
          <Link to="/shots/7">
            <div className="item">
              <img src={require ('../../statics/imgs/shots7.jpg')} alt="img" />
            </div>
          </Link>
          <Link to="/shots/8">
            <div className="item">
              <img src={require ('../../statics/imgs/shots8.png')} alt="img" />
            </div>
          </Link>
          <Link to="/shots/9">
            <div className="item">
              <img src={require ('../../statics/imgs/shots9.png')} alt="img" />
            </div>
          </Link>
          <Link to="/shots/10">
            <div className="item">
              <img src={require ('../../statics/imgs/shots10.jpg')} alt="img" />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default Main;
