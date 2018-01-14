import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ButtonGroup = ({ raised, className, ...props }) => (
  <div className={classnames('button_group', className, { raised })}>
    {props.children}
  </div>
);

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  raised: PropTypes.bool
};
ButtonGroup.defaultProps = {
  className: undefined,
  raised: false
};

export default ButtonGroup;
