import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classnames from 'classnames';

import { LocaleContextConsumer } from '@context/LocaleContext';
import CssClassToggle from '@hocs/CssClassToggle';

const ScrollbarThumbInternal = ({ className, ...props }) => {
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
ScrollbarThumbInternal.propTypes = {
  className: PropTypes.string
};
ScrollbarThumbInternal.defaultProps = {
  className: undefined
};
const VerticalScrollbarThumbInternal = ({ className, width, left, style, direction, ...props }) => (
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

VerticalScrollbarThumbInternal.propTypes = {
  className: PropTypes.string,
  style: stylePropType,
  width: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  direction: PropTypes.string
};
VerticalScrollbarThumbInternal.defaultProps = {
  className: undefined,
  style: undefined,
  direction: 'ltr'
};
const HorizontalScrollbarThumbInternal = ({ className, height, top, style, ...props }) => (
  <ScrollbarThumbInternal className={classnames('horizontal-thumb', className)}
    style={Object.assign({}, style, { height, top })}
    {...props} />
);
HorizontalScrollbarThumbInternal.propTypes = {
  className: PropTypes.string,
  style: stylePropType,
  height: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired
};
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
