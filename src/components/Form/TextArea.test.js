/* @flow */
import React from 'react';
import type { Node } from 'react';

import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import TextArea from './TextArea';

Enzyme.configure({ adapter: new Adapter() });

describe('<TextArea />', () => {
  const wrapper = shallow(<TextArea className="test">
    <span>test</span>
  </TextArea>);
  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });
});
