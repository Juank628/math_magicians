import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button(props) {
  const {
    text, clickHandler, color, columns,
  } = props;

  return (
    <button
      type="button"
      className={`${styles.calcButton} ${styles[`calc${color}`]}`}
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
