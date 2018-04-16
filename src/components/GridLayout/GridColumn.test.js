import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import GridColumn from './GridColumn';

describe('<GridColumn />', () => {
  const wrapper = shallow(
    <GridColumn className="test">
      <span>test</span>
    </GridColumn>
  )
  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('span 1', () => {
    wrapper.setProps({
      span: 1
    });
    expect(wrapper.hasClass('grid-col-1')).to.be.true;
  });
  it('children', () => {
    expect(wrapper.find('span').text()).to.equal('test');
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });
});
