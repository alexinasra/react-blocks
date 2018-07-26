/* @flow */
import React, { Component } from 'react';
import type { Node, SyntheticEvent } from 'react';

import classnames from 'classnames';

import BottomLine from '@components/BottomLine';

type FieldContainerProps = {
  label?: string,
  className?: string,
  empty?: boolean,
  disabled?: boolean,
  required?: boolean,
  fixedLabel?: boolean,
  helperText?: string,
  touched?: boolean,
  dirty?: boolean,
  focused?: boolean,
  onClick?: (e: SyntheticEvent) => void | boolean,
  errorList?: Node,
  children: Node,
  [string]: mixed
};


class FieldContainer extends Component<FieldContainerProps> {
  static defaultProps: FieldContainerProps = {
    label: undefined,
    className: undefined,
    empty: false,
    disabled: false,
    required: false,
    fixedLabel: false,
    helperText: undefined,
    touched: false,
    dirty: false,
    focused: false,
    errorList: undefined,
    onClick: () => {}
  };

  constructor(props: FieldContainer) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  props: FieldContainerProps;

  handleKeyPress(e: SyntheticEvent) {
    const { onClick } = this.props;
    if (e.key === 'Enter' || e.key === ' ') {
      if (onClick) {
        onClick(e);
      }
    }
  }

  render(): Node {
    const {
      disabled,
      touched,
      required,
      dirty,
      focused,
      empty,
      label,
      fixedLabel,
      helperText,
      errorList,
      className,
      children,
      onClick,
      ...props
    } = this.props;

    return (
      <div
        className={classnames(
          'field-container',
          { 'is-disabled': disabled,
            'is-touched': touched,
            'is-required': required,
            'is-dirty': dirty,
            'has-focus': focused,
            'has-value': empty,
            'has-label': label,
            'fixed-label': fixedLabel },
          className
        )}
        {...props}
      >
        <div className="field-container__input">
          {children}
        </div>
        {label && (
          <div className="field-container__label">
            <span
              onClick={onClick}
              onKeyUp={this.handleKeyPress}
              role="button"
              tabIndex={0}
            >
              {label}
            </span>
          </div>
        )}
        <BottomLine disabled={disabled} active={focused} />
        {helperText && (
          <div className="field-container__helper-text">
            {helperText}
          </div>
        )}
        {errorList && (
          <div className="field-container__error-text">
            {errorList}
          </div>
        )}
      </div>
    );
  }
}

export default FieldContainer;
