import React from 'react';

const PositionItem = ({ name }) => {
  return (
    <label className="form__positions-item">
      <input type="radio" id={name} name="position" />
      <label className="form__positions-item-label" htmlFor={name} />
      {name}
    </label>
  );
};

export default PositionItem;
