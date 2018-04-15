import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import CheckboxGroup from './CheckboxGroup';

describe('<CheckboxGroup />', () => {
  const wrapper = shallow(
    <CheckboxGroup className="test">
      <span>test</span>
    </CheckboxGroup>
  );

  it('exists', () => {
    expect(wrapper.exists());
  });
  it('children', () => {
    expect(wrapper.find('span')).to.have.length(1);
  });
  it('className', () => {
    expect(wrapper.find('.test')).to.have.length(1);
  });

});
