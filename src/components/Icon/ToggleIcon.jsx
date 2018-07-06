/* @flow */
import React, { Component } from 'react';

import ActionIcon from './ActionIcon';

type ToggleIconProps = {
  activeIconName: string,
  inactiveIconName: string,
  active?: boolean,
  onToggle?: (e: React.SyntheticEvent) => void | boolean,
  [string]: mixed
};

type ToggleIconState = {
  isActive: boolean
};

class ToggleIcon extends Component<ToggleIconProps, ToggleIconState> {
  static defaultProps: ToggleIconProps = {
    active: false,
    onToggle: () => {}
  }

  constructor(props: ToggleIconProps) {
    super(props);

    this.state = {
      isActive: props.active
    };

    this.handleClick = this.handleClick.bind(this);
  }

  switchOn() {
    this.setState({
      isActive: true
    });
  }

  switchOff() {
    this.setState({
      isActive: false
    });
  }

  handleClick(e: React.SyntheticEvent) {
    this.props.onToggle(e);
    if (this.state.isActive) {
      this.switchOff();
    } else {
      this.switchOn();
    }
  }

  render(): React.Node {
    const name = this.state.isActive ? this.props.activeIconName : this.props.inactiveIconName;

    return (
      <ActionIcon name={name}
        onClick={this.handleClick} />
    );
  }
}

export default ToggleIcon;
