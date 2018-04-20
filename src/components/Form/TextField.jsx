import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import BottomLine from '@components/BottomLine';
import TextCounter from '@components/TextCounter';
import FieldContainer from './FieldContainer';

class TextField extends Component {
  static propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['number', 'text', 'password']),
    value: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    fixedLabel: PropTypes.bool,
    hint: PropTypes.string,
    helperText: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    lines: PropTypes.number
  }
  static defaultProps = {
    disabled: false,
    fixedLabel: false,
    label: '',
    type: 'text',
    value: '',
    className: '',
    hint: '',
    helperText: '',
    max: 0,
    min: 0,
    lines: 1
  }
  constructor(props) {
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

  handleOnInputFocus(e) {
    this.setState({ hasFocus: true, isTouched: true });
  }
  handleOnInputBlur(e) {
    this.setState({ hasFocus: false });
  }
  handleOnInputChange(e) {
    if ((this.props.max > 0) && (e.target.value.length > this.props.max)) {
      return;
    }
    this.setState({ isDirty: true, value: e.target.value });
  }
  handleLabelClick(e) {
    this.input.focus();
  }
  render() {
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
            <input ref={(input) => { this.input = input; }}
              onFocus={this.handleOnInputFocus}
              onBlur={this.handleOnInputBlur}
              onChange={this.handleOnInputChange}
              type={this.props.type}
              value={this.state.value}
              disabled={this.props.disabled}
              placeholder={this.props.hint} />
          ) : (
            <textarea ref={(input) => { this.input = input; }}
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
