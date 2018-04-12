import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const BottomLine = ({ active, disabled, className, ...props }) => (
  <div className={classnames(
    'bottom-line',
    { active, disabled },
    className
  )}
    {...props}>
    <div className="unactive-line" />
    <div className="active-line" />
    <div className="disabled-line" />
  </div>
);

BottomLine.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
};
BottomLine.defaultProps = {
  active: false,
  disabled: false,
  className: ''
};

export default BottomLine;
