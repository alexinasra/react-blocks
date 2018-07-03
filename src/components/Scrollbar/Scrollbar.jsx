import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { LocaleContextConsumer } from '@context/LocaleContext';

import { VerticalScrollbarRail, HorizontalScrollbarRail } from './ScrollbarRail';
import { VerticalScrollbarThumb, HorizontalScrollbarThumb } from './ScrollbarThumb';

/* eslint-disable react/prop-types */
class Scrollbar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    direction: PropTypes.string
  }

  static defaultProps = {
    className: '',
    direction: 'ltr'
  }

  constructor(props) {
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

  getClientWidth() {
    return this.rootElement ? this.rootElement.clientWidth : 0;
  }

  getClientHeight() {
    return this.rootElement ? this.rootElement.clientHeight : 0;
  }

  getScrollWidth() {
    return this.contentElement ? this.contentElement.scrollWidth : 0;
  }

  getScrollHeight() {
    return this.contentElement ? this.contentElement.scrollHeight : 0;
  }

  getScrollLeft() {
    return this.contentElement ? this.contentElement.scrollLeft : 0;
  }

  getScrollTop() {
    return this.contentElement ? this.contentElement.scrollTop : 0;
  }

  getHorizontalThumbHeight() {
    const height = this.getClientHeight() * (this.getClientHeight() / this.getScrollHeight());
    return height > 9 ? Math.round(height) : 9;
  }

  getVerticalThumbWidth() {
    const ratio = (this.getScrollWidth() / this.getClientWidth());
    const width = (this.getClientWidth() / ratio);
    return width > 9 ? Math.round(width) : 9;
  }

  getMaxTop() {
    return this.getClientHeight() - this.getHorizontalThumbHeight() - 18;
  }

  getMaxLeft() {
    return this.getClientWidth() - this.getVerticalThumbWidth() - 18;
  }

  handleOnWheel(e) {
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

  handleHorizontalThumbDrag(e) {
    e.preventDefault();
    // only left mouse button
    if (e.button !== 0) return;
    const horizontalPosition = (
      e.pageY -
      this.rootElement.getBoundingClientRect().top -
      document.documentElement.scrollTop -
      8 -
      this.state.horizontalOffsetY
    );
    console.log({ ...this.rootElement });
    console.log({
      pageY: e.pageY,
      clientY: e.clientY,
      bodyTop: document.documentElement.scrollTop,
      offsetTop: this.rootElement.getBoundingClientRect().top,
      horizontalOffsetY: this.state.horizontalOffsetY,
      horizontalPosition
    });
    this.scrollTop(horizontalPosition);
  }

  scrollTop(horizontalPosition) {
    const maxTop = this.getMaxTop();
    if (horizontalPosition >= 0 && horizontalPosition <= maxTop) {
      const percentage = Math.round((horizontalPosition / (maxTop)) * 100);

      this.contentElement.scrollTop =
        Math.round((percentage * (this.getScrollHeight() - this.getClientHeight())) / 100);
      this.setState({ horizontalPosition });
    }
  }
  handleVerticalThumbDrag(e) {
    e.preventDefault();
    // only left mouse button
    if (e.button !== 0) return;
    let verticalPosition =
      (
      e.pageX -
      this.rootElement.getBoundingClientRect().left -
      8 -
      this.state.verticalOffsetX
    );
    if (this.props.direction === 'rtl') {
      verticalPosition = this.getClientWidth() -
        this.getVerticalThumbWidth()
        - verticalPosition;
    }
    this.scrollLeft(verticalPosition);
  }
  scrollLeft(verticalPosition) {
    const maxLeft = this.getMaxLeft();
    if (verticalPosition >= 0 && verticalPosition <= maxLeft) {
      const percentage = (verticalPosition / maxLeft) * 100;
      if (this.props.direction === 'rtl') {
        this.contentElement.scrollLeft = this.getScrollWidth() -
           this.getClientWidth() -
           Math.round((
          (percentage * (this.getScrollWidth() - this.getClientWidth())) / 100));
      } else {
        this.contentElement.scrollLeft = Math.round((
          (percentage * (this.getScrollWidth() - this.getClientWidth())) / 100));
      }
      this.setState({ verticalPosition });
    }
  }
  initHorizontalRail(show = false) {
    this.setState({
      hasHorizontalRail: show,
      horizontalPosition: 0
    });
  }

  initVerticalRail(show = false) {
    this.setState({
      hasVerticalRail: show,
      verticalPosition: 0
    });
    this.scrollLeft(0);
  }

  hasHorizontalRail() {
    return this.getClientHeight() - this.getScrollHeight() < 0;
  }

  hasVerticalRail() {
    return this.getClientWidth() - this.getScrollWidth() < 0;
  }

  render() {
    const { className, direction, ...props } = this.props;
    const classes = classnames(
      'scrollbar',
      {
        'has-horizontal': this.state.hasHorizontalRail,
        'has-vertical': this.state.hasVerticalRail,
        'has-focus': this.state.hasFocus
      },
      className
    );

    return (
      <div className={classes}
        ref={(elm) => { this.rootElement = elm; }}
        onMouseOver={this.handleMouseOverScrollbar}
        onMouseOut={this.handleMouseOutScrollbar}
        onFocus={this.handleMouseOverScrollbar}
        onBlur={this.handleMouseOutScrollbar}
        {...props}>
        <div className="scrollbar-content"
          onWheel={this.handleOnWheel}
          ref={(elm) => { this.contentElement = elm; }}>
          { this.props.children }
        </div>
        { this.state.hasHorizontalRail &&
          (
            <HorizontalScrollbarRail>
              <HorizontalScrollbarThumb height={this.getHorizontalThumbHeight()}
                top={this.state.horizontalPosition}
                draggable
                onMouseDown={(e) => {
                  this.setState({ horizontalOffsetY: e.nativeEvent.offsetY });
                }}
                onDragStart={(e) => {
                  e.dataTransfer.setDragImage(new Image(), 0, 0);
                  e.dataTransfer.setData('text', 'anything');
                }}
                onDrag={this.handleHorizontalThumbDrag} />
            </HorizontalScrollbarRail>
          )
        }
        { this.state.hasVerticalRail &&
          (
            <VerticalScrollbarRail>
              <VerticalScrollbarThumb
                left={this.state.verticalPosition}
                width={this.getVerticalThumbWidth()}
                direction={direction}
                draggable
                onMouseDown={(e) => {
                  this.setState({ verticalOffsetX: e.nativeEvent.offsetX });
                }}
                onDragStart={(e) => {
                  e.dataTransfer.setDragImage(new Image(), 0, 0);
                  e.dataTransfer.setData('text', 'anything');
                }}
                onDrag={this.handleVerticalThumbDrag} />
            </VerticalScrollbarRail>
          )
        }
      </div>
    );
  }
}

export default props => (
  <LocaleContextConsumer>
    {localeContext => <Scrollbar direction={localeContext.direction} {...props} />}
  </LocaleContextConsumer>
);
