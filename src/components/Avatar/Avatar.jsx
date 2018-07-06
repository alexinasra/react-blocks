/* @flow */
import React from 'react';
import type { Node } from 'react';

import classNames from 'classnames';

type AvatarProps = {
  className?: string,
  src: string,
  size?: 'small' | 'medium' | 'large',
  [string]: mixed
};

const Avatar = ({
  className,
  src,
  size,
  ...props
}: AvatarProps): Node => (
  <img className={classNames('avatar', size, className)}
    src={src}
    alt="avatar"
    {...props} />
);

Avatar.defaultProps = {
  size: 'medium',
  className: undefined
};
export default Avatar;
