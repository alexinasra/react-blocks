/* @flow */
import React from 'react';
import classnames from 'classnames';

type TextCounterProps = {
  text: string,
  count: 'char' | 'word',
  max?: number,
  min?: number,
  className?: string,
  [string]: mixed
};

const TextCounter = ({
  text,
  count,
  max,
  min,
  className,
  ...props
}: TextCounterProps): React.Node => {
  const c = count === 'word' ? text.trim().split(' ').length : text.length;
  const postfix = count === 'word' ? ' (words)' : '';
  return (
    <div className={classnames(
      'text-counter',
      {
        'is-long': (c > max && max > 0),
        'is-short': (c < min && min > 0)
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
TextCounter.defaultProps = {
  max: 0,
  min: 0,
  className: undefined
};
export default TextCounter;
