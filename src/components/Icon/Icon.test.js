import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import Icon from './Icon';

describe('<Icon />', () => {
  const wrapper = shallow(
    <Icon className="test" name="menu" />
  )
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
