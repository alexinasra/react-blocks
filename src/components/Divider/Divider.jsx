import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Divider = ({ className, shadow, ...props }) => (
  <div className={classNames('divider', { 'has-shadow': shadow }, className)} {...props}>
    {shadow && <div className="shadow-box" />}
  </div>
);
Divider.propTypes = {
  className: PropTypes.string,
  shadow: PropTypes.bool
};
Divider.defaultProps = {
  className: '',
  shadow: false
};

export default Divider;
