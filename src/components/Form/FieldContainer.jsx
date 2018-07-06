/* @flow */
import React, { Component } from 'react';
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
  onClick: (e: React.SyntheticEvent) => void | boolean,
  errorList: React.Node,
  children: React.Node,
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
    focused: false
  };

  constructor(props: FieldContainer) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  props: FieldContainerProps;

  handleKeyPress(e: React.SyntheticEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.props.onClick(e);
    }
  }

  render(): React.Node {
    return (
      <div className={classnames(
        'field-container',
        { 'is-disabled': this.props.disabled,
          'is-touched': this.props.touched,
          'is-required': this.props.required,
          'is-dirty': this.props.dirty,
          'has-focus': this.props.focused,
          'has-value': this.props.empty,
          'has-label': this.props.label,
          'fixed-label': this.props.fixedLabel },
        this.props.className
      )}>
        <div className="field-container__input">
          {this.props.children}
        </div>
        {this.props.label && (
          <div className="field-container__label">
            <span
              onClick={this.props.onClick}
              onKeyUp={this.handleKeyPress}
              role="button"
              tabIndex={0}
            >
              {this.props.label}
            </span>
          </div>
        )}
        <BottomLine disabled={this.props.disabled} active={this.props.focused} />
        {this.props.helperText && (
          <div className="field-container__helper-text">
            {this.props.helperText}
          </div>
        )}
        {this.props.errorList && (
          <div className="field-container__error-text">
            {this.props.errorList}
          </div>
        )}
      </div>
    );
  }
}

export default FieldContainer;
