import React from "react";
import PropTypes from "prop-types";
import { Wrapper, StyledSelect, Title, StyledOption } from "./styles";

const SelectBox = ({ label, content, onChange, dark, value, disabled }) => (
  <Wrapper>
    <Title>{label}</Title>
    <StyledSelect
      dark={dark}
      onChange={onChange}
      required
      value={value}
      disabled={disabled}
    >
      <StyledOption selected hidden disabled value="">
        None
      </StyledOption>
      {content.map(item => (
        <StyledOption key={item.id} id={item.id} value={item.name}>
          {item.name}
        </StyledOption>
      ))}
    </StyledSelect>
  </Wrapper>
);

SelectBox.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired,
  dark: PropTypes.bool.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool
};

SelectBox.defaultProps = {
  value: null,
  disabled: false
};

export default SelectBox;
