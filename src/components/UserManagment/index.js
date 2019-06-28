import React, { Component } from "react";
import { Wrapper } from "Components/Basic";
import UserManagmentMenu from "Components/UserManagmentMenu";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import AddNewUser from "Components/UserManagment/AddNewUser/addNewUser";
import UpdateUser from "Components/UserManagment/UpdateUser/update";
import Table from "Components/UserManagment/UserManagmentTable";
import { connect } from "react-redux";

class UserManagment extends Component {
  componentWillMount() {
    const { accessToken, history } = this.props;
    if (accessToken === -1) {
      history.push("/login");
    }
  }

  componentWillReceiveProps(nextprops) {
    const { history } = this.props;

    if (nextprops.accessToken === -1) {
      history.push("/login");
    }
  }

  render() {
    const { themeColor, isUpdate } = this.props;
    return (
      <Wrapper dark={themeColor}>
        {isUpdate ? (
          <UpdateUser />
        ) : (
          <div>
            <UserManagmentMenu dark={themeColor} />
            <Switch>
              <Route path="/usermanagment/addnewuser" component={AddNewUser} />
              <Route path="/usermanagment" component={Table} />
            </Switch>
          </div>
        )}
      </Wrapper>
    );
  }
}

UserManagment.propTypes = {
  themeColor: PropTypes.bool.isRequired,
  accessToken: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  isUpdate: PropTypes.bool.isRequired
};

UserManagment.defaultProps = {
  accessToken: null
};

const mapStateToProps = state => ({
  isUpdate: state.userManagmentReducer.isUpdate
});

export default connect(mapStateToProps)(UserManagment);
