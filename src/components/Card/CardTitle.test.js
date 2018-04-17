import React from 'react';
import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import CardTitle from './CardTitle';

describe('<CardTitle />', () => {
  const wrapper = mount(<CardTitle className="test" title="test" subheader="test" avatar={<span>test</span>} />);
  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('has title', () => {
    expect(wrapper.find('.title').text()).to.equal('test');
  });
  it('has subheader', () => {
    expect(wrapper.find('.subheader').text()).to.equal('test');
  });
  it('has avatar', () => {
    expect(wrapper.find('.avatar-container')).to.have.length(1);
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });
})