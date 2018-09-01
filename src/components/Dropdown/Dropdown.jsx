/* @flow */
import React, { Component } from 'react';
import type { Node } from 'react';
import classnames from 'classnames';
import Menu from '@components/Menu';

type DropdownProps = {
  onOpen?: (e: SyntheticEvent) => void | boolean,
  onClose?: (e: SyntheticEvent) => void | boolean,
  onRef?: (e: Node) => void | boolean,
  children: Node,
  className?: string,
  menu: Menu
};

class Dropdown extends Component<DropdownProps> {
  static defaultProps: DropdownProps = {
    className: undefined,
    onRef: () => {},
    onOpen: () => {},
    onClose: () => {}
  };

  constructor(props: DropdownProps) {
    super(props);
    this.state = { isOpen: false };

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    const { onRef } = this.props;
    if (onRef) {
      onRef(this);
    }
  }

  componentWillUnmount() {
    const { onRef } = this.props;
    if (onRef) {
      onRef(undefined);
    }
  }

  setPosition(pos: {
    right: number | string,
    left: number | string,
    up: number | string,
    down: number | string
  }) {
    const tmpPos = { ...pos };
    if (document.dir === 'rtl') {
      tmpPos.right = pos.left;
      tmpPos.left = pos.right;
    }
    this.setState(tmpPos);
  }

  open() {
    const { onOpen } = this.props;
    this.setState({ isOpen: true });
    document.addEventListener('click', this.handleOutsideClick, false);
    if (onOpen) {
      onOpen();
    }
  }

  close() {
    const { onClose } = this.state;

    this.setState({ isOpen: false });
    document.removeEventListener('click', this.handleOutsideClick, false);
    if (onClose) {
      onClose();
    }
  }

  handleOutsideClick(e: SyntheticEvent) {
    // ignore clicks on the component itself
    if (this.domRef && this.domRef.contains(e.target)) {
      return;
    }
    this.close();
  }

  render(): Node {
    const { menu, className, onOpen, onClose, onRef, ...props } = this.props;
    const { isOpen } = this.state;

    return (
      <div ref={(elm?: Node) => { this.domRef = elm; }}
        className={
          classnames(
            'dropdown',
            className,
            { 'is-open': isOpen }
          )}
        {...props}>
        {props.children}
        <div ref={(elm?: Node) => { this.containerDomRef = elm; }}
          className="menu-container">
          {menu}
        </div>
      </div>
    );
  }
}

export default Dropdown;
