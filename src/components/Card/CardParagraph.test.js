import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import CardParagraph from './CardParagraph';

describe('<CardParagraph />', () => {
  const wrapper = shallow((
    <CardParagraph className="test">
      <span>test</span>
    </CardParagraph>
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
})
