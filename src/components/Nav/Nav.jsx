/* @flow */
import React from 'react';
import type { Node } from 'react';

import classnames from 'classnames';

type NavProps = {
  children: Node,
  className?: string,
  direction?: 'row' | 'column',
  compact?: boolean,
  [string]: mixed
};

const Nav = ({ compact, direction, className, children, ...props }: NavProps): Node => (
  <div className={classnames('nav', { compact }, direction, className)} {...props}>
    {children}
  </div>
);
Nav.defaultProps = {
  className: undefined,
  compact: false,
  direction: 'column'
};

export default Nav;
