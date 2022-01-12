import App from './App';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

describe('Top level div with css class container', () => {
  it('top level div exists', () => {
    const wrapper = shallow(<App />)
    const elm = wrapper.find('div')
    expect(elm.hasClass('container')).toEqual(true)
  })
})