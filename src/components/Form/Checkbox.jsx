import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import BottomLine from '../BottomLine';

export default class Checkbox extends Component {
  static propTypes = {
    onRef: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.bool,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool
  };
  static defaultProps = {
    onRef: () => {},
    onChange: () => {},
    value: false,
    className: undefined,
    disabled: false
  };
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }
  handleClick(e) {
    this.toggle();
  }
  toggle() {
    if (!this.props.disabled) {
      this.props.onChange(!this.props.value);
    }
  }
  handleFocus(e) {
    this.setState({ active: true });
  }
  handleBlur(e) {
    this.setState({ active: false });
  }
  handleKeyPress(e) {
    if (e.key === ' ' || e.key === 'Enter') {
      this.toggle();
    }
  }
  render() {
    const {
      onRef,
      label,
      onChange,
      value,
      className,
      disabled,
      ...props } = this.props;
    return (
      <div className={classnames('checkbox', className, { 'is-disabled': disabled })}
        tabIndex={0}
        role="checkbox"
        aria-checked={value}
        aria-labelledby={label}
        onClick={this.handleClick}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        {...props}>
        <Icon name={value ? 'check_box' : 'check_box_outline_blank'} />
        <span className="label">
          {label}
        </span>
        <BottomLine active={this.state.active} disabled={this.props.disabled} />
      </div>
    );
  }
}
