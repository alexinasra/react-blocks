/* @flow */
import React from 'react';
import type { Node, SyntheticEvent } from 'react';

import classnames from 'classnames';

type FormProps = {
  className?: string,
  children: Node,
  onSubmit?: (e: SyntheticEvent) => void | boolean,
  [string]: mixed
};

const Form = ({ className, children, ...props }: FormProps): Node => (
  <div className={classnames('form', className)} {...props}>
    {children}
  </div>
);

Form.defaultProps = {
  onSubmit: undefined,
  className: undefined
};


export default Form;
