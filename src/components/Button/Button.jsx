/* @flow */
import React from 'react';
import classNames from 'classnames';
import Icon from '@components/Icon';

type ButtonProps = {
  className?: string,
  label?: string,
  raised?: boolean,
  iconName?: string,
  [string]: mixed
};

const Button = ({
  className,
  raised,
  iconName,
  label,
  ...props
}: ButtonProps): React.Node => (
  <button className={classNames('button', { flat: !raised, raised }, className)} {...props}>
    {iconName && <Icon name={iconName} />}
    {label && <span className="label">{label}</span>}
  </button>
);
Button.defaultProps = {
  label: undefined,
  raised: false,
  iconName: undefined,
  className: undefined
};

export default Button;
