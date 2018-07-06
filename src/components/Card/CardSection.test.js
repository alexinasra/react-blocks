/* @flow */
import React from 'react';
import type { Node } from 'react';

import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import CardSection from './CardSection';

Enzyme.configure({ adapter: new Adapter() });

describe('<CardSection />', () => {
  const wrapper = shallow((
    <CardSection className="test">
      <span>test</span>
    </CardSection>
  ));
  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('direction column (default)', () => {
    expect(wrapper.is('.column')).to.be.true;
  });
  it('direction row', () => {
    wrapper.setProps({
      direction: 'row'
    });
    expect(wrapper.is('.row')).to.be.true;
  });
  it('has children', () => {
    expect(wrapper.find('span')).to.have.length(1);
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });
});
