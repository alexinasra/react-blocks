/* @flow */
import React from 'react';
import type { Node } from 'react';

import classnames from 'classnames';

type GridRowProps = {
  className?: string,
  children: Node,
  [string]: mixed
};

const GridRow = ({ className, children, ...props }: GridRowProps): Node => (
  <div className={classnames('grid-row', className)} {...props}>
    {children}
  </div>
);

GridRow.defaultProps = {
  className: undefined
};

export default GridRow;
