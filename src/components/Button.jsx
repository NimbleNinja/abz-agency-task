import React from 'react';

const Button = ({ content, classes, handler, disabled }) => {
  return (
    <button
      className={`btn ${classes}`}
      onClick={handler ? handler : null}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
