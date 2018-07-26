import React from 'react';
import type { Node } from 'react';
import Nav, { NavAction, NavDropdown } from '@components/Nav';
import Menu, { MenuItem } from '@components/Menu';
import Scrollbar from '@components/Scrollbar';


const MenuOne = (props: { [string]: mixed }): Node => (
  <Menu>
    <Scrollbar style={{ height: '100px' }}>
      <MenuItem label="Item 1" />
      <MenuItem label="Item 1" />
      <MenuItem label="Item 1" />
      <MenuItem label="Item 1" />
      <MenuItem label="Item 1" />
      <MenuItem label="Item 1" />
      <MenuItem label="Item 1" />
      <MenuItem label="Item 1" />
    </Scrollbar>
  </Menu>
);

export default (props: { [string]: mixed }): Node => (
  <Nav direction="column" className="app_side-nav">
    <NavDropdown label="Dropdown" menu={<MenuOne />} />
    <NavDropdown label="Dropdown" menu={<MenuOne />} />
    <NavDropdown label="Dropdown" menu={<MenuOne />} />
    <NavDropdown label="Dropdown" menu={<MenuOne />} />
    <NavAction label="Action" />
    <NavAction label="Action" />
    <NavAction label="Action" />
  </Nav>
);
