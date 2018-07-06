/* @flow */
import React from 'react';
import type { Node } from 'react';

import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import CardActions from './CardActions';

Enzyme.configure({ adapter: new Adapter() });

describe('<CardActions />', () => {
  const wrapper = shallow((
    <CardActions className="test">
      <span>test</span>
    </CardActions>
  ));

  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('has children', () => {
    expect(wrapper.find('span')).to.have.length(1);
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });
});
