import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardActions = ({
  className,
  ...props
}) => (
  <div className={classNames('card-actions', className)} {...props}>
    {props.children}
  </div>
);
CardActions.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
CardActions.defaultProps = {
  className: ''
};
export default CardActions;
