/* @flow */
import React from 'react';
import classNames from 'classnames';

import ListItem from './ListItem';

type ListProps = {
  className?: string,
  children: React.Node,
  [string]: mixed
};

const List = ({ className, children, ...props }: ListProps): React.Node => (
  <div className={classNames('list', className)} {...props}>
    {children}
  </div>
);


export default List;
export {
  ListItem
};
