/* @flow */
import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import FieldContainer from './FieldContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('<FieldContainer />', () => {
  const wrapper = shallow(<FieldContainer className="test">
    <span>test</span>
  </FieldContainer>);
  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });
});
