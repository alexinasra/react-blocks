/* @flow */
import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Divider from './Divider';

Enzyme.configure({ adapter: new Adapter() });

describe('<Divider />', () => {
  const wrapper = shallow(<Divider className="test" />);
  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('add shadow', () => {
    wrapper.setProps({
      shadow: true
    });
    expect(wrapper.find('.shadow-box')).to.have.length(1);
  });
  it('remove shadow', () => {
    wrapper.setProps({
      shadow: false
    });
    expect(wrapper.find('.shadow-box')).to.have.length(0);
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });
});
