import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });
import Avatar from './Avatar';

describe('<Avatar />', () => {
  const wrapper = shallow(<Avatar src="test" className="test-avatar"/>);

  it('exists`', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('has .avatar class`', () => {
    expect(wrapper.is('.avatar')).to.be.true;
  });
  it('has src attribute`', () => {
    expect(wrapper.is('[src="test"]')).to.be.true;
  });
  it('medium (default) size`', () => {
    expect(wrapper.is('.medium')).to.be.true;
  });
  it('small size`', () => {
    wrapper.setProps({ size: 'small'})
    expect(wrapper.is('.small')).to.be.true;
  });
  it('large size`', () => {
    wrapper.setProps({ size: 'large'})
    expect(wrapper.is('.large')).to.be.true;
  });
  it('className', () => {
    expect(wrapper.hasClass('test-avatar')).to.be.true;
  });
})
