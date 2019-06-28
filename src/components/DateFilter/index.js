import React from "react";

const DateFilter = (month, itemId, label) => (
  <div>
    <input
      type="checkbox"
      value={month}
      id={itemId}
    />
    <label
      id={itemId}
      htmlFor={`item_${itemId}`}
    >
      {label}
    </label>
  </div>
);

export default DateFilter;
