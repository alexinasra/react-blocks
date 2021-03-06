/* @flow */
import React from 'react';
import type { Node } from 'react';

import classnames from 'classnames';

import CssClassToggle from '@hocs/CssClassToggle';


type ScrollbarRailInternalProps = {
  children: Node,
  className?: string,
  [string]: mixed
};

const ScrollbarRailInternal = ({
  className,
  children,
  ...props
}: ScrollbarRailInternalProps): Node => {
  const classes = [
    'rail',
    className
  ];
  return (
    <div className={classnames(classes)} {...props}>
      { children }
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
}: VerticalScrollbarRailInternalProps): Node => (
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
}: HorizontalScrollbarRailInternalProps): Node => (
  <ScrollbarRailInternal className={classnames('horizontal-rail', className)}
    {...props} />
);

HorizontalScrollbarRailInternal.defaultProps = {
  className: undefined
};
const onHoverHoc = CssClassToggle('onMouseOver', 'onMouseOut', 'mouse-over', 'mouse-out');

const ScrollbarRail:Node = onHoverHoc(ScrollbarRailInternal);
const VerticalScrollbarRail:Node = onHoverHoc(VerticalScrollbarRailInternal);
const HorizontalScrollbarRail:Node = onHoverHoc(HorizontalScrollbarRailInternal);

export default ScrollbarRail;
export {
  VerticalScrollbarRail,
  HorizontalScrollbarRail
};
