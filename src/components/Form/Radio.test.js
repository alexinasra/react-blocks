/* @flow */
import React from 'react';
import type { Node } from 'react';

import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Radio from './Radio';

Enzyme.configure({ adapter: new Adapter() });

describe('<Radio />', () => {
  const wrapper = shallow(<Radio className="test"
    options={[
      { key: 'key1', label: 'label1', value: 'val1' },
      { key: 'key2', label: 'label2', value: 'val2' }
    ]} />);
  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });
});
