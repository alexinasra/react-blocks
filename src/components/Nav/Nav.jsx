/* @flow */
import React from 'react';
import type { Node } from 'react';

import classnames from 'classnames';

type NavProps = {
  children: Node,
  className?: string,
  direction: 'row' | 'column',
  [string]: mixed
};

const Nav = ({ direction, className, children, ...props }: NavProps): Node => (
  <div className={classnames('nav', direction, className)} {...props}>
    {children}
  </div>
);
Nav.defaultProps = {
  className: undefined
};

export default Nav;
