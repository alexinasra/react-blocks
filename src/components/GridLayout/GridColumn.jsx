/* @flow */
import React from 'react';
import classnames from 'classnames';

type GridColumnProps = {
  className?: string,
  span: number | 'grow' | 'GROW',
  children: React.Node,
  [string]: mixed
};

const GridColumn = ({ className, span, children, ...props }: GridColumnProps): React.Node => (
  <div className={classnames(`grid-col-${typeof span === 'string' ? span.toLowerCase() : span}`, className)} {...props}>
    {children}
  </div>
);
GridColumn.defaultProps = {
  className: undefined
};

export default GridColumn;
