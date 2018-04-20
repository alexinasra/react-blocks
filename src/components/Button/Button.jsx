import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '@components/Icon';

const Button = ({ className, raised, iconName, label, ...props }) => (
  <button className={classNames('button', { flat: !raised, raised }, className)} {...props}>
    {iconName && <Icon name={iconName} />}
    {label && <span className="label">{label}</span>}
  </button>
);
Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  raised: PropTypes.bool,
  iconName: PropTypes.string
};
Button.defaultProps = {
  className: '',
  raised: false,
  label: undefined,
  iconName: undefined
};

export default Button;
