/* @flow */
import React, { Component } from 'react';
import type { Node, SyntheticEvent } from 'react';
import classnames from 'classnames';

import { LocaleContextConsumer } from '@context/LocaleContext';

import { VerticalScrollbarRail, HorizontalScrollbarRail } from './ScrollbarRail';
import { VerticalScrollbarThumb, HorizontalScrollbarThumb } from './ScrollbarThumb';

type ScrollbarProps = {
  children: Node,
  className?: string,
  direction?: 'ltr' | 'rtl'
};

class Scrollbar extends Component<ScrollbarProps> {
  static defaultProps: ScrollbarProps = {
    className: undefined,
    direction: 'row'
  }

  constructor(props: ScrollbarProps) {
    super(props);
    this.state = {
      hasFocus: false
    };
    this.initVerticalRail = this.initVerticalRail.bind(this);
    this.initHorizontalRail = this.initHorizontalRail.bind(this);
    this.handleOnWheel = this.handleOnWheel.bind(this);
    this.handleMouseOutScrollbar = this.handleMouseOutScrollbar.bind(this);
    this.handleMouseOverScrollbar = this.handleMouseOverScrollbar.bind(this);
    this.handleHorizontalThumbDrag = this.handleHorizontalThumbDrag.bind(this);
    this.handleVerticalThumbDrag = this.handleVerticalThumbDrag.bind(this);
  }

  componentDidMount() {
    this.initHorizontalRail();
    this.initVerticalRail();
  }

  getClientWidth(): number {
    return (this.rootElement ? this.rootElement.clientWidth : 0);
  }

  getClientHeight(): number {
    return (this.rootElement ? this.rootElement.clientHeight : 0);
  }

  getScrollWidth(): number {
    return this.contentElement ? this.contentElement.scrollWidth : 0;
  }

  getScrollHeight(): number {
    return this.contentElement ? this.contentElement.scrollHeight : 0;
  }

  getScrollLeft(): number {
    return this.contentElement ? this.contentElement.scrollLeft : 0;
  }

  getScrollTop(): number {
    return this.contentElement ? this.contentElement.scrollTop : 0;
  }

  getHorizontalThumbHeight(): number {
    const height = this.getClientHeight() * (this.getClientHeight() / this.getScrollHeight());
    return height > 9 ? Math.round(height) : 9;
  }

  getVerticalThumbWidth(): number {
    const ratio = (this.getScrollWidth() / this.getClientWidth());
    const width = (this.getClientWidth() / ratio);
    return width > 9 ? Math.round(width) : 9;
  }

  getMaxTop(): number {
    return this.getClientHeight() - this.getHorizontalThumbHeight() - 18;
  }

  getMaxLeft(): number {
    return this.getClientWidth() - this.getVerticalThumbWidth() - 18;
  }

  rootElement: HTMLElement;

  contentElement: HTMLElement;

  handleOnWheel(e: SyntheticEvent) {
    const { deltaY } = e.nativeEvent;
    let { horizontalPosition } = this.state;
    horizontalPosition += deltaY;

    const maxTop = this.getMaxTop();
    if (horizontalPosition >= 0 && horizontalPosition <= maxTop) {
      e.preventDefault();
      this.scrollTop(horizontalPosition);
    }
  }

  handleMouseOverScrollbar() {
    const { hasFocus } = this.state;
    if (!hasFocus) {
      this.setState({ hasFocus: true });
    }
  }

  handleMouseOutScrollbar() {
    const { hasFocus } = this.state;
    if (hasFocus) {
      this.setState({ hasFocus: false });
    }
  }

  handleHorizontalThumbDrag(e: SyntheticEvent) {
    e.preventDefault();
    // only left mouse button
    if (e.button !== 0) return;

    const { horizontalOffsetY } = this.state;
    const horizontalPosition = (
      e.pageY
      - this.rootElement.getBoundingClientRect().top
      - document.documentElement.scrollTop
      - 8
      - horizontalOffsetY
    );
    this.scrollTop(horizontalPosition);
  }

  scrollTop(horizontalPosition: number) {
    const maxTop = this.getMaxTop();
    if (horizontalPosition >= 0 && horizontalPosition <= maxTop) {
      const percentage = Math.round((horizontalPosition / (maxTop)) * 100);

      this.contentElement.scrollTop = Math.round(
        (percentage * (this.getScrollHeight() - this.getClientHeight())) / 100
      );
      this.setState({ horizontalPosition });
    }
  }

