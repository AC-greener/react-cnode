import React from 'react';
import './style.css';

class Shots extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="shotsWrap">
          <div className="avatarWrap">
            <div className="avatar">
              <img src={require ('../../statics/imgs/avatar1.jpg')} alt="" />
            </div>
            <div className="intro">
              <div className="name">zhangsan</div>
              <div className="from">by Divan Raj in Fitness scheduling app</div>
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
            <div className='shotColor1'></div>
            <div className='shotColor2'></div>
            <div className='shotColor3'></div>
            <div className='shotColor4'></div>
            <div className='shotColor5'></div>
            <div className='shotColor6'></div>
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
      </div>
    );
  }
}
export default Shots;
