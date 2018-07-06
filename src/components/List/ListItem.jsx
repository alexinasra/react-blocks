/* @flow */
import React from 'react';
import type { Node } from 'react';

import classNames from 'classnames';

type ListItemProps = {
  className?: string,
  children: Node,
  [string]: mixed
};

const ListItem = ({
  className,
  children,
  ...props
}: ListItemProps): Node => (
  <div className={classNames('list-item', className)} {...props}>
    {children}
  </div>
);
ListItem.defaultProps = {
  className: undefined
};


export default ListItem;