  handleVerticalThumbDrag(e: SyntheticEvent) {
    e.preventDefault();
    // only left mouse button
    if (e.button !== 0) return;
    const { direction } = this.props;
    const { verticalOffsetX } = this.state;
    let verticalPosition = (
      e.pageX
      - this.rootElement.getBoundingClientRect().left
      - 8
      - verticalOffsetX
    );
    if (direction === 'rtl') {
      verticalPosition = this.getClientWidth()
        - this.getVerticalThumbWidth()
        - verticalPosition;
    }
    this.scrollLeft(verticalPosition);
  }

  scrollLeft(verticalPosition: number) {
    const maxLeft = this.getMaxLeft();

    if (verticalPosition >= 0 && verticalPosition <= maxLeft) {
      const percentage = (verticalPosition / maxLeft) * 100;
      const { direction } = this.props;

      if (direction === 'rtl') {
        this.contentElement.scrollLeft = this.getScrollWidth()
           - this.getClientWidth()
           - Math.round(((percentage * (this.getScrollWidth() - this.getClientWidth())) / 100));
      } else {
        this.contentElement.scrollLeft = Math.round((
          (percentage * (this.getScrollWidth() - this.getClientWidth())) / 100));
      }
      this.setState({ verticalPosition });
    }
  }

  initHorizontalRail() {
    this.setState({
      horizontalPosition: 0
    });
  }

  initVerticalRail() {
    this.setState({
      verticalPosition: 0
    });
    this.scrollLeft(0);
  }

  hasHorizontalRail(): boolean {
    return this.getClientHeight() - this.getScrollHeight() < 0;
  }

  hasVerticalRail(): boolean {
    return this.getClientWidth() - this.getScrollWidth() < 0;
  }

  render(): Node {
    const { className, direction, children, ...props } = this.props;
    const { hasFocus, horizontalPosition, verticalPosition } = this.state;

    const classes: string = classnames(
      'scrollbar',
      {
        'has-horizontal': this.hasHorizontalRail(),
        'has-vertical': this.hasVerticalRail(),
        'has-focus': hasFocus
      },
      className
    );

    return (
      <div
        className={classes}
        ref={(elm?: Node) => { this.rootElement = elm; }}
        onMouseOver={this.handleMouseOverScrollbar}
        onMouseOut={this.handleMouseOutScrollbar}
        onFocus={this.handleMouseOverScrollbar}
        onBlur={this.handleMouseOutScrollbar}
        {...props}
      >
        <div
          className="scrollbar-content"
          onWheel={this.handleOnWheel}
          ref={(elm?: Node) => { this.contentElement = elm; }}
        >
          { children }
        </div>
        { this.hasHorizontalRail() && (
          <HorizontalScrollbarRail>
            <HorizontalScrollbarThumb height={this.getHorizontalThumbHeight()}
              top={horizontalPosition}
              draggable
              onMouseDown={(e: SyntheticEvent) => {
                this.setState({ horizontalOffsetY: e.nativeEvent.offsetY });
              }}
              onDragStart={(e: SyntheticEvent) => {
                e.dataTransfer.setDragImage(new Image(), 0, 0);
                e.dataTransfer.setData('text', 'anything');
              }}
              onDrag={this.handleHorizontalThumbDrag} />
          </HorizontalScrollbarRail>
        )}
        { this.hasVerticalRail() && (
          <VerticalScrollbarRail>
            <VerticalScrollbarThumb
              left={verticalPosition}
              width={this.getVerticalThumbWidth()}
              direction={direction}
              draggable
              onMouseDown={(e: SyntheticEvent) => {
                this.setState({ verticalOffsetX: e.nativeEvent.offsetX });
              }}
              onDragStart={(e: SyntheticEvent) => {
                e.dataTransfer.setDragImage(new Image(), 0, 0);
                e.dataTransfer.setData('text', 'anything');
              }}
              onDrag={this.handleVerticalThumbDrag} />
          </VerticalScrollbarRail>
        )}
      </div>
    );
  }
}

export default ((props: { [string]: mixed}): Node => (
  <LocaleContextConsumer>
    {
      (localeContext: { direction: string }): Node => (
        <Scrollbar direction={localeContext.direction} {...props} />)
    }
  </LocaleContextConsumer>
));
