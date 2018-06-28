import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classnames from 'classnames';

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
const VerticalScrollbarThumbInternal = ({ className, width, left, style, ...props }) => (
  <ScrollbarThumbInternal className={classnames('vertical-thumb', className)}
    style={Object.assign({}, style, { width, left })}
    {...props} />
);

VerticalScrollbarThumbInternal.propTypes = {
  className: PropTypes.string,
  style: stylePropType,
  width: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired
};
VerticalScrollbarThumbInternal.defaultProps = {
  className: undefined,
  style: undefined
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

const onClickHoc = CssClassToggle('onMouseDown', 'onMouseUp', 'mouse-over');
const onHoverHoc = CssClassToggle('onMouseOver', 'onMouseOut', 'mouse-over');

const ScrollbarThumb = onHoverHoc(onClickHoc(ScrollbarThumbInternal));
const VerticalScrollbarThumb = onHoverHoc(onClickHoc(VerticalScrollbarThumbInternal));
const HorizontalScrollbarThumb = onHoverHoc(onClickHoc(HorizontalScrollbarThumbInternal));

export default ScrollbarThumb;
export {
  VerticalScrollbarThumb,
  HorizontalScrollbarThumb
};
