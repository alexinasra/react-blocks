import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import Dropdown from './Dropdown';
import Menu, { MenuItem } from '../Menu';

describe('<Dropdown />', () => {
  let dropdownRef = undefined;
  const onRef = (ref) => { dropdownRef = ref; };
  const wrapper = shallow(
    <Dropdown className="test"
      onRef={onRef}
      menu={
        <Menu>
          <MenuItem iconName="menu" label="Open file"  shortcut="ctrl-o"/>
        </Menu>
      }>
      <span>test</span>
    </Dropdown>
  );
  it('exists', () => {
    expect(wrapper.exists()).to.be.true;
  });
  it('onRef', () => {
    expect(dropdownRef).to.be.an.instanceof(Dropdown);
  })
  it('open', () => {
    let isOpen = false;
    wrapper.setProps({
      onOpen: () => { isOpen = true }
    })
    dropdownRef.open();
    expect(isOpen).to.be.true;
  })

  it('close', () => {
    let isClosed = false;
    wrapper.setProps({
      onClose: () => { isClosed = true }
    })
    dropdownRef.close();
    expect(isClosed).to.be.true;
  })
  it('has children', () => {
    expect(wrapper.find('span')).to.have.length(1);
  });
  it('className', () => {
    expect(wrapper.hasClass('test')).to.be.true;
  });
});
