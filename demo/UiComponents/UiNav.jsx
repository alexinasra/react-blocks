import React from 'react';

import Nav, {
  NavRouterLink,
  NavAction,
  NavMenu
} from '@components/Nav';
import Menu from '@components/Menu';
import GridLayout, { GridRow, GridColumn } from '@components/GridLayout';


export default (): Node => (
  <GridLayout>
    <GridRow>
      <GridColumn span={3}>
        <div style={{ width: '120px' }}>
          <Nav direction="column">
            <NavAction iconName="menu" label="Menu" />
            <NavMenu
              iconName="menu"
              label="Drop Down">
              <NavAction iconName="menu" label="Menu" />
              <NavAction iconName="menu" label="Menu" />
              <NavAction label="Menu" />
              <NavAction iconName="menu" label="Menu" />
            </NavMenu>
            <NavAction iconName="menu" label="Menu" />
            <NavAction label="Menu" />
            <NavAction iconName="menu" label="Menu" />
            <NavMenu
              iconName="menu"
              label="Drop Down">
              <NavAction iconName="menu" label="Menu" />
              <NavAction iconName="menu" label="Menu" />
              <NavAction label="Menu" />
              <NavAction iconName="menu" label="Menu" />
            </NavMenu>
          </Nav>
        </div>
      </GridColumn>
      <GridColumn span="grow">
        <div>
          <Nav direction="row">
            <NavAction iconName="menu" label="Menu" />
            <NavAction iconName="menu" label="Menu" />
            <NavAction iconName="menu" label="Menu" />
            <NavAction iconName="menu" label="Menu" />
              <NavMenu
                iconName="menu"
                label="Drop Down">
                <NavAction iconName="menu" label="Menu" />
                <NavAction iconName="menu" label="Menu" />
                <NavAction label="Menu" />
                <NavAction iconName="menu" label="Menu" />
              </NavMenu>
          </Nav>
        </div>
      </GridColumn>
    </GridRow>
  </GridLayout>
);
