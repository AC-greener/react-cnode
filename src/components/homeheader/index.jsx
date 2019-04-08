import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
export class HomeHeader extends React.Component {
  render () {
    if (this.props.showDisplayOptions) {
      var displayOption = (
        <div className="display" onClick={this.props.showDisplayOption}>
          <div className="itemWrap">
            <div className="squareItem" />
            <div className="squareItem" />
          </div>
          <div className="itemWrap">
            <div className="squareItem" />
            <div className="squareItem" />
          </div>
        </div>
      );
    } else {
      displayOption = (
        <div>
          <div className="display x" onClick={this.props.showDisplayOption}>
            <div className="itemWrap">
              <div className="squareItem" />
              <div className="squareItem" />
            </div>
            <div className="itemWrap">
              <div className="squareItem" />
              <div className="squareItem" />
            </div>
          </div>
          <div className="displayOption">
            <div className="options">
              DISPLAY OPTIONS
            </div>
            <div className="optionWrap">
              <div className={this.props.colClicked? 'col clicked':'col'} onClick={this.props.changeColDisplay}>
                <div className="colQuare">
                  <hr />
                </div>
              </div>
              <div className={this.props.rowClicked? 'row clicked':'row'} onClick={this.props.changeRowDisplay}>
                <div className="rowQuare" />
              </div>
            </div>
          </div>

        </div>
      );
    }
    return (
      <div className='header1'>
        <header className="header">
          <Link to="/aside">
            <svg className="icon sideNav" aria-hidden="true">
              <use xlinkHref="#icon-nav" />
            </svg>
          </Link>

          Dribbble
        </header>
        <div className="homeHero">
          <div className="imgWrapper">
            <img src={require ('../../statics/imgs/bg.png')} alt="" />
          </div>
          <h3>
            <div>Discover the world’s top </div>
            <div>designers & creatives</div>
          </h3>
          <div className="descDribbble">
            <div>Dribbble is the leading destination to find</div>
            <div>& showcase creative work and home to </div>
            <div>the world's best design professionals.</div>
          </div>
          {/* <h1 class="animated infinite bounce delay-2s">Example</h1> */}
          <div className="buttonWrapper animated bounce">
            <Link className="login" to="/login">Sign In</Link>
          </div>
          <div className="artBy">
            Art by DKNG
          </div>
        </div>
        {}
        <div className="tabBar">
          {displayOption}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showDisplayOptions: state.homeHeaderReducer.showDisplayOptions,
    colClicked: state.mainReducer.colClicked,
    rowClicked: state.mainReducer.rowClicked
  };
};
const mapDispatchToProps = dispatch => {
  return {
    showDisplayOption() {
      dispatch ({type: 'show_display_option'});
    },
    changeColDisplay() {
      dispatch({type: 'change_col_display'})
    },
    changeRowDisplay() {
      dispatch({type: 'change_row_display'})
    }
  };
};
export default connect (mapStateToProps, mapDispatchToProps) (HomeHeader);
