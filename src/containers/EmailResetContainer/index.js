import { connect } from "react-redux";
import ResetEmail from "Components/ResetEmail/emailInput";
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
    sendEmailAction: email => {
    dispatch(ForgotPasswordAction.sendEmailAction(email));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetEmail);