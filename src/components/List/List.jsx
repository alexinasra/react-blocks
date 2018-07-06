/* @flow */
import React from 'react';
import type { Node } from 'react';

import classNames from 'classnames';

import ListItem from './ListItem';

type ListProps = {
  className?: string,
  children: Node,
  [string]: mixed
};

const List = ({ className, children, ...props }: ListProps): Node => (
  <div className={classNames('list', className)} {...props}>
    {children}
  </div>
);

List.defaultProps = {
  className: undefined
};

export default List;
export {
  ListItem
};
