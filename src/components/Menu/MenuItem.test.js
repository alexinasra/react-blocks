import React from 'react';
import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import MenuItem from './MenuItem';

describe('<MenuItem />', () => {
  const wrapper = mount(
    <MenuItem className="test"
      iconName="menu"
      label="test"
      shortcut="test" />
  )
  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('has icon', () => {
    expect(wrapper.find('.icon').text()).to.equal('menu');
  });
  it('has label', () => {
    expect(wrapper.find('.label').text()).to.equal('test');
  });
  it('has shortcut', () => {
    expect(wrapper.find('.shortcut').text()).to.equal('test');
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });
});
