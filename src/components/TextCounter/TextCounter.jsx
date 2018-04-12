import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextCounter = ({ text, count, max, min, className, ...props }) => {
  const c = count === 'word' ? text.trim().split(' ').length : text.length;
  const postfix = count === 'word' ? ' (words)' : '';
  return (
    <div className={classnames(
      'text-counter',
      {
        'to-long': (c > max && max > 0),
        'to-short': (c < min && min > 0)
      }, className
    )}
      {...props}>
      <span className="count">
        {c}
      </span>
      <span className="out-of">
        / <span className="max">{max}{postfix}</span>
      </span>
    </div>
  );
};

TextCounter.propTypes = {
  text: PropTypes.string.isRequired,
  count: PropTypes.oneOf(['char', 'word']),
  max: PropTypes.number,
  min: PropTypes.number,
  className: PropTypes.string
};
TextCounter.defaultProps = {
  count: 'char',
  max: 0,
  min: 0,
  className: ''
};

export default TextCounter;
