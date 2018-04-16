import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const GridColumn = ({ className, span, ...props }) => (
  <div className={classnames(`grid-col-${typeof span === 'string' ? span.toLowerCase() : span}`, className)} {...props}>
    {props.children}
  </div>
);

GridColumn.propTypes = {
  className: PropTypes.string,
  span: PropTypes.oneOfType([PropTypes.number, function TestGrow(props, propName, componentName) {
    if (!/grow/i.test(props[propName])) {
      /* eslint-disable prefer-template */
      return new Error('Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.');
    }
  }]),
  children: PropTypes.node.isRequired
};
GridColumn.defaultProps = {
  className: '',
  span: 'grow'
};

export default GridColumn;
