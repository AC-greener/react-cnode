const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { Aside }  from '../../components/aside/index'   //对没有redux连接的HomeHeader组件进行测试
import{ shallow } from 'enzyme'

describe('Aside组件', () => {
  it('包含返回图标', () => {
    const wrapper = shallow(<Aside />)
    expect(wrapper.contains(
    <svg className="icon fanhui" aria-hidden="true">
      <use xlinkHref="#icon-fanhui" />
    </svg>)).toBe(true)
  })

  it('有对应的class', () => {
    const wrapper = shallow(<Aside />)
    expect(wrapper.exists('.clearfix')).toBe(true)
  })

  it('type是aside', () => {
    const wrapper = shallow(
      <Aside />
    )
    expect(wrapper.type()).toBe('aside')
  })

})