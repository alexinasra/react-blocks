/* @flow */
import React from 'react';
import classnames from 'classnames';

type BottomLineProps = {
  active?: boolean,
  disabled?: boolean,
  className?: string,
  [string]: mixed
};
const BottomLine = ({
  active,
  disabled,
  className,
  ...props
}: BottomLineProps): React.Node => (
  <div className={classnames(
    'bottom-line',
    { 'is-active': active },
    { 'is-disabled': disabled },
    className
  )}
    {...props}>
    <div className="unactive-line" />
    <div className="active-line" />
    <div className="disabled-line" />
  </div>
);

BottomLine.defaultProps = {
  active: false,
  disabled: false,
  className: undefined
};

export default BottomLine;
