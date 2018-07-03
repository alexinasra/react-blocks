/* eslint-disable react/prop-types */
import React from 'react';

import GridLayout, { GridRow, GridColumn } from '@components/GridLayout';

import AppNav from './AppNav';
import SideNav from './SideNav';

export default (props: { [string]: mixed }): React.Node => (
  <GridLayout>
    <GridRow>
      <GridColumn span="grow">
        <AppNav />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn span={2}>
        <SideNav />
      </GridColumn>
      <GridColumn span="grow">
        {props.children}
      </GridColumn>
    </GridRow>
  </GridLayout>
);
