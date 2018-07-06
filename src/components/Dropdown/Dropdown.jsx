/* @flow */
import React, { Component, Element } from 'react';
import type { Node } from 'react';
import classnames from 'classnames';
import Menu from '@components/Menu';

type DropdownProps = {
  onOpen?: (e: SyntheticEvent) => void | boolean,
  onClose?: (e: SyntheticEvent) => void | boolean,
  onRef?: (e: Node) => void | boolean,
  children: Node,
  className?: string,
  menu: Element<Menu>,
  direction?: 'down' | 'up' | 'left' | 'right' | 'upLeft' | 'upRight' | 'downLeft' | 'downRight'
};

class Dropdown extends Component<DropdownProps> {
  static defaultProps: DropdownProps = {
    direction: 'down',
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
    const height = this.domRef ? this.domRef.clientHeight : 0;
    const width = this.domRef ? this.domRef.clientWidth : 0;
    const containerHeight = this.containerDomRef ? this.containerDomRef.clientHeight : 0;
    const containerWidth = this.containerDomRef ? this.containerDomRef.clientWidth : 0;
    const heightDiff = Math.abs(containerHeight - height);
    const widthDiff = Math.abs(containerWidth - width);
    const {
      direction,
      onRef
    } = this.props;
    switch (direction) {
    case 'up':
      this.setPosition({
        right: -widthDiff / 2,
        left: -widthDiff / 2,
        up: 'auto',
        down: 0
      });
      break;
    case 'down':
      this.setPosition({
        right: -widthDiff / 2,
        left: -widthDiff / 2,
        up: 0,
        down: 'auto'
      });
      break;
    case 'left':
      this.setPosition({
        right: 'auto',
        left: 0,
        up: -heightDiff / 2,
        down: -heightDiff / 2
      });
      break;
    case 'right':
      this.setPosition({
        left: 'auto',
        right: 0,
        up: -heightDiff / 2,
        down: -heightDiff / 2
      });
      break;
    case 'upLeft':
      this.setPosition({
        left: 'auto',
        right: 0,
        up: 'auto',
        down: 0
      });
      break;
    case 'upRight':
      this.setPosition({
        right: 'auto',
        left: 0,
        up: 'auto',
        down: 0
      });
      break;
    case 'downLeft':
      this.setPosition({
        left: 'auto',
        right: 0,
        up: 0,
        down: 'auto'
      });
      break;
    case 'downRight':
    default:
      this.setPosition({
        left: 0,
        right: 'auto',
        up: 0,
        down: 'auto'
      });
    }

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
    const { menu, direction, className, onOpen, onClose, onRef, ...props } = this.props;
    const { up, down, right, left, isOpen } = this.state;

    return (
      <div ref={(elm?: Node) => { this.domRef = elm; }}
        className={
          classnames(
            'dropdown',
            className,
            `open-${direction}`,
            { 'is-open': isOpen }
          )}
        {...props}>
        {props.children}
        <div ref={(elm?: Node) => { this.containerDomRef = elm; }}
          style={{
            up,
            down,
            right,
            left }}
          className="menu-container">
          {menu}
        </div>
      </div>
    );
  }
}

export default Dropdown;
