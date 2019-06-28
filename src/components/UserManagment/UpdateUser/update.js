import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserManagmentActions from "Actions/usermanagment.action";
import { StyledButtonWrapper, Button } from "Components/FormInput/styles";
import SelectBox from "../../SelectComponent/select";
import Inputs from "Components/UserManagment/AddNewUser/Inputs/inputs";
import {
  Wrapper,
  InputWrapper,
  StyledForm
} from "Components/UserManagment/AddNewUser/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledTitle from "./styles";
import ModalLauncher from "../../Modal/modalLauncher";
import { ModalContent } from "../../Modal/styles";
import AlertWindow from "../../AlertWindow/alert";
import { handleAdminsCount } from "../../../utils/utils";
import LoginActions from "../../../redux/actions/login.action";
const iconStyle = {
  color: "#f76f39",
  cursor: "pointer",
  position: "absolute",
  right: 0,
  fontSize: 30,
  width: 60
};

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
    teamName: "",
    teamId: "",
    isLastUser: false,
    adminsCount: 0,
    prevUsername: ""
  };

  componentWillMount() {
    const { user, usersData } = this.props;
    const adminsCount = usersData.filter(
      item => item.roles[0].authority === "ROLE_ADMIN"
    ).length;
    this.setState({
      adminsCount,
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      teamName: user.teamName,

      teamId: user.teamId,
      prevUsername: user.email
    });
  }

  componentDidMount() {
    this.setState({ isLastUser: this.state.adminsCount === 1 });
  }

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
      teamName: e.target.value,
      teamId: e.nativeEvent.target[index].id
    });
  };

  updateActions = () => {
    const { handleLogout, closeModalAction, closeUpdate } = this.props;
    handleLogout();
    closeModalAction(false);
    closeUpdate(false);
  };

  updateUser = e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      role,
      teamName,
      teamId,

      userId,
      prevUsername
    } = this.state;
    const {
      updateUserAction,
      usersData,
      adminsCountAction,
      accessToken
    } = this.props;
    const arr = [];
    const form = {
      email,
      firstName,
      lastName,
      roleName: role,
      teamId,
      teamName
    };

    arr.push(userId, form, accessToken, prevUsername);
    updateUserAction(arr);
    adminsCountAction(handleAdminsCount(usersData));
  };

  render() {
    const {
      themeColor,
      teams,
      closeUpdate,
      responseMessage,
      closeModalAction
    } = this.props;
    const {
      roles,
      role,
      firstName,
      lastName,
      email,
      teamName,
      isLastUser
    } = this.state;
    const teamNames = teams.map(item => ({ ...item, name: item.teamName }));

    return (
      <Wrapper dark={themeColor}>
        <StyledTitle dark={themeColor}>
          Update User
          <FontAwesomeIcon
            onClick={() => {
              closeUpdate(false);
            }}
            style={iconStyle}
            icon="times"
          />
        </StyledTitle>
        <StyledForm
          onSubmit={e => {
            this.updateUser(e);
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
              value={role}
              content={roles}
              dark={themeColor}
              disabled={role === "ROLE_ADMIN" && isLastUser ? true : false}
            />
          </InputWrapper>
          <InputWrapper>
            <SelectBox
              onChange={this.setTeam}
              label="Team:"
              value={teamName}
              content={teamNames}
              dark={themeColor}
            />
          </InputWrapper>
          <InputWrapper>
            <StyledButtonWrapper>
              <Button>Update</Button>
              <ModalLauncher>
                <ModalContent>
                  <AlertWindow
                    text={responseMessage}
                    alertButton
                    confirm="Ok"
                    dark={themeColor}
                    onClick={() => {
                      {
                        responseMessage ===
                        "The user has been successfully updated. You will be logout."
                          ? this.updateActions()
                          : closeModalAction(false);
                      }
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
  closeUpdate: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  updateUserAction: PropTypes.func.isRequired,
  responseMessage: PropTypes.string.isRequired,

  closeModalAction: PropTypes.func.isRequired,
  usersData: PropTypes.arrayOf(PropTypes.any).isRequired
};

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor,
  accessToken: state.loginReducer.accessToken,
  teams: state.teamsReducer,
  user: state.userManagmentReducer.user,

  responseMessage: state.userManagmentReducer.responseMessage,
  usersData: state.userManagmentReducer.usersData
});

const mapDispatchToProps = dispatch => ({
  closeUpdate: data => {
    dispatch(UserManagmentActions.closeUpdate(data));
  },

  updateUserAction: data => {
    dispatch(UserManagmentActions.updateUserAction(data));
  },

  closeModalAction: boolean => {
    dispatch(UserManagmentActions.closeModalAction(boolean));
  },
  adminsCountAction: count => {
    dispatch(UserManagmentActions.adminsCountAction(count));
  },
  handleLogout: (username, password) => {
    dispatch(LoginActions.handleLogout(username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewUser);
