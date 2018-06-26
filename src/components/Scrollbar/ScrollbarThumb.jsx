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
const VerticalScrollbarThumbInternal = ({ className, width, style, ...props }) => (
  <ScrollbarThumbInternal className={classnames('vertical-thumb', className)}
    style={Object.assign({}, style, { width })}
    {...props} />
);

VerticalScrollbarThumbInternal.propTypes = {
  className: PropTypes.string,
  style: stylePropType,
  width: PropTypes.number.isRequired
};
VerticalScrollbarThumbInternal.defaultProps = {
  className: undefined,
  style: undefined
};
const HorizontalScrollbarThumbInternal = ({ className, height, style, ...props }) => (
  <ScrollbarThumbInternal className={classnames('horizontal-thumb', className)}
    style={Object.assign({}, style, { height })}
    {...props} />
);
HorizontalScrollbarThumbInternal.propTypes = {
  className: PropTypes.string,
  style: stylePropType,
  height: PropTypes.number.isRequired
};
HorizontalScrollbarThumbInternal.defaultProps = {
  className: undefined,
  style: undefined
};

const onHoverHoc = CssClassToggle('onMouseDown', 'onMouseUp', 'mouse-down');
const onClickHoc = CssClassToggle('onMouseOver', 'onMouseOut', 'mouse-over');

const ScrollbarThumb = onHoverHoc(onClickHoc(ScrollbarThumbInternal));
const VerticalScrollbarThumb = onHoverHoc(onClickHoc(VerticalScrollbarThumbInternal));
const HorizontalScrollbarThumb = onHoverHoc(onClickHoc(HorizontalScrollbarThumbInternal));

export default ScrollbarThumb;
export {
  VerticalScrollbarThumb,
  HorizontalScrollbarThumb
};
