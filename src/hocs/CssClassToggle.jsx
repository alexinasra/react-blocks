/* @flow */
/* eslint-disable  import/prefer-default-export */
import React, { Component } from 'react';
import type { Node, SyntheticEvent, ComponentType } from 'react';

import classnames from 'classnames';


function CssClassToggle(
  onEvent: string = 'onMouseDown',
  offEvent: string = 'onMouseUp',
  onClass: string = 'active',
  offClass: string = undefined
): ComponentType {
  return ((WrappedComponent: ComponentType): ComponentType => (
    class extends Component<{ className?: string }> {
      constructor(props: { [string]: object }) {
        super(props);
        this.state = {
          isOn: false
        };
      }

      render(): Node {
        const { className, ...props } = this.props;
        const { isOn } = this.state;
        const stateToClass: { [string]: mixed } = {
          [onClass]: isOn
        };
        if (offClass) {
          stateToClass[offClass] = !isOn;
        }
        const classes = classnames(stateToClass, className);
        const oldOn = props[onEvent];
        const on = (e: SyntheticEvent) => {
          if (!isOn) {
            this.setState({ isOn: true });
          }
          if (oldOn) {
            oldOn(e);
          }
        };
        props[onEvent] = on;
        const oldOff = props[offEvent];
        const off = (e: SyntheticEvent) => {
          if (isOn) {
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
