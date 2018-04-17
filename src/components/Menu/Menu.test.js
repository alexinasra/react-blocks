import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import Menu from './Menu';

describe('<Menu />', () => {
  const wrapper = shallow(
    <Menu className="test">
      <span>test</span>
    </Menu>
  )
  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('children', () => {
    expect(wrapper.find('span').text()).to.equal('test');
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });
});