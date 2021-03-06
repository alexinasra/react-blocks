/* @flow */
import React, { Component } from 'react';
import type { Node, SyntheticEvent } from 'react';

import classnames from 'classnames';
import Scrollbar from '@components/Scrollbar';
import BottomLine from '@components/BottomLine';

type TextAreaProps = {
  className?: string,
  value?: string,
  label?: string,
  hintText?: string,
  onChange?: (value: string) => void,
  [string]: mixed
};

class TextArea extends Component<TextAreaProps> {
  static defaultProps: TextAreaProps = {
    className: undefined,
    value: '',
    label: undefined,
    hintText: undefined,
    onChange: () => {}
  };

  constructor(props: TextAreaProps) {
    super(props);
    this.state = {
      value: props.value,
      lines: 5
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: SyntheticEvent) {
    const height = e.target.scrollHeight;
    const { value } = this.state;
    const { onChange } = this.props;
    if (e.target.value !== value) {
      this.setState({ value: e.target.value, lines: (height / 16) });
      if (onChange) {
        onChange(value);
      }
    }
  }

  render(): Node {
    const {
      label,
      className,
      hintText
    } = this.props;

    const {
      lines,
      value
    } = this.state;

    return (
      <div className={classnames('textarea', className)}>
        {label && (
          <div className="label-container">
            <span className="label">
              {label}
            </span>
          </div>
        )}
        <Scrollbar>
          <textarea
            rows={lines}
            onChange={this.handleChange}
            value={value}
            placeholder={hintText} />
        </Scrollbar>
        <BottomLine active />
      </div>
    );
  }
}
export default TextArea;
