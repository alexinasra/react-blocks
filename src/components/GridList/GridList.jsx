/* @flow */
import React from 'react';
import classnames from 'classnames';

type GridListProps = {
  children: React.Node,
  columns?: number,
  className?: string,
  [string]: mixed
};

const GridList = ({ columns, className, children, ...props }: GridListProps): React.Node => (
  <div className={classnames('gridlist', className)} {...props}>
    {children}
  </div>
);

GridList.defaultProps = {
  className: undefined,
  columns: 1
};
export default GridList;
