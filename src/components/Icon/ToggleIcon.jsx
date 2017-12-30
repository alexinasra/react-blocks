import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ActionIcon from './ActionIcon';

class ToggleIcon extends Component {
  static propTypes = {
    onName: PropTypes.string.isRequired,
    offName: PropTypes.string.isRequired,
    onHoverName: PropTypes.string,
    offHoverName: PropTypes.string,
    on: PropTypes.bool,
    onToggle: PropTypes.func.isRequired
  };
  static defaultProps = {
    onHoverName: '',
    offHoverName: '',
    on: false
  };
  constructor(props) {
    super(props);

    this.state = {
      isOn: props.on
    };

    this.handleClick = this.handleClick.bind(this);
  }

  switchOn() {
    this.setState({
      isOn: true
    });
  }
  switchOff() {
    this.setState({
      isOn: false
    });
  }

  handleClick(e) {
    this.props.onToggle(e);
    if (this.state.isOn) {
      this.switchOff();
    } else {
      this.switchOn();
    }
  }

  render() {
    const name = this.state.isOn ? this.props.onName : this.props.offName;
    const hoverName = this.state.isOn ? this.props.onHoverName : this.props.offHoverName;

    return (
      <ActionIcon name={name}
        hoverName={hoverName}
        onClick={this.handleClick} />
    );
  }
}

export default ToggleIcon;
