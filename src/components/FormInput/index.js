import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./styles";

const FormInput = ({
  type,
  value,
  onChange,
  placeholder,
  className,
  dark,
  isLogin,
  minLength,
  maxLength
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
  />
);

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  dark: PropTypes.bool.isRequired,
  isLogin: PropTypes.bool.isRequired,
  minLength: PropTypes.number,
  maxLength: PropTypes.number
};

FormInput.defaultProps = {
  value: "",
  minLength: null,
  maxLength: null
};

export default FormInput;
