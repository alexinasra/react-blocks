/* @flow */
import React from 'react';
import classNames from 'classnames';

type CardProps = {
  className?: string,
  children: React.Node,
  direction?: 'column' | 'row',
  [string]: mixed
};

const Card = ({ className, direction, children, ...props }: CardProps): React.Node => (
  <div className={classNames('card', direction !== 'row' ? 'column' : 'row', className)} {...props}>
    {children}
  </div>
);
Card.defaultProps = {
  direction: 'column',
  className: undefined
};
export default Card;
