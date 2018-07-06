/* @flow */
import React from 'react';
import type { Node } from 'react';

import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import TextCounter from './TextCounter';

Enzyme.configure({ adapter: new Adapter() });

describe('<TextCounter />', () => {
  const wrapper = shallow(<TextCounter className="test" text="test test" />);
  it('exists', () => {
    expect(wrapper.exists()).to.equal(true);
  });
  it('counts chars', () => {
    expect(wrapper.find('.count').text()).to.equal('9');
  });
  it('counts words', () => {
    wrapper.setProps({
      count: 'word'
    });
    expect(wrapper.find('.count').text()).to.equal('2');
  });
  it('is long', () => {
    wrapper.setProps({
      count: 'char',
      max: 5
    });
    expect(wrapper.hasClass('is-long')).to.be.true;
  });
  it('is short', () => {
    wrapper.setProps({
      count: 'word',
      max: 10,
      min: 5
    });
    expect(wrapper.hasClass('is-short')).to.be.true;
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.equal(true);
  });
});
