import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import Collapse from './Collapse';

describe('<Collapse />', () => {
  const wrapper = shallow((
    <Collapse className="test">
      <span>test</span>
    </Collapse>
  ));

  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('is open (default)', () => {})
  it('can collapse', () => {
    wrapper.setProps({
      collapsed: true
    });
    expect(wrapper.hasClass('is-collapsed')).to.be.true;
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });

});
