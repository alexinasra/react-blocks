import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CheckboxGroup = ({ className, ...props }) => (
  <div className={classnames('checkbox_group', className)} role="group">
    {props.children}
  </div>
);

CheckboxGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
CheckboxGroup.defaultProps = {
  className: undefined
};

export default CheckboxGroup;
