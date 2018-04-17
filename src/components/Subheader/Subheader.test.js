import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import Subheader from './Subheader'

describe('<Subheader />', () => {
  const wrapper = shallow(<Subheader className="test">test</Subheader>);
  it('exists', () => {
    expect(wrapper.exists()).to.equal(true);
  })
  it('children', () => {
    expect(wrapper.text()).to.equal("test");
  })
  it('className', () => {
    expect(wrapper.hasClass('test')).to.equal(true);
  });
});