/* @flow */
import React, { Component } from 'react';
import classnames from 'classnames';
import Scrollbar from '@components/Scrollbar';
import BottomLine from '@components/BottomLine';

type TextAreaProps = {
  className?: string,
  value?: string,
  label?: string,
  hintText?: string,
  [string]: mixed
};

class TextArea extends Component<TextAreaProps> {
  static defaultProps: TextAreaProps = {
    className: undefined,
    value: '',
    label: undefined,
    hintText: undefined
  };

  constructor(props: TextAreaProps) {
    super(props);
    this.state = {
      value: props.value,
      lines: 5
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.SyntheticEvent) {
    const height = e.target.scrollHeight;

    this.setState({ value: e.target.value, lines: (height / 16) });
  }

  render(): React.Node {
    return (
      <div className={classnames('textarea', this.props.className)}>
        {this.props.label && (
          <div className="label-container">
            <span className="label">
              {this.props.label}
            </span>
          </div>
        )}
        <Scrollbar>
          <textarea
            rows={this.state.lines}
            onChange={this.handleChange}
            value={this.state.value}
            placeholder={this.props.hintText} />
        </Scrollbar>
        <BottomLine active />
      </div>
    );
  }
}
export default TextArea;
