/* @flow */
import React from 'react';
import classNames from 'classnames';

type ListItemProps = {
  className?: string,
  children: React.Node,
  [string]: mixed
};

const ListItem = ({
  className,
  children,
  ...props
}: ListItemProps): React.Node => (
  <div className={classNames('list-item', className)} {...props}>
    {children}
  </div>
);
ListItem.defaultProps = {
  className: undefined
};


export default ListItem;
