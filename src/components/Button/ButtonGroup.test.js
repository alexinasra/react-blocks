/* @flow */
import React from 'react';
import type { Node } from 'react';

import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Button from './Button';
import ButtonGroup from './ButtonGroup';

Enzyme.configure({ adapter: new Adapter() });

describe('<ButtonGroup />', () => {
  const wrapper = shallow((
    <ButtonGroup className="test">
      <Button label="Button1" />
      <Button label="Button2" />
    </ButtonGroup>
  ));

  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });
});
