import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ className, raised, label, ...props }) => (
  <button className={classNames('button', { flat: !raised, raised }, className)} {...props}>{label}</button>
);
Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  raised: PropTypes.boolean
};
Button.defaultProps = {
  className: '',
  raised: false
};

export default Button;
