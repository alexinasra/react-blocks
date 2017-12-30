import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Scrollbar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    vertical: PropTypes.oneOf(['auto', 'visible', 'hidden']),
    horizontal: PropTypes.oneOf(['auto', 'visible', 'hidden']),
    watchSize: PropTypes.bool
  }
  static defaultProps = {
    width: 0,
    className: '',
    vertical: 'auto',
    horizontal: 'auto',
    watchSize: false
  }
  constructor(props) {
    super(props);
    this.handleOnWheel = this.handleOnWheel.bind(this);
    this.handleHMouseDown = this.handleHMouseDown.bind(this);
    this.handleHMouseUp = this.handleHMouseUp.bind(this);
    this.handleHMouseMove = this.handleHMouseMove.bind(this);
    this.handleVMouseDown = this.handleVMouseDown.bind(this);
    this.handleVMouseUp = this.handleVMouseUp.bind(this);
    this.handleVMouseMove = this.handleVMouseMove.bind(this);
    this.adjustSizes = this.adjustSizes.bind(this);
  }

  state = {
    hratio: 0,
    vratio: 0,
    height: 0,
    innerHeigh: 0,
    hbarHeight: 0,
    width: 0,
    innerWidth: 0,
    vbarWidth: 0,
    hbarTopMargin: 0,
    vbarStartMargin: 0,
    vbarStartSide: 'marginLeft',
    hBarVisible: false,
    vBarVisible: false
  }
  componentDidMount() {
    this.scrollAreaElm.style.overflow = 'scroll';
    this.adjustSizes();
    this.scrollAreaElm.style.overflow = 'hidden';
    this.scrollContentElm.addEventListener('resize', this.adjustSizes);
    if (this.props.watchSize)
      this.interval = setInterval(this.adjustSizes, 200);
  }
  componentWillUnmount() {
    if (this.props.watchSize)
      clearInterval(this.interval);
  }
  innerHeigh = 0
  height = 0
  adjustHeight() {
    const innerHeigh = this.scrollAreaElm.scrollHeight;
    const height = this.scrollAreaElm.clientHeight;
    const hratio = (innerHeigh / height);
    const hbarHeight = (height / hratio) - 12;
    const hBarVisible = (this.props.horizontal === 'visible') ||
      ((this.props.horizontal === 'auto') && (height < innerHeigh));

    this.setState({
      hratio, height, innerHeigh, hbarHeight, hBarVisible
    });
    this.scrollTop(this.scrollAreaElm.scrollTop);
  }
  adjustWidth() {
    const innerWidth = this.scrollAreaElm.scrollWidth;
    const width = this.scrollAreaElm.clientWidth;
    const vratio = (innerWidth / width);
    const vbarWidth = (width / vratio) - 15;
    const vBarVisible = (this.props.vertical === 'visible') ||
      ((this.props.vertical === 'auto') && (width < innerWidth));
    let vbarStartSide = 'marginLeft';
    if (document.dir === 'rtl') {
      vbarStartSide = 'marginRight';
    }
    this.setState({
      vratio,
      width,
      innerWidth,
      vbarWidth,
      vBarVisible,
      vbarStartSide,
      vbarStartMargin: document.dir === 'rtl' ? (width - vbarWidth) : 0
    });
  }
  adjustSizes() {
    this.adjustHeight();
    this.adjustWidth();
    this.forceUpdate();
  }
  scrollTop(v) {
    if (!this.state.hBarVisible) return;
    let val = v;
    if (val < 0) val = 0;
    else if (val > (this.state.innerHeigh - this.state.height - 1)) {
      val = (this.state.innerHeigh - this.state.height);
    }
    this.scrollAreaElm.scrollTop = val;
    this.setState({ hbarTopMargin: (val / this.state.hratio) });
  }
  handleOnWheel(e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (e.stopPropagation) { e.stopPropagation(); }
    this.scrollTop(this.scrollAreaElm.scrollTop + (e.deltaY * this.state.hratio));
    this.scrollStart(this.scrollAreaElm.scrollLeft + (-1 * e.deltaX * this.state.vratio));
  }
  handleHMouseMove(e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (e.stopPropagation) { e.stopPropagation(); }
    if (e.clientY === 0) return false;
    this.scrollTop(
      (
        e.clientY - this.scrollAreaElm.getBoundingClientRect().top -
        (this.state.hbarHeight / 2)
      ) * this.state.hratio);
    return false;
  }
  handleHMouseDown(e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (e.stopPropagation) { e.stopPropagation(); }
    document.addEventListener('mouseup', this.handleHMouseUp);
    document.addEventListener('mousemove', this.handleHMouseMove);
  }
  handleHMouseUp(e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (e.stopPropagation) { e.stopPropagation(); }
    document.removeEventListener('mouseup', this.handleHMouseUp);
    document.removeEventListener('mousemove', this.handleHMouseMove);
    e.target.blur();
  }
  scrollStart(v) {
    if (!this.state.vBarVisible) return;

    let val = v;
    if (val < 0) val = 0;
    else if (val > (this.state.innerWidth - this.state.width - 1)) {
      val = (this.state.innerWidth - this.state.width);
    }
    this.scrollAreaElm.scrollLeft = val;
    this.setState({ vbarStartMargin: (val / this.state.vratio) });
  }
  handleVMouseMove(e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (e.stopPropagation) { e.stopPropagation(); }
    this.scrollStart(
      (
        (e.clientX - this.scrollAreaElm.getBoundingClientRect().left) -
        (this.state.vbarWidth / 2)
      ) * this.state.vratio);

    return false;
  }
  handleVMouseDown(e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (e.stopPropagation) { e.stopPropagation(); }
    document.addEventListener('mouseup', this.handleVMouseUp);
    document.addEventListener('mousemove', this.handleVMouseMove);
  }
  handleVMouseUp(e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (e.stopPropagation) { e.stopPropagation(); }
    document.removeEventListener('mouseup', this.handleVMouseUp);
    document.removeEventListener('mousemove', this.handleVMouseMove);
    e.target.blur();
  }
  render() {
    const { vertical, horizontal, className, watchSize, ...props } = this.props;
    return (
      <div className={classnames('scrollbar', className)}
        {...props}>
        {(this.state.vBarVisible) && (
          <div className="scrollbar-vbar">
            <div onMouseDown={this.handleVMouseDown}
              tabIndex={0}
              role="button"
              style={{
                width: `${this.state.vbarWidth}px`,
                marginLeft: `${this.state.vbarStartMargin}px`
              }}
              className="scrollbar-vbar-scroll" />
          </div>
        )}
        {(this.state.hBarVisible) && (
          <div className="scrollbar-hbar">
            <div onMouseDown={this.handleHMouseDown}
              tabIndex={0}
              role="button"
              style={{
                height: `${this.state.hbarHeight}px`,
                marginTop: `${this.state.hbarTopMargin}px`,
                marginBottom: '6px'
              }}
              className="scrollbar-hbar-scroll" />
          </div>
        )}
        <div onWheel={this.handleOnWheel} ref={(elm) => { this.scrollAreaElm = elm; }} className="scrollbar-scrollarea">
          <div className="scrollbar-content">
            <div ref={(elm) => { this.scrollContentElm = elm; }}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Scrollbar;
