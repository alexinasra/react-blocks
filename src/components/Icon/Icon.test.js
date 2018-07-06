/* @flow */
import React from 'react';
import type { Node } from 'react';

import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Icon from './Icon';

Enzyme.configure({ adapter: new Adapter() });

describe('<Icon />', () => {
  const wrapper = shallow(<Icon className="test" name="menu" />);
  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('icon name', () => {
    expect(wrapper.find('.icon').text()).to.equal('menu');
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });
});
