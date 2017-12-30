import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Scrollbar from '../Scrollbar';
import BottomLine from '../BottomLine';

class TextArea extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    hintText: PropTypes.string
  };
  static defaultProps = {
    className: '',
    value: '',
    label: '',
    hintText: ''
  };
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      lines: 5
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const height = e.target.scrollHeight;

    this.setState({ value: e.target.value, lines: (height / 16) });
  }

  render() {
    return (
      <div className={classnames('textarea', this.props.className)}>
        {this.props.label && (
          <div className="label-container">
            <span className="label">{this.props.label}</span>
          </div>
        )}
        <Scrollbar watchSize>
          <textarea
            rows={this.state.lines}
            onChange={this.handleChange}
            value={this.state.value}
            placeholder={this.props.hintText} />
        </Scrollbar>
        <BottomLine active={true} />
      </div>
    );
  }
}
export default TextArea;
