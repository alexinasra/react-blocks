/* @flow */
import React from 'react';
import type { Node } from 'react';

import classnames from 'classnames';

import Nav from './Nav';

type TabsNavProps = {
  children: Node,
  className?: string,
  [string]: mixed
};

const TabsNav = ({ className, children, ...props }: TabsNavProps): Node => (
  <Nav className={classnames('tabs-nav', className)} {...props}>
    {children}
  </Nav>
);

TabsNav.defaultProps = {
  className: undefined
};

export default TabsNav;
