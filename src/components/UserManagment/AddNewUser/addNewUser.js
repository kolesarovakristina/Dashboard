import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserManagmentActions from "Actions/usermanagment.action";
import { StyledButtonWrapper, Button } from "Components/FormInput/styles";
import SelectBox from "Components/SelectComponent/select";
import { Wrapper, InputWrapper, StyledForm } from "./styles";
import Inputs from "./Inputs/inputs";
import ModalLauncher from "../../Modal/modalLauncher";
import { ModalContent } from "../../Modal/styles";
import AlertWindow from "../../AlertWindow/alert";

class AddNewUser extends Component {
  state = {
    roles: [
      { id: 1, name: "ROLE_USER" },
      { id: 2, name: "ROLE_ADMIN" },
      { id: 3, name: "ROLE_TEAMLEADER" }
    ],
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    teamId: "",
    teamName: ""
  };

  setFirstName = e => {
    this.setState({ firstName: e.target.value });
  };

  setLastName = e => {
    this.setState({ lastName: e.target.value });
  };

  setEmailAddress = e => {
    this.setState({ email: e.target.value });
  };

  setRole = e => {
    this.setState({ role: e.target.value });
  };

  setTeam = e => {
    const index = e.nativeEvent.target.selectedIndex;
    this.setState({
      teamId: e.nativeEvent.target[index].id,
      teamName: e.target.value
    });
  };

  emptyInputs = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      teamId: "",
      teamName: ""
    });
  };

  createNewUser = e => {
    e.preventDefault();
    const { addUserAction } = this.props;
    const { firstName, lastName, email, role, teamId } = this.state;
    const form = {
      firstName,
      lastName,
      email,
      teamId,
      roleName: role
    };
    this.emptyInputs();
    addUserAction(form);
  };

  render() {
    const { themeColor, teams, closeModalAction, responseMessage } = this.props;
    const { roles, role, firstName, lastName, email, teamName } = this.state;
    const teamNamesArr = teams.map(item => ({ ...item, name: item.teamName }));
    return (
      <Wrapper dark={themeColor}>
        <StyledForm
          onSubmit={e => {
            this.createNewUser(e);
          }}
        >
          <Inputs
            dark={themeColor}
            setFirstName={this.setFirstName}
            setLastName={this.setLastName}
            setEmailAddress={this.setEmailAddress}
            firstName={firstName}
            lastName={lastName}
            email={email}
          />
          <InputWrapper>
            <SelectBox
              onChange={this.setRole}
              label="Role:"
              content={roles}
              dark={themeColor}
              value={role}
            />
          </InputWrapper>
          <InputWrapper>
            <SelectBox
              onChange={this.setTeam}
              label="Team:"
              content={teamNamesArr}
              dark={themeColor}
              value={teamName}
            />
          </InputWrapper>
          <InputWrapper>
            <StyledButtonWrapper>
              <Button>Submit</Button>
              <ModalLauncher>
                <ModalContent>
                  <AlertWindow
                    text={responseMessage}
                    alertButton
                    confirm="Ok"
                    dark={themeColor}
                    onClick={() => {
                      closeModalAction(false);
                    }}
                  />
                </ModalContent>
              </ModalLauncher>
            </StyledButtonWrapper>
          </InputWrapper>
        </StyledForm>
      </Wrapper>
    );
  }
}

AddNewUser.propTypes = {
  themeColor: PropTypes.bool.isRequired,
  teams: PropTypes.arrayOf(PropTypes.any).isRequired,
  addUserAction: PropTypes.func.isRequired,
  closeModalAction: PropTypes.func.isRequired,
  responseMessage: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor,
  accessToken: state.loginReducer.accessToken,
  teams: state.teamsReducer,
  responseMessage: state.userManagmentReducer.responseMessage
});

const mapDispatchToProps = dispatch => ({
  addUserAction: userData => {
    dispatch(UserManagmentActions.addUserAction(userData));
  },
  closeModalAction: boolean => {
    dispatch(UserManagmentActions.closeModalAction(boolean));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewUser);
