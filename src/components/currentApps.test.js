import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import CurrentApps from './currentApps'

Enzyme.configure({ adapter: new Adapter() })

describe('test the table compoennt', () => {
  it('should render a table', () => {
    const apps = [{ 'CompanyName': 'acme', Email: 'abcd@xyz.com' }, { 'CompanyName': 'microsoft', Email: 'ms@dos.com' }]
    const wrapper = shallow(<CurrentApps apps={apps} />)
    const rows = wrapper.find('table')
    expect(rows.length).toEqual(1)
    const firstRowColumns = rows.first().find('td').map(column => column.text())
    expect(firstRowColumns[0]).toEqual('acme')
    expect(firstRowColumns[1]).toEqual('abcd@xyz.com')    
  })
})