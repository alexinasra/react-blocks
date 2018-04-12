import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import BottomLine from '../BottomLine';

export default class Checkbox extends Component {
  static propTypes = {
    onRef: PropTypes.func,
    onChange: PropTypes.func,
    checked: PropTypes.oneOf([true, false, 'mixed']),
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool
  };
  static defaultProps = {
    onRef: () => {},
    onChange: () => {},
    checked: false,
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
  handleKeyPress(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.toggle();
    }
  }
  toggle() {
    if (!this.props.disabled) {
      this.props.onChange(!this.props.checked);
    }
  }
  handleFocus(e) {
    this.setState({ active: true });
  }
  handleBlur(e) {
    this.setState({ active: false });
  }
  render() {
    const {
      onRef,
      label,
      onChange,
      checked,
      className,
      disabled,
      ...props } = this.props;
    let iconName = 'check_box_outline_blank';

    if (checked === 'mixed') {
      iconName = 'indeterminate_check_box';
    } else if (checked) {
      iconName = 'check_box';
    }
    return (
      <div className={classnames('checkbox', className, { 'is-disabled': disabled })}
        tabIndex={0}
        role="checkbox"
        aria-checked={checked}
        onClick={this.handleClick}
        onKeyUp={this.handleKeyPress}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        {...props}>
        <Icon name={iconName} />
        <span className="label">
          {label}
        </span>
        <BottomLine active={this.state.active} disabled={this.props.disabled} />
      </div>
    );
  }
}
