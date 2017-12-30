import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import BottomLine from '../BottomLine';

const FieldContainer = ({ className, ...props }) => (
  <div className={classnames(
    'field-container',
    { 'is-disabled': props.disabled,
      'is-touched': props.touched,
      'is-required': props.required,
      'is-dirty': props.dirty,
      'has-focus': props.focused,
      'has-value': props.empty,
      'has-label': props.label,
      'fixed-label': props.fixedLabel },
    className)}>
    <div className="field-container__input">
      {props.children}
    </div>
    {props.label && (
      <div className="field-container__label">
        <span onClick={props.onClick} role="button" tabIndex={0} >
          {props.label}
        </span>
      </div>
    )}
    <BottomLine disabled={props.disabled} active={props.focused} />
    {props.helperText && (
      <div className="field-container__helper-text">
        {props.helperText}
      </div>
    )}
    {props.errorList && (
      <div className="field-container__error-text">
        {props.errorList}
      </div>
    )}
  </div>
);
FieldContainer.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  empty: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  fixedLabel: PropTypes.bool,
  helperText: PropTypes.string,
  touched: PropTypes.bool,
  dirty: PropTypes.bool,
  focused: PropTypes.bool,
  onClick: PropTypes.func,
  errorList: PropTypes.node,
  children: PropTypes.node.isRequired
};
FieldContainer.defaultProps = {
  disabled: false,
  required: false,
  fixedLabel: false,
  touched: false,
  dirty: false,
  focused: false,
  empty: false,
  label: '',
  className: '',
  helperText: '',
  errorList: false,
  onClick: () => {}
};

export default FieldContainer;
