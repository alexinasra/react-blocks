import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Form = ({ className, ...props }) => (
  <div className={classnames('form', className)} {...props}>
    {props.children}
  </div>
);

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func
};
Form.defaultProps = {
  className: '',
  onSubmit: undefined
};
export default Form;
