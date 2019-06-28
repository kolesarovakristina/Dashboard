import React, { Component } from "react";
import Table from "Components/TableComponent";
import { Wrapper } from "Components/Basic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import UserManagmentActions from "Actions/usermanagment.action";
import PropTypes from "prop-types";
import TableIcon from "../styles";
import ModalLauncher from "../../Modal/modalLauncher";
import { ModalContent } from "../../Modal/styles";
import ConfirmWindow from "../../ConfirmWindow/confirm";
import { handleAdminsCount } from "../../../utils/utils";

const iconStyle = {
  color: "#f76f39",
  width: "40px"
};

class UserManagmentTable extends Component {
  state = {
    userID: null,
    columns: [
      {
        path: "id",
        title: "User ID",
        isKey: true,
        hidden: true
      },
      {
        path: "teamId",
        title: "Team ID",
        hidden: true
      },
      {
        path: "firstName",
        title: "First Name",
        dataSort: true,
        filter: { type: "TextFilter" }
      },
      {
        path: "lastName",
        title: "Last Name",
        dataSort: true,
        filter: { type: "TextFilter" }
      },
      {
        title: "Email",
        path: "email",
        dataSort: true,
        filter: { type: "TextFilter" }
      },
      {
        title: "Team Name",
        path: "teamName",
        dataSort: true,
        filter: { type: "TextFilter" }
      },
      {
        title: "Role",
        path: "role",
        dataSort: true
      },
      {
        title: "Edit",
        path: "edit",
        tdStyle: { textAlign: "center", width: 60 },
        thStyle: { textAlign: "center", width: 60 },
        dataFormat: (cell, row) => (
          <span style={{ display: "inline" }}>
            <TableIcon
              onClick={() => {
                this.updateUserData(row);
              }}
            >
              <FontAwesomeIcon style={iconStyle} icon="user-edit" />
            </TableIcon>
          </span>
        )
      },
      {
        title: "Delete",
        path: "delete",
        tdStyle: { textAlign: "center", width: 70 },
        thStyle: { textAlign: "center", width: 70 },
        dataFormat: (cell, row) => {
          if (row.role === "ROLE_ADMIN" && this.props.adminsCount === 1) {
            return "";
          }
          return (
            <span>
              <ModalLauncher
                modalButton={
                  <TableIcon
                    onClick={() => {
                      this.setState({ userID: row.id });
                    }}
                  >
                    <FontAwesomeIcon style={iconStyle} icon="user-minus" />
                  </TableIcon>
                }
              >
                <ModalContent>
                  <ConfirmWindow
                    text="Are you sure you want to delete this user?"
                    yes="Yes"
                    no="No"
                    dark={this.props.themeColor}
                    onClick={e => {
                      this.handleDeleteUser(e);
                    }}
                  />
                </ModalContent>
              </ModalLauncher>
            </span>
          );
        }
      }
    ]
  };

  componentWillMount() {
    const { fetchUsers, usersData, adminsCountAction } = this.props;
    fetchUsers();
    adminsCountAction(handleAdminsCount(usersData));
  }

  componentWillReceiveProps(nextProps, state) {
    const { usersData, adminsCountAction } = this.props;
    if (usersData.length !== nextProps.usersData.length) {
      let count = 0;
      nextProps.usersData.some(item => {
        if (item.roles[0].authority === "ROLE_ADMIN") {
          count++;
        }
      });
      adminsCountAction(count);
    }
  }

  updateUserData = row => {
    const { closeUpdate } = this.props;
    closeUpdate(true, row);
  };

  handleDeleteUser = e => {
    const { closeModalAction, deleteUserAction, usersData } = this.props;
    const { userID } = this.state;
    if (JSON.parse(e.target.value) === true) {
      deleteUserAction(userID);
      closeModalAction(false);
      const adminsCount = usersData.filter(
        item => item.roles[0].authority === "ROLE_ADMIN"
      ).length;
      this.setState({ adminsCount });
    } else {
      closeModalAction(false);
    }
  };

  render() {
    const { usersData, themeColor } = this.props;
    const { columns } = this.state;
    const tableData = usersData.map(item => ({
      ...item,
      role: item.roles[0].name
    }));
    return (
      <div>
        <Wrapper>
          <Table
            themeColor={themeColor}
            data={tableData}
            columns={columns}
            isTable
            isResourcePage
            tableTitle=""
          />
        </Wrapper>
      </div>
    );
  }
}

UserManagmentTable.propTypes = {
  closeUpdate: PropTypes.func.isRequired,
  closeModalAction: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  usersData: PropTypes.objectOf(PropTypes.any).isRequired,
  deleteUserAction: PropTypes.func.isRequired,
  adminsCount: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor,
  isUpdate: state.userManagmentReducer.isUpdate,
  usersData: state.userManagmentReducer.usersData,
  adminsCount: state.userManagmentReducer.adminsCount
});

const mapDispatchToProps = dispatch => ({
  closeUpdate: (data, user) => {
    dispatch(UserManagmentActions.closeUpdate(data, user));
  },
  closeModalAction: boolean => {
    dispatch(UserManagmentActions.closeModalAction(boolean));
  },
  fetchUsers: data => {
    dispatch(UserManagmentActions.fetchUsers(data));
  },
  deleteUserAction: id => {
    dispatch(UserManagmentActions.deleteUserAction(id));
  },
  adminsCountAction: count => {
    dispatch(UserManagmentActions.adminsCountAction(count));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagmentTable);
