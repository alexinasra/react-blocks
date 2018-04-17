import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ActionIcon from './ActionIcon';

class ToggleIcon extends Component {
  static propTypes = {
    activeIconName: PropTypes.string.isRequired,
    inactiveIconName: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onToggle: PropTypes.func.isRequired
  };
  static defaultProps = {
    active: false
  };
  constructor(props) {
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

  handleClick(e) {
    this.props.onToggle(e);
    if (this.state.isActive) {
      this.switchOff();
    } else {
      this.switchOn();
    }
  }

  render() {
    const name = this.state.isActive ? this.props.activeIconName : this.props.inactiveIconName;

    return (
      <ActionIcon name={name}
        onClick={this.handleClick} />
    );
  }
}

export default ToggleIcon;
