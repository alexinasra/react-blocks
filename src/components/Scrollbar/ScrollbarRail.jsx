/* @flow */
import React from 'react';
import classnames from 'classnames';

import CssClassToggle from '@hocs/CssClassToggle';


type ScrollbarRailInternalProps = {
  children: React.Node,
  className?: string,
  [string]: mixed
};

const ScrollbarRailInternal = ({
  className,
  ...props
}: ScrollbarRailInternalProps): React.Node => {
  const classes = [
    'rail',
    className
  ];
  return (
    <div className={classnames(classes)} {...props}>
      { props.children }
    </div>
  );
};
ScrollbarRailInternal.defaultProps = {
  className: undefined
};

type VerticalScrollbarRailInternalProps = {
  className?: string,
  [string]: mixed
};
const VerticalScrollbarRailInternal = ({
  className,
  ...props
}: VerticalScrollbarRailInternalProps): React.Node => (
  <ScrollbarRailInternal className={classnames('vertical-rail', className)}
    {...props} />
);

VerticalScrollbarRailInternal.defaultProps = {
  className: undefined
};
type HorizontalScrollbarRailInternalProps = {
  className?: string,
  [string]: mixed
};

const HorizontalScrollbarRailInternal = ({
  className,
  ...props
}: HorizontalScrollbarRailInternalProps): React.Node => (
  <ScrollbarRailInternal className={classnames('horizontal-rail', className)}
    {...props} />
);

HorizontalScrollbarRailInternal.defaultProps = {
  className: undefined
};
const onHoverHoc = CssClassToggle('onMouseOver', 'onMouseOut', 'mouse-over', 'mouse-out');

const ScrollbarRail = onHoverHoc(ScrollbarRailInternal);
const VerticalScrollbarRail = onHoverHoc(VerticalScrollbarRailInternal);
const HorizontalScrollbarRail = onHoverHoc(HorizontalScrollbarRailInternal);

export default ScrollbarRail;
export {
  VerticalScrollbarRail,
  HorizontalScrollbarRail
};
