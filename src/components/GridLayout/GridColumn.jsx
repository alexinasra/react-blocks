/* @flow */
import React from 'react';
import type { Node } from 'react';

import classnames from 'classnames';

type GridColumnProps = {
  className?: string,
  span: number | 'grow' | 'GROW',
  children: Node,
  [string]: mixed
};

const GridColumn = ({ className, span, children, ...props }: GridColumnProps): Node => (
  <div className={classnames(`grid-col-${typeof span === 'string' ? span.toLowerCase() : span}`, className)} {...props}>
    {children}
  </div>
);
GridColumn.defaultProps = {
  className: undefined
};

export default GridColumn;
