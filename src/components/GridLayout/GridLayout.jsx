/* @flow */
import React from 'react';
import type { Node } from 'react';

import classnames from 'classnames';

type GridLayoutProps = {
  className?: string,
  children: Node,
  [string]: mixed
};

const GridLayout = ({ className, children, ...props }: GridLayoutProps): Node => (
  <div className={classnames('grid-layout', 'grid-container', className)} {...props}>
    {children}
  </div>
);
GridLayout.defaultProps = {
  className: undefined
};


export default GridLayout;
