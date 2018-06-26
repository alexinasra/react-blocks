/* eslint-disable  import/prefer-default-export */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


function CssClassToggle(onEvent = 'onMouseDown', offEvent = 'onMouseUp', onClass = 'active', offClass = undefined) {
  return WrappedComponent => class extends Component {
    static propTypes = {
      className: PropTypes.string
    }
    static defaultProps = {
      className: undefined
    }
    constructor(props) {
      super(props);
      this.state = {
        isOn: false
      };
    }

    render() {
      const { className, ...props } = this.props;
      const stateToClass = {
        [onClass]: this.state.isOn
      };
      if (offClass) {
        stateToClass[offClass] = !this.state.isOn;
      }
      const classes = classnames(stateToClass, className);
      const oldOn = props[onEvent];
      const on = (e) => {
        if (!this.state.isOn) {
          this.setState({ isOn: true });
        }
        if (oldOn) {
          oldOn(e);
        }
      };
      props[onEvent] = on;
      const oldOff = props[offEvent];
      const off = (e) => {
        if (this.state.isOn) {
          this.setState({ isOn: false });
        }
        if (oldOff) {
          oldOff(e);
        }
      };
      props[offEvent] = off;
      return (
        <WrappedComponent className={classes} {...props} />
      );
    }
  };
}

export default CssClassToggle;
