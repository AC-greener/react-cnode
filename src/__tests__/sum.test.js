const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import  HomeHeader  from '../components/homeheader/index'
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../store/index'
import { Provider } from 'react-redux'
import{ shallow, mount } from 'enzyme'
import { wrap } from 'module';
import {expect} from 'chai'
describe('HomeHeader组件', () => {
  it('', () => {
    const homeHeader = shallow(
      <HomeHeader className='header1' />
    )
    // console.log('111',homeHeader)
    // expect(homeHeader.find('.header1')).to.have.length(1)
  })
})