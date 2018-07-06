/* @flow */
import React from 'react';
import type { Node } from 'react';

import classNames from 'classnames';
import Icon from '@components/Icon';

type ButtonProps = {
  className?: string,
  label?: string,
  raised?: boolean,
  iconName?: string,
  type?: 'button' | 'submit',
  [key: string]: mixed
};

/* eslint-disable react/button-has-type */
const Button = ({
  className,
  raised,
  iconName,
  label,
  type,
  ...props
}: ButtonProps): Node => (
  <button
    className={classNames('button', { flat: !raised, raised }, className)}
    type={type || 'button'}
    {...props}
  >
    {iconName && <Icon name={iconName} />}
    {
      label && (
        <span className="label">
          {label}
        </span>
      )
    }
  </button>
);
Button.defaultProps = {
  label: undefined,
  raised: false,
  iconName: undefined,
  className: undefined,
  type: 'button'
};

export default Button;
