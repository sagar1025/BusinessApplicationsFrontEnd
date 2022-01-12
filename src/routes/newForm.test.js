import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import NewForm from './newForm'

Enzyme.configure({ adapter: new Adapter() })

describe('Top level div with css container', () => {
  it('top level div exists', () => {
    const wrapper = shallow(<NewForm />)
    expect(wrapper.hasClass('container')).toEqual(true)
  })
})