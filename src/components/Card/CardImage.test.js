/* @flow */
import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import CardImage from './CardImage';

Enzyme.configure({ adapter: new Adapter() });

describe('<CardImage />', () => {
  const wrapper = shallow((
    <CardImage src="test" className="test" />
  ));
  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('has image', () => {
    expect(wrapper.find('img[src="test"]')).to.have.length(1);
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });
});
