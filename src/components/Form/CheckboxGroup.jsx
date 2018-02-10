import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CheckboxGroup = ({ labelledBy, className, ...props }) => (
  <div className={classnames('checkbox_group', className)} role="group" aria-labelledby={labelledBy}>
    {props.children}
  </div>
);

CheckboxGroup.propTypes = {
  labelledBy: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
CheckboxGroup.defaultProps = {
  className: undefined
};

export default CheckboxGroup;
