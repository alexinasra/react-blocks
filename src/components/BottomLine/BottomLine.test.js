import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });
import BottomLine from './BottomLine';

describe('<BottomLine />', () => {
  const bottomLine = shallow(<BottomLine className="test-avatar"/>);

  it('exists`', () => {
    expect(bottomLine.exists()).to.equal(true);
  });
  it('has unactive status line', () => {
    expect(bottomLine.find('.unactive-line')).to.have.length(1);
  })
  it('has active status line', () => {
    expect(bottomLine.find('.active-line')).to.have.length(1);
  })
  it('has disabled status line', () => {
    expect(bottomLine.find('.disabled-line')).to.have.length(1);
  })
  it('active prop false', () => {
    expect(bottomLine.is('.active')).to.equal(false);
  })
  it('active prop true', () => {
    bottomLine.setProps({ active: true })
    expect(bottomLine.is('.active')).to.equal(true);
  })
  it('disabled prop', () => {
    expect(bottomLine.is('.disabled')).to.equal(false);
  })
  it('disabled prop true', () => {
    bottomLine.setProps({ disabled: true })
    expect(bottomLine.is('.disabled')).to.equal(true);
  })

})
