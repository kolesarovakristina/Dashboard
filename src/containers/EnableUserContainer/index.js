import { connect } from "react-redux";
import EnableUser from "Components/EnableUser/enable_user";
import UserManagmentActions from "Actions/usermanagment.action";
import EnableUserActions from "Actions/enableUser.action";

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor,
  responseMessage: state.enableUserReducer.responseMessage,
  accessToken: state.loginReducer.accessToken
});

const mapDispatchToProps = dispatch => ({
  closeModalAction: isOpen => {
    dispatch(UserManagmentActions.closeModalAction(isOpen));
  },
  enableUserAction: password => {
    dispatch(EnableUserActions.enableUserAction(password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnableUser);
