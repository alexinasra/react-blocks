/* @flow */
import React from 'react';
import classNames from 'classnames';

type CardSectionProps = {
  className?: string,
  children: React.Node,
  direction: 'column' | 'row',
  [string]: mixed
};

const CardSection = ({
  className,
  direction,
  children,
  ...props
}: CardSectionProps): React.Node => (
  <div className={classNames('card-section', direction !== 'row' ? 'column' : 'row', className)} {...props}>
    {children}
  </div>
);
CardSection.defaultProps = {
  className: undefined
};

export default CardSection;
