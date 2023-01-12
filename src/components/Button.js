import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    text, clickHandler, color, columns,
  } = props;

  return (
    <button
      type="button"
      className={`calcButton calc${color}`}
      style={{ gridColumnEnd: `span ${columns}` }}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: 'Gray',
  columns: '1',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
  columns: PropTypes.string,
};
