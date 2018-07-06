/* @flow */
/* eslint-disable  import/prefer-default-export */
import React, { Component } from 'react';
import classnames from 'classnames';


function CssClassToggle(
  onEvent: string = 'onMouseDown',
  offEvent: string = 'onMouseUp',
  onClass: string = 'active',
  offClass: string = undefined
): React.Node {
  return ((WrappedComponent: React.Node): React.Node => (
    class extends Component<{ className?: string }> {
      constructor(props: { [string]: object }) {
        super(props);
        this.state = {
          isOn: false
        };
      }

      render(): React.Node {
        const { className, ...props } = this.props;
        const stateToClass: { [string]: mixed } = {
          [onClass]: this.state.isOn
        };
        if (offClass) {
          stateToClass[offClass] = !this.state.isOn;
        }
        const classes = classnames(stateToClass, className);
        const oldOn = props[onEvent];
        const on = (e: React.SyntheticEvent) => {
          if (!this.state.isOn) {
            this.setState({ isOn: true });
          }
          if (oldOn) {
            oldOn(e);
          }
        };
        props[onEvent] = on;
        const oldOff = props[offEvent];
        const off = (e: React.SyntheticEvent) => {
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
    }
  ));
}

export default CssClassToggle;
