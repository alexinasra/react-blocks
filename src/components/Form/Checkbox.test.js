import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import Checkbox from './Checkbox';

describe('<Checkbox />',() => {
  let checkboxRef = undefined;
  const onRef = (ref) => { checkboxRef = ref; };
  const wrapper = shallow(<Checkbox onRef={onRef} label="test" className="test" />)
  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('onRef', () => {
    expect(checkboxRef).to.be.an.instanceOf(Checkbox);
  });
  it('output label', () => {
    expect(wrapper.find('.label').text()).to.equal('test');
  });
  it('toggle', () => {
    wrapper.setProps({
      checked: false,
      onChange: (val) => {
        expect(val).to.be.true
      }
    });
    checkboxRef.toggle();
  });
  it('simulate click event', () => {
    wrapper.setProps({
      checked: false,
      onChange: (val) => {
        expect(val).to.be.true
      }
    });
    wrapper.simulate('click');
  });
  it('simulate keyup event (Enter)', () => {
    wrapper.setProps({
      checked: false,
      onChange: (val) => {
        expect(val).to.be.true
      }
    });
    wrapper.simulate('keyup', { key: 'Enter'});
  });
  it('simulate keyup event (Space)', () => {
    wrapper.setProps({
      checked: false,
      onChange: (val) => {
        expect(val).to.be.true;
      }
    });
    wrapper.simulate('keyup', { key: ' '});
  });
  it('className', () => {
    expect(wrapper.find('.test')).to.have.length(1);
  });

});
