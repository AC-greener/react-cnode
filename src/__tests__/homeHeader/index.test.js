const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { HomeHeader }  from '../../components/homeheader/index'   //对没有redux连接的HomeHeader组件进行测试
import{ shallow, mount } from 'enzyme'

describe('HomeHeader组件', () => {

  it('包含图标', () => {
    const wrapper = shallow(
      <HomeHeader />
    )
    expect(wrapper.contains( 
    <svg className="icon sideNav" aria-hidden="true">
      <use xlinkHref="#icon-nav" />
    </svg>)).toBe(true)
  })

  it('有对应的class', () => {
    const wrapper = shallow(
      <HomeHeader />
    )
    expect(wrapper.exists('.header')).toBe(true)
  })
  
  it('type是div', () => {
    const wrapper = shallow(
      <HomeHeader />
    )
    expect(wrapper.type()).toBe('div')
  })
})