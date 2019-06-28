import React, { Component } from "react";
import Input from "Components/FormInput";
import PropTypes from "prop-types";

import {
  Title, InputWrapper
} from "../styles";

class Inputs extends Component {
state={
  inputs: [
    {
      id: 0, title: "First Name:", type: "text", placeholder: "Enter first name"
    },
    {
      id: 1, title: "Last Name:", type: "text", placeholder: "Enter last name"
    },
    {
      id: 2, title: "Email Address:", type: "email", placeholder: "Enter email address"
    }
  ]
}

render() {
  const {
    dark, setFirstName, setLastName, setEmailAddress, firstName, lastName, email
  } = this.props;
  const { inputs } = this.state;

  return (
    <div>
      <InputWrapper>
        <Title>
          {inputs[0].title}
        </Title>
        <Input
          onChange={setFirstName}
          type={inputs[0].type}
          placeholder={inputs[0].placeholder}
          dark={dark}
          value={firstName}
          className={dark ? "black" : "white"}
        />
      </InputWrapper>

      <InputWrapper>
        <Title>
          {inputs[1].title}
        </Title>
        <Input
          onChange={setLastName}
          type={inputs[1].type}
          value={lastName}
          placeholder={inputs[1].placeholder}
          dark={dark}
          className={dark ? "black" : "white"}
        />
      </InputWrapper>

      <InputWrapper>
        <Title>
          {inputs[2].title}
        </Title>
        <Input
          onChange={setEmailAddress}
          type={inputs[2].type}
          value={email}
          placeholder={inputs[2].placeholder}
          dark={dark}
          className={dark ? "black" : "white"}
        />
      </InputWrapper>
    </div>
  );
}
}

Inputs.propTypes = {
  dark: PropTypes.bool.isRequired,
  setFirstName: PropTypes.func.isRequired,
  setLastName: PropTypes.func.isRequired,
  setEmailAddress: PropTypes.func.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string
};

Inputs.defaultProps = {
  firstName: "",
  lastName: "",
  email: ""
};


export default Inputs;
