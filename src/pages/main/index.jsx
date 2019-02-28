import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import store from '../../store/index';
import './style.css';
import HomeHeader from '../../components/homeheader/index';
import {connect} from 'react-redux';

class Main extends React.Component {
  render () {
    return (
      <div>
        <HomeHeader />
        <div className="contentWrapper">
          {this.props.shots.map ((item, index) => {
            index++
            if (this.props.rowArrangement) {
              return (
                <Link key={index} to={'/shots/' + index}>
                  <div className="item">
                    <img src={item.imgUrl} alt="" />
                  </div>
                </Link>
              );
            } else {
              return (
                <Link key={index} to={'/shots/' + index}>
                  <div key={index} className="item x">
                    <img
                      src={item.imgUrl}
                      alt=""
                    />
                    <div className="descShot">
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-view" />
                      </svg>
                      <span>{item.views}</span>
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-xin" />
                      </svg>
                      <span>{item.likes}</span>
                    </div>
                  </div>
                </Link>
              );
            }
          })}

        </div>
      </div>
    );
  }
  componentDidMount () {
    const action = dispatch => {
      return axios.get ('/shots.json').then (res => {
        let result = res.data.data;
        dispatch ({type: 'init_shots_data', data: result});
      });
    };
    store.dispatch (action);
  }
}
const mapStateToProps = state => {
  return {
    shots: state.mainReducer.shotsData,
    rowArrangement: state.mainReducer.rowArrangement,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    closeLoginModal: () => {
      dispatch ({type: 'xxx', value: false});
    },
  };
};
export default connect (mapStateToProps, mapDispatchToProps) (Main);
