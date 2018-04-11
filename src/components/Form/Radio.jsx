import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';

export default class Radio extends Component {
  static propTypes = {
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.any
    })).isRequired,
    value: PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.any
    }),
    onChange: PropTypes.func
  };
  static defaultProps = {
    className: undefined,
    value: undefined,
    onChange: () => {}
  };
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleKeyDown(e) {
    if (e.key.startsWith('Arrow')) {
      let i = this.props.options.findIndex(
        o => (this.props.value && (this.props.value.key === o.key)));

      switch (e.key) {
      case 'ArrowUp':
      case 'ArrowLeft': {
        if (i === 0) {
          i = this.props.options.length - 1;
        } else {
          i -= 1;
        }
        break;
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        if (i === this.props.options.length - 1) {
          i = 0;
        } else {
          i += 1;
        }
        break;
      }
      default:
      }
      this.props.onChange(this.props.options[i]);
    }
  }
  render() {
    const {
      value,
      options,
      className,
      onChange,
      ...props } = this.props;
    const items = options.map((option) => {
      if (option.label) {
        return (
          <div key={option.key}
            className="radio-option"
            role="radio"
            tabIndex={value && (option.key === value.key) ? 0 : -1}
            aria-checked={value && (option.key === value.key)}
            onClick={() => onChange(option)}
            onKeyDown={this.handleKeyDown}>
            <Icon name={value && (option.key === value.key) ? 'radio_button_checked' : 'radio_button_unchecked'} />
            <span className="label">{option.label}</span>
          </div>
        );
      }
      return undefined;
    });
    return (
      <div role="radiogroup" tabIndex={0} className={classnames('radio', className)} {...props}>
        {items}
      </div>
    );
  }
}
