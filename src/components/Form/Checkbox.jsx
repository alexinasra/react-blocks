/* @flow */
import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from '@components/Icon';
import BottomLine from '@components/BottomLine';

type CheckboxProps = {
  onRef?: (e: React.SyntheticEvent) => void | boolean,
  onChange?: (e: React.SyntheticEvent) => void | boolean,
  checked: boolean | 'mixed',
  label: string,
  className?: string,
  disabled?: boolean
};

export default class Checkbox extends Component<CheckboxProps> {
  static defaultProps: CheckboxProps = {
    className: undefined
  }
  constructor(props: CheckboxProps) {
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
  handleClick(e: React.SyntheticEvent): React.Node {
    this.toggle();
  }
  handleKeyPress(e: React.SyntheticEvent): React.Node {
    if (e.key === 'Enter' || e.key === ' ') {
      this.toggle();
    }
  }
  toggle(): React.Node {
    if (!this.props.disabled) {
      this.props.onChange(!this.props.checked);
    }
  }
  handleFocus(e: React.SyntheticEvent): React.Node {
    this.setState({ active: true });
  }
  handleBlur(e: React.SyntheticEvent): React.Node {
    this.setState({ active: false });
  }
  render(): React.Dom {
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
