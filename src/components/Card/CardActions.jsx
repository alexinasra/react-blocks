/* @flow */
import React from 'react';
import type { Node } from 'react';

import classNames from 'classnames';

type CardActionsProps = {
  className?: string,
  children: Node,
  [string]: mixed
};
const CardActions = ({
  className,
  children,
  ...props
}: CardActionsProps): Node => (
  <div className={classNames('card-actions', className)} {...props}>
    {children}
  </div>
);

CardActions.defaultProps = {
  className: undefined
};
export default CardActions;
