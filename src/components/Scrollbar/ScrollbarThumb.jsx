/* @flow */
import React from 'react';
import classnames from 'classnames';

import CssClassToggle from '@hocs/CssClassToggle';


type ScrollbarThumbInternalProps = {
  className?: string,
  [string]: mixed
};

const ScrollbarThumbInternal = ({
  className,
  ...props
}: ScrollbarThumbInternalProps): React.Node => {
  const classes = [
    'thumb',
    className
  ];
  return (
    <div className={classnames(classes)} {...props}>
      <div />
    </div>
  );
};
ScrollbarThumbInternal.defaultProps = {
  className: undefined
};

type VerticalScrollbarThumbInternalProps = {
  className?: string,
  style?: undefined | { [string]: mixed },
  width: number,
  left: number,
  direction?: 'ltr' | 'rtl'
};

const VerticalScrollbarThumbInternal = ({
  className,
  width,
  left,
  style,
  direction,
  ...props
}: VerticalScrollbarThumbInternalProps): React.Node => (
  <ScrollbarThumbInternal className={classnames('vertical-thumb', className)}
    style={Object.assign(
      {},
      style,
      { width },
      (
        direction === 'rtl' ? { right: left } : { left }
      )
    )}
    {...props} />
);
VerticalScrollbarThumbInternal.defaultProps = {
  className: undefined,
  direction: 'ltr',
  style: undefined
};


type HorizontalScrollbarThumbInternalProps = {
  className?: string,
  style?: undefined | { [string]: mixed },
  height: number,
  top: number
};
const HorizontalScrollbarThumbInternal = ({
  className,
  height,
  top,
  style,
  ...props
}: HorizontalScrollbarThumbInternalProps): React.Node => (
  <ScrollbarThumbInternal className={classnames('horizontal-thumb', className)}
    style={Object.assign({}, style, { height, top })}
    {...props} />
);
HorizontalScrollbarThumbInternal.defaultProps = {
  className: undefined,
  style: undefined
};

const onDragHoc = CssClassToggle('onDragStart', 'onDragEnd', 'drag-start', 'drag-end');
const onHoverHoc = CssClassToggle('onMouseOver', 'onMouseOut', 'mouse-over', 'mouse-out');

const ScrollbarThumb = onHoverHoc(onDragHoc(ScrollbarThumbInternal));
const VerticalScrollbarThumb = onHoverHoc(onDragHoc(VerticalScrollbarThumbInternal));
const HorizontalScrollbarThumb = onHoverHoc(onDragHoc(HorizontalScrollbarThumbInternal));

export default ScrollbarThumb;
export {
  VerticalScrollbarThumb,
  HorizontalScrollbarThumb
};
