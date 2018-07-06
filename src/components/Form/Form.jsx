/* @flow */
import React from 'react';
import classnames from 'classnames';

type FormProps = {
  className?: string,
  children: React.Node,
  onSubmit?: (e: React.SyntheticEvent) => void | boolean,
  [string]: mixed
};

const Form = ({ className, children, ...props }: FormProps): React.Node => (
  <div className={classnames('form', className)} {...props}>
    {children}
  </div>
);

Form.defaultProps = {
  onSubmit: undefined,
  className: undefined
};


export default Form;
