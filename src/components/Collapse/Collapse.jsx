/* @flow */
import React from 'react';
import classnames from 'classnames';

type CollapseProps = {
  children: React.Node,
  collapsed?: boolean,
  className?: string
};

const Collapse = ({
  className,
  collapsed,
  children,
  ...props
}: CollapseProps): React.Node => (
  <div className={classnames('collapse', { 'is-collapsed': collapsed }, className)} {...props}>
    {children}
  </div>
);

Collapse.defaultProps = {
  collapsed: false,
  className: undefined
};

export default Collapse;
