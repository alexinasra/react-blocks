/* @flow */
import React from 'react';
import classnames from 'classnames';

type GridRowProps = {
  className?: string,
  children: React.Node,
  [string]: mixed
};

const GridRow = ({ className, ...props }: GridRowProps): React.props => (
  <div className={classnames('grid-row', className)} {...props}>
    {props.children}
  </div>
);

GridRow.defaultProps = {
  className: undefined
};

export default GridRow;
