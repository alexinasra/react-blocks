import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import GridRow from './GridRow';

describe('<GridRow />', () => {
  const wrapper = shallow(
    <GridRow className="test">
      <span>test</span>
    </GridRow>
  )
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