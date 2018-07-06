/* @flow */
import React from 'react';
import classnames from 'classnames';

type GridLayoutProps = {
  className?: string,
  children: React.Node,
  [string]: mixed
};

const GridLayout = ({ className, children, ...props }: GridLayoutProps): React.Node => (
  <div className={classnames('grid-layout', 'grid-container', className)} {...props}>
    {children}
  </div>
);
GridLayout.defaultProps = {
  className: undefined
};


export default GridLayout;
