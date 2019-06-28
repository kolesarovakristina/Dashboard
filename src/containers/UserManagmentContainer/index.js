import { connect } from "react-redux";
import UserManagment from "../../components/UserManagment";
import LoginActions from "Actions/login.action";
import UsermanagmentActions from "../../redux/actions/usermanagment.action";

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor,
  accessToken: state.loginReducer.accessToken
});

const mapDispatchToProps = dispatch => ({
  handleLoadTokenFromLocalStorage: () => {
    dispatch(LoginActions.handleLoadTokenFromLocalStorage());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagment);
