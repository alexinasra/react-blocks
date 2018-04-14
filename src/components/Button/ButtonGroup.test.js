import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import Button from './Button';
import ButtonGroup from './ButtonGroup';

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
