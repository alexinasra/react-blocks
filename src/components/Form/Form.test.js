import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import Form from './Form';

describe('<Form />', () => {
  const wrapper = shallow(
    <Form className="test">
      <span>test</span>
    </Form>
  )
  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('submit', () => {
    wrapper.setProps({
      onSubmit: e => expect(e.val).to.be.true
    });
    wrapper.simulate('submit', { val: true });
  })
  it('children', () => {
    expect(wrapper.find('span').text()).to.equal('test');
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });
});
