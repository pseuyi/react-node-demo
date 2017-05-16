import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Header from '../app/components/Header'
import { Artists } from '../app/components/Artists'
import { Search } from '../app/components/Search'
import { Footer } from '../app/components/Footer'

describe('<Header />', () => {
  it('renders component', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).to.have.length(1)
  })
})
