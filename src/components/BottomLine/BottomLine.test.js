import React from 'react';
import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });
import BottomLine from './BottomLine';

describe('<BottomLine />', () => {
  const wrapper = mount(<BottomLine className="test" active={false} disabled={false}/>);

  it('exists`', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('has unactive status line', () => {
    expect(wrapper.find('.unactive-line')).to.have.length(1);
  })
  it('has active status line', () => {
    expect(wrapper.find('.active-line')).to.have.length(1);
  })
  it('has disabled status line', () => {
    expect(wrapper.find('.disabled-line')).to.have.length(1);
  })
  it('active prop false', () => {
    expect(wrapper.find('.is-active')).to.have.length(0);
  });
  it('active prop true', () => {
    wrapper.setProps({ active: true })
    expect(wrapper.find('.is-active')).to.have.length(1);
  });
  it('disabled prop', () => {
    expect(wrapper.find('.is-disabled')).to.have.length(0);
  });
  it('disabled prop true', () => {
    wrapper.setProps({ disabled: true })
    expect(wrapper.find('.is-disabled')).to.have.length(1);
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });

})
