import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Title from '../Title/Title';
import Subheader from '../Subheader/Subheader';

const CardTitle = ({
  className,
  title,
  subtitle,
  avatar,
  ...props
}) => (
  <div className={classNames('card-title', { 'has-avatar': !!avatar, 'has-subtitle': !!subtitle }, className)} {...props}>
    {avatar && (<div className="avatar-container">
      {avatar}
    </div>)}
    <div className="text-container">
      <Title>{title}</Title>
      {subtitle && <Subheader>{subtitle}</Subheader>}
    </div>
  </div>
);
CardTitle.propTypes = {
  className: PropTypes.string,
  avatar: PropTypes.node,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};
CardTitle.defaultProps = {
  className: '',
  avatar: false,
  subtitle: ''
};
export default CardTitle;
