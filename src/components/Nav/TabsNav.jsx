/* @flow */
import React from 'react';
import classnames from 'classnames';

import Nav from './Nav';

type TabsNavProps = {
  children: React.Node,
  className?: string,
  [string]: mixed
};

const TabsNav = ({ className, children, ...props }: TabsNavProps): React.Node => (
  <Nav className={classnames('tabs-nav', className)} {...props}>
    {children}
  </Nav>
);

TabsNav.defaultProps = {
  className: undefined
};

export default TabsNav;
