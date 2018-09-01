import React from 'react';
import type { Node } from 'react';
import Nav, { NavAction, NavMenu } from '@components/Nav';
import GridLayout, { GridRow, GridColumn } from '@components/GridLayout';
import Scrollbar from '@components/Scrollbar';
import Title from '@components/Title';
import Avatar from '@components/Avatar';
import { ActionIcon } from '@components/Icon';
import Divider from '@components/Divider';

import AppNav from './AppNav';

type SideNavProps = {
  expanded: boolean
};

export default ({ expanded }: SideNavProps): Node => (
  <aside className="app_side-nav">
    <div className="profile">
      {
        expanded ? (
          <GridLayout>
            <GridRow>
              <GridColumn span="2">
                <Avatar
                  src="https://png.pngtree.com/element_pic/00/16/07/0957805d3cce1b4.jpg" />
              </GridColumn>
              <GridColumn span="grow" className="animated fadeInRightBig">
                <Title>
                  User Name
                </Title>
                <Divider />
                <div>
                  <ActionIcon name="account_box" />
                  <ActionIcon name="settings" />
                  <ActionIcon name="exit_to_app" />
                </div>
              </GridColumn>
            </GridRow>
          </GridLayout>
        ) : (
          <GridLayout>
            <GridRow>
              <GridColumn span="span">
                <Avatar
                  src="https://png.pngtree.com/element_pic/00/16/07/0957805d3cce1b4.jpg" />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn span="grow">
                <Divider />
                <div className="profile_actions">
                  <ActionIcon style={{ fontSize: '14px' }} name="account_box" />
                  <ActionIcon style={{ fontSize: '14px' }} name="settings" />
                  <ActionIcon style={{ fontSize: '14px' }} name="exit_to_app" />
                </div>
              </GridColumn>
            </GridRow>
          </GridLayout>
        )
      }
    </div>
    <Scrollbar>
      <AppNav />
    </Scrollbar>
  </aside>
);
