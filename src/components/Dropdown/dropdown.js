import React, { Component } from "react";
import Select from "react-select";
import PropTypes from "prop-types";

// const customStyles = {
//   option: (provided, state) => ({
//     // borderBottom: "1px solid black",
//     color: state.isSelected ? "red" : "blue",
//     padding: "5px 10px"
//   }),
//   control: () => ({
//     // none of react-select's styles are passed to <Control />
//     width: "100%",
//     background: "black"
//   }),
//   dropdownIndicator: () => ({
//     display: "inline-block"
//   }),
//   placeholder: () => ({
//     color: "white",
//     fontSize: "1.15em"
//   })
// };

class Dropdown extends Component {
  render() {
    const {
      options, isMulti, closeMenuOnSelect, placeholder, onChange, value
    } = this.props;

    return (
      <Select
        // styles={customStyles}
        value={value}
        onChange={onChange}
        options={options}
        isMulti={isMulti}
        closeMenuOnSelect={closeMenuOnSelect}
        placeholder={placeholder}
      />
    );
  }
}
Dropdown.propTypes = {
  options: PropTypes.objectOf(PropTypes.any).isRequired,
  isMulti: PropTypes.bool,
  closeMenuOnSelect: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

Dropdown.defaultProps = {
  closeMenuOnSelect: false,
  isMulti: false
};
export default Dropdown;
