/* @flow */
import React from 'react';
import type { Node } from 'react';

import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Title from './Title';

Enzyme.configure({ adapter: new Adapter() });

describe('<Title />', () => {
  const wrapper = shallow(<Title className="test">test</Title>);
  it('exists', () => {
    expect(wrapper.exists()).to.equal(true);
  });
  it('children', () => {
    expect(wrapper.text()).to.equal('test');
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.equal(true);
  });
});
