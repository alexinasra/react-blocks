/* @flow */
import React from 'react';
import classNames from 'classnames';

type CardActionsProps = {
  className?: string,
  children: React.Node,
  [string]: mixed
};
const CardActions = ({
  className,
  ...props
}: CardActionsProps): React.Node => (
  <div className={classNames('card-actions', className)} {...props}>
    {props.children}
  </div>
);

CardActions.defaultProps = {
  className: undefined
};
export default CardActions;
