import { connect } from "react-redux";
import ForgotPassword from "Components/ForgotPassword/forgot_password";
import ForgotPasswordAction from "Actions/forgotPassword.action";
import UserManagmentActions from "Actions/usermanagment.action";

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor,
  responseMessage: state.enableUserReducer.responseMessage
});

const mapDispatchToProps = dispatch => ({
  closeModalAction: isOpen => {
    dispatch(UserManagmentActions.closeModalAction(isOpen));
  },
    resetPasswordAction: (password, token) => {
    dispatch(ForgotPasswordAction.resetPasswordAction(password, token));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);