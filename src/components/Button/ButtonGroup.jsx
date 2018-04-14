import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ButtonGroup = ({ className, ...props }) => (
  <div className={classnames('button_group', className)}>
    {props.children}
  </div>
);

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
ButtonGroup.defaultProps = {
  className: undefined
};

export default ButtonGroup;
