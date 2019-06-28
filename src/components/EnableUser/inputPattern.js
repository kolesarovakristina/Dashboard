import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "Components/FormInput/styles";

const InputPattern = ({
  type,
  value,
  onChange,
  placeholder,
  className,
  dark,
  isLogin,
  minLength,
  maxLength,
  pattern
}) => (
  <StyledInput
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required
    autocomplete="off"
    className={className}
    dark={dark}
    isLogin={isLogin}
    minLength={minLength}
    maxLength={maxLength}
    pattern={pattern}
  />
);

InputPattern.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  dark: PropTypes.bool.isRequired,
  isLogin: PropTypes.bool.isRequired,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  pattern: PropTypes.string
};

InputPattern.defaultProps = {
  value: "",
  minLength: null,
  maxLength: null,
  pattern: ""
};

export default InputPattern;
