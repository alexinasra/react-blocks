/* @flow */
import React from 'react';
import classNames from 'classnames';

type TitleProps = {
  className?: string,
  children: React.Node,
  [string]: mixed
};

const Title = ({ className, ...props }: TitleProps): React.Node => (
  <span className={classNames('title', className)} {...props}>
    {props.children}
  </span>
);

Title.defaultProps = {
  className: undefined
};

export default Title;
