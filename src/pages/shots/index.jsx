import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import store from '../../store/index';
import './style.css';
class Shots extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="goback">
          <Link to="/">
            <svg className="icon fanhui" aria-hidden="true">
              <use xlinkHref="#icon-fanhui" />
            </svg>
          </Link>
        </div>
        <div className="shotsWrap">
          <div className="avatarWrap">
            <div className="avatar">
              <img
                src={this.props.shotsData && this.props.shotsData.avatarUrl}
                alt=""
              />
            </div>
            <div className="intro">
              <div className="name">zhangsan</div>
              <div className="from"><span className='by'>by</span> Divan Raj</div>
            </div>
          </div>
          <div className="savelike">
            <button> Save </button>
            <button>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-xin" />
              </svg>
              Like
            </button>
          </div>
        </div>
        <div className="shotsimg">
          <img src={require ('../../statics/imgs/item10.png')} alt="" />
        </div>
        <div className="shotDesc">
          <p>
            for the Moonworkers project. This time it transfers the idea of getting the payment successfully. Stay tuned and don’t miss the new ones coming soon!
          </p>
          <ul>
            <li>Tubik<span> | &nbsp;</span></li>
            <li>
              Behance<span> | &nbsp;</span>
            </li>
            <li>
              Instagram<span> | &nbsp;</span>
            </li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="shotStatus">
          <div className="shotTags">
            <ul>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-tag" />
              </svg>
              <li>barbale</li>
              <li>color</li>
              <li>colors</li>
              <li>colourscafe</li>
              <li>georgian</li>
              <li>mythology</li>
            </ul>
          </div>
          <div className="shotColors">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-color" />
            </svg>
            <div className="shotColor1" />
            <div className="shotColor2" />
            <div className="shotColor3" />
            <div className="shotColor4" />
            <div className="shotColor5" />
            <div className="shotColor6" />
          </div>
          <div className="shotViews">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-view" />
            </svg>
            3245 views
          </div>
          <div className="shotLikes">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-xin" />
            </svg>
            261 likes
          </div>
          <div className="shotSaves">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-tianjia" />
            </svg>
            246 saves
          </div>
          <div className="shotDate">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-date" />
            </svg>
            Feb 24,2019
          </div>
        </div>
        <div className="footer">
          <div className="logo">
            <img
              src={require ('../../statics/imgs/dribbble-small.png')}
              alt="dribbble"
            />
            <p>Show and tell for designers</p>
          </div>
          <p className="about">
            What are you working on? Dribbble is a community of designers sharing screenshots of their work,
            process, and projects.
          </p>
          <p className="follow" />
          <p className="x">Dribbble</p>
          <div className="footerNav">
            <div className="navLeft">
              <ul>
                <li>About</li>
                <li>Help</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div className="navRight">
              <ul>
                <li>Shop</li>
                <li>Testimonials</li>
                <li>Media Kit</li>
                <li>Advertise</li>
                <li>API</li>
                {console.log (
                  this.props.shotsData && this.props.shotsData.author
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount () {
    const action = dispatch => {
      return axios.get ('/shots.json').then (res => {
        let result = {}
        res.data.data.forEach(item => {
          if(item.id === this.props.match.params.id) {
            result = item
            return 
          }
        })
        console.log (result);
        dispatch ({type: 'get_shots_data', data: result});
      });
    };
    store.dispatch (action);
  }
}
const mapStateToProps = state => {
  return {
    shotsData: state.shotsReducer.shotsData,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    closeLoginModal: () => {
      dispatch ({type: 'xxx', value: false});
    },
  };
};
export default connect (mapStateToProps, mapDispatchToProps) (Shots);
