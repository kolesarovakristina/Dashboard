import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { StyledInputWrapper, StyledInput, StyledLabel } from "./styles";

const SelectItem = ({
  value, label, handleChange, themeColor, multi, itemId
}) => (
  <StyledInputWrapper dark={themeColor}>
    <StyledInput
      type="checkbox"
      value={value}
      onChange={() => handleChange(itemId, label)}
      id={`item_${itemId}`}
      style={{ display: multi ? "inline-block" : "none" }}
    />
    <StyledLabel
      id={itemId}
      htmlFor={`item_${itemId}`}
    >
      {label}
    </StyledLabel>
  </StyledInputWrapper>
);

SelectItem.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  themeColor: PropTypes.bool.isRequired,
  multi: PropTypes.bool.isRequired,
  itemId: PropTypes.number.isRequired

};

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor
});

export default connect(mapStateToProps)(SelectItem);
