import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Title from '@components/Title/Title';
import Subheader from '@components/Subheader';

const CardTitle = ({
  className,
  title,
  subheader,
  avatar,
  ...props
}) => (
  <div className={classNames('card-title', { 'has-avatar': !!avatar, 'has-subheader': !!subheader }, className)} {...props}>
    {avatar && (
      <div className="avatar-container">
        {avatar}
      </div>
    )}
    <div className="text-container">
      <Title>{title}</Title>
      {subheader && <Subheader>{subheader}</Subheader>}
    </div>
  </div>
);
CardTitle.propTypes = {
  className: PropTypes.string,
  avatar: PropTypes.node,
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string
};
CardTitle.defaultProps = {
  className: '',
  avatar: undefined,
  subheader: undefined
};
export default CardTitle;
