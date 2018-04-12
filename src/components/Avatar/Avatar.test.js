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
    expect(wrapper.exists()).to.equal(true);
  });
  it('has .avatar class`', () => {
    expect(wrapper.is('.avatar')).to.equal(true);
  });
  it('has src attribute`', () => {
    expect(wrapper.is('[src="test"]')).to.equal(true);
  });
  it('medium (default) size`', () => {
    expect(wrapper.is('.medium')).to.equal(true);
  });
  it('small size`', () => {
    wrapper.setProps({ size: 'small'})
    expect(wrapper.is('.small')).to.equal(true);
  });
  it('large size`', () => {
    wrapper.setProps({ size: 'large'})
    expect(wrapper.is('.large')).to.equal(true);
  });
  it('className', () => {
    expect(wrapper.is('.test-avatar')).to.equal(true);
  });
})
