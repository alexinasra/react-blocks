/* @flow */
import React from 'react';
import type { Node } from 'react';

import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import ListItem from './ListItem';

Enzyme.configure({ adapter: new Adapter() });

describe('<ListItem />', () => {
  const wrapper = shallow(<ListItem className="test">
    <span>test</span>
  </ListItem>);
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
