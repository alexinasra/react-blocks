/* @flow */
import React, { Component } from 'react';
import classnames from 'classnames';

import { LocaleContextConsumer } from '@context/LocaleContext';

import { VerticalScrollbarRail, HorizontalScrollbarRail } from './ScrollbarRail';
import { VerticalScrollbarThumb, HorizontalScrollbarThumb } from './ScrollbarThumb';

type ScrollbarProps = {
  children: React.Node,
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
      hasVerticalRail: false,
      hasHorizontalRail: false,
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
    this.initHorizontalRail(this.hasHorizontalRail());
    this.initVerticalRail(this.hasVerticalRail());
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

  rootElement: ?HTMLElement;

  contentElement: ?HTMLElement;

  handleOnWheel(e: React.SyntheticEvent) {
    const { deltaY } = e.nativeEvent;
    const horizontalPosition = this.state.horizontalPosition + deltaY;

    const maxTop = this.getMaxTop();
    if (horizontalPosition >= 0 && horizontalPosition <= maxTop) {
      e.preventDefault();
      this.scrollTop(horizontalPosition);
    }
  }

  handleMouseOverScrollbar() {
    if (!this.state.hasFocus) {
      this.setState({ hasFocus: true });
    }
  }

  handleMouseOutScrollbar() {
    if (this.state.hasFocus) {
      this.setState({ hasFocus: false });
    }
  }

  handleHorizontalThumbDrag(e: React.SyntheticEvent) {
    e.preventDefault();
    // only left mouse button
    if (e.button !== 0) return;
    const horizontalPosition = (
      e.pageY
      - this.rootElement.getBoundingClientRect().top
      - document.documentElement.scrollTop
      - 8
      - this.state.horizontalOffsetY
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

  handleVerticalThumbDrag(e: React.SyntheticEvent) {
    e.preventDefault();
    // only left mouse button
    if (e.button !== 0) return;
    let verticalPosition = (
      e.pageX
      - this.rootElement.getBoundingClientRect().left
      - 8
      - this.state.verticalOffsetX
    );
    if (this.props.direction === 'rtl') {
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
      if (this.props.direction === 'rtl') {
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

  initHorizontalRail(show: boolean = false) {
    this.setState({
      hasHorizontalRail: show,
      horizontalPosition: 0
    });
  }

  initVerticalRail(show: boolean = false) {
    this.setState({
      hasVerticalRail: show,
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

  render(): React.Node {
    const { className, direction, ...props } = this.props;
    const classes: string = classnames(
      'scrollbar',
      {
        'has-horizontal': this.state.hasHorizontalRail,
        'has-vertical': this.state.hasVerticalRail,
        'has-focus': this.state.hasFocus
      },
      className
    );

    return (
      <div
        className={classes}
        ref={(elm: React.Node) => { this.rootElement = elm; }}
        onMouseOver={this.handleMouseOverScrollbar}
        onMouseOut={this.handleMouseOutScrollbar}
        onFocus={this.handleMouseOverScrollbar}
        onBlur={this.handleMouseOutScrollbar}
        {...props}
      >
        <div
          className="scrollbar-content"
          onWheel={this.handleOnWheel}
          ref={(elm: React.Node) => { this.contentElement = elm; }}
        >
          { this.props.children }
        </div>
        { this.hasHorizontalRail() && (
          <HorizontalScrollbarRail>
            <HorizontalScrollbarThumb height={this.getHorizontalThumbHeight()}
              top={this.state.horizontalPosition}
              draggable
              onMouseDown={(e: React.SyntheticEvent) => {
                this.setState({ horizontalOffsetY: e.nativeEvent.offsetY });
              }}
              onDragStart={(e: React.SyntheticEvent) => {
                e.dataTransfer.setDragImage(new Image(), 0, 0);
                e.dataTransfer.setData('text', 'anything');
              }}
              onDrag={this.handleHorizontalThumbDrag} />
          </HorizontalScrollbarRail>
        )}
        { this.hasVerticalRail() && (
          <VerticalScrollbarRail>
            <VerticalScrollbarThumb
              left={this.state.verticalPosition}
              width={this.getVerticalThumbWidth()}
              direction={direction}
              draggable
              onMouseDown={(e: React.SyntheticEvent) => {
                this.setState({ verticalOffsetX: e.nativeEvent.offsetX });
              }}
              onDragStart={(e: React.SyntheticEvent) => {
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

export default ((props: { [string]: mixed}): React.Node => (
  <LocaleContextConsumer>
    {
      (localeContext: { direction: string }): React.Node => (
        <Scrollbar direction={localeContext.direction} {...props} />)
    }
  </LocaleContextConsumer>
));
