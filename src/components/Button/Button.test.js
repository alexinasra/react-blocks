import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import Button from './Button';

describe('<Button />', () => {
  const wrapper = shallow(<Button className="test" />)

  it('exists', () => {
    expect(wrapper.exists()).to.equal(true);
  });
  it('without Icon', () => {
    expect(wrapper.find('Icon')).to.have.length(0);
  });
  it('with Icon', () => {
    wrapper.setProps({ iconName: 'menu' });
    expect(wrapper.find('Icon')).to.have.length(1);
  });
  it('without labe', () => {
    expect(wrapper.find('.label')).to.have.length(0);
  });
  it('with label', () => {
    wrapper.setProps({ label: 'test' });
    expect(wrapper.find('.label')).to.have.length(1);
  });
  it('can be flat',() => {
    expect(wrapper.is('.flat')).to.equal(true);
  });
  it('can be raised', () => {
    wrapper.setProps({ raised: true });
    expect(wrapper.is('.raised')).to.equal(true);
  });
  it('can\'t be both flat and raised', () => {
    const rIsRaised = wrapper.is('.raised');
    const rIsFlat = wrapper.is('.flat');
    wrapper.setProps({ raised: false })
    const fIsRaised = wrapper.is('.raised');
    const fIsFlat = wrapper.is('.flat');
    expect((rIsRaised && !rIsFlat) && (fIsFlat && !fIsRaised)).to.equal(true);
  })
  it('className', () => {
    expect(wrapper.hasClass('test')).to.equal(true);
  });
})
