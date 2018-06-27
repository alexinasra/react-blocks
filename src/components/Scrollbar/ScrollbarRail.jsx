import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classnames from 'classnames';

import CssClassToggle from '@hocs/CssClassToggle';

const ScrollbarRailInternal = ({ className, ...props }) => {
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
ScrollbarRailInternal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
ScrollbarRailInternal.defaultProps = {
  className: undefined
};
const VerticalScrollbarRailInternal = ({ className, width, style, ...props }) => (
  <ScrollbarRailInternal className={classnames('vertical-rail', className)}
    style={Object.assign({}, style, { width })}
    {...props} />
);

VerticalScrollbarRailInternal.propTypes = {
  className: PropTypes.string,
  style: stylePropType,
  width: PropTypes.number.isRequired
};
VerticalScrollbarRailInternal.defaultProps = {
  className: undefined,
  style: undefined
};
const HorizontalScrollbarRailInternal = ({ className, height, style, ...props }) => (
  <ScrollbarRailInternal className={classnames('horizontal-rail', className)}
    style={Object.assign({}, style, { height })}
    {...props} />
);
HorizontalScrollbarRailInternal.propTypes = {
  className: PropTypes.string,
  style: stylePropType,
  height: PropTypes.number.isRequired
};
HorizontalScrollbarRailInternal.defaultProps = {
  className: undefined,
  style: undefined
};

const onClickHoc = CssClassToggle('onMouseDown', 'onMouseUp', 'mouse-over');
const onHoverHoc = CssClassToggle('onMouseOver', 'onMouseOut', 'mouse-over');

const ScrollbarRail = onHoverHoc(onClickHoc(ScrollbarRailInternal));
const VerticalScrollbarRail = onHoverHoc(onClickHoc(VerticalScrollbarRailInternal));
const HorizontalScrollbarRail = onHoverHoc(onClickHoc(HorizontalScrollbarRailInternal));

export default ScrollbarRail;
export {
  VerticalScrollbarRail,
  HorizontalScrollbarRail
};
