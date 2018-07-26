/* @flow */
import React, { Component } from 'react';
import type { Node, SyntheticEvent } from 'react';

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

  componentDidMount() {
    if (this.input) {
      this.input.onmousedown = this.handleOnInputChange;
      this.input.onfocus = this.handleOnInputFocus;
      this.input.onblur = this.handleOnInputBlur;
    }
  }

  handleOnInputFocus() {
    this.setState({ hasFocus: true, isTouched: true });
  }

  handleOnInputBlur() {
    this.setState({ hasFocus: false });
  }

  handleOnInputChange(e: SyntheticEvent) {
    const { max } = this.props;

    if ((max > 0) && (e.target.value.length > max)) {
      return;
    }
    this.setState({ isDirty: true, value: e.target.value });
  }

  handleLabelClick() {
    this.input.focus();
  }

  render(): Node {
    const {
      className,
      disabled,
      label,
      fixedLabel,
      helperText,
      lines,
      type,
      hint,
      max,
      min
    } = this.props;

    const {
      isTouched,
      isDirty,
      value,
      hasFocus
    } = this.state;

    return (
      <FieldContainer className={classnames('text-field', className)}
        disabled={disabled}
        touched={isTouched}
        dirty={isDirty}
        focused={hasFocus}
        empty={!value}
        label={label}
        fixedLabel={fixedLabel}
        helperText={helperText}
        onClick={this.handleLabelClick}>
        {
          lines <= 1 ? (
            <input ref={(elm?: Node) => { this.input = elm; }}
              type={type}
              value={value}
              disabled={disabled}
              placeholder={hint} />
          ) : (
            <textarea ref={(elm?: Node) => { this.input = elm; }}
              rows={lines}
              type={type}
              value={value}
              disabled={disabled}
              placeholder={hint} />
          )
        }
        {(max > 0 || min > 0) && (
          <TextCounter className="text-field__counter" text={value || ''} min={min} max={max} />
        )}
      </FieldContainer>
    );
  }
}

export default TextField;
