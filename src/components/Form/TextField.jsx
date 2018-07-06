/* @flow */
import React, { Component } from 'react';
import classnames from 'classnames';

import TextCounter from '@components/TextCounter';
import FieldContainer from './FieldContainer';

type TextFieldProps = {
  label?: string,
  type: 'number' | 'text' | 'password',
  value?: string,
  className?: string,
  disabled?: boolean,
  fixedLabel?: boolean,
  hint?: string,
  helperText?: string,
  max?: number,
  min?: number,
  lines?: number
};

class TextField extends Component<TextFieldProps> {
  static defaultProps: TextFieldProps = {
    max: 0,
    min: 0,
    helperText: undefined,
    hint: undefined,
    fixedLabel: false,
    disabled: false,
    className: undefined,
    value: undefined,
    label: undefined,
    lines: 1
  }

  constructor(props: TextFieldProps) {
    super(props);
    this.state = {
      isDirty: false,
      isTouched: false,
      hasFocus: false,
      value: props.value
    };
    this.handleOnInputFocus = this.handleOnInputFocus.bind(this);
    this.handleOnInputBlur = this.handleOnInputBlur.bind(this);
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
    this.handleLabelClick = this.handleLabelClick.bind(this);
  }

  handleOnInputFocus() {
    this.setState({ hasFocus: true, isTouched: true });
  }

  handleOnInputBlur() {
    this.setState({ hasFocus: false });
  }

  handleOnInputChange(e: React.SyntheticEvent) {
    if ((this.props.max > 0) && (e.target.value.length > this.props.max)) {
      return;
    }
    this.setState({ isDirty: true, value: e.target.value });
  }

  handleLabelClick() {
    this.input.focus();
  }

  render(): React.Node {
    return (
      <FieldContainer className={classnames('text-field', this.props.className)}
        disabled={this.props.disabled}
        touched={this.state.isTouched}
        dirty={this.state.isDirty}
        focused={this.state.hasFocus}
        empty={!this.state.value}
        label={this.props.label}
        fixedLabel={this.props.fixedLabel}
        helperText={this.props.helperText}
        onClick={this.handleLabelClick}>
        {
          this.props.lines <= 1 ? (
            <input ref={(input: React.Node) => { this.input = input; }}
              onFocus={this.handleOnInputFocus}
              onBlur={this.handleOnInputBlur}
              onChange={this.handleOnInputChange}
              type={this.props.type}
              value={this.state.value}
              disabled={this.props.disabled}
              placeholder={this.props.hint} />
          ) : (
            <textarea ref={(input: React.Node) => { this.input = input; }}
              rows={this.props.lines}
              onFocus={this.handleOnInputFocus}
              onBlur={this.handleOnInputBlur}
              onChange={this.handleOnInputChange}
              type={this.props.type}
              value={this.state.value}
              disabled={this.props.disabled}
              placeholder={this.props.hint} />
          )
        }
        {(this.props.max > 0 || this.props.min > 0) && (
          <TextCounter className="text-field__counter" text={this.state.value} min={this.props.min} max={this.props.max} />
        )}
      </FieldContainer>
    );
  }
}

export default TextField;
