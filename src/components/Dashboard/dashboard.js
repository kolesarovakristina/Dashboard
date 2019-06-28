import React from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import SideNavbarContainer from "Containers/SideNavbarContainer";
import ScoreCardContainer from "../../containers/ScoreCardContainer/index";
import VelocityContainer from "../../containers/VelocityContainer";
import ReliabilityContainer from "../../containers/ReliabilityContainer";
import ResourceContainer from "../../containers/ResourceContainer";
import LoginContainer from "../../containers/LoginContainer/";
import UserManagmentContainer from "../../containers/UserManagmentContainer";
import EnableUserContainer from "../../containers/EnableUserContainer";
import EmailResetContainer from "../../containers/EmailResetContainer";
import ForgotPasswordContainer from "../../containers/ForgotPasswordContainer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faAngleUp,
  faUsersCog,
  faUserPlus,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper, DashboardWrapper, ContentWrapper } from "./style";
import TopMenu from "../TopMenu/index";
import { isRouteOnWhiteList } from "../../utils/utils";
library.add(faAngleDown, faAngleUp, faUsersCog, faUserPlus, faEnvelope);

class Dashboard extends React.Component {
  state = {
    isOnLoginScreen: true,
    width: 0
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    const { handleLoadTokenFromLocalStorage, location, history } = this.props;
    handleLoadTokenFromLocalStorage();
    this.onRouteChanged(location);
    if (location.pathname === "/") {
      history.push("/login");
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    const { handleWindowWidth } = this.props;
    handleWindowWidth(window.innerWidth);
    this.setState({ width: window.innerWidth });
  };

  componentWillReceiveProps(nextProps) {
    const { accessToken, history } = this.props;
    if (accessToken && !nextProps.accessToken) {
      history.push("/login");
    }
    if (location.pathname === "/" && accessToken) {
      history.push("/home");
    }
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      this.onRouteChanged(location);
    }
  }

  onRouteChanged(location) {
    this.setState({
      isOnLoginScreen: location.pathname === "/login"
    });
  }

  render() {
    const { themeColor, accessToken, location } = this.props;
    const route = location.pathname.split("/", 2)[1];

    return (
      <DashboardWrapper dark={themeColor}>
        {!isRouteOnWhiteList(route) &&
          accessToken !== -1 && <SideNavbarContainer />}
        <Wrapper isToken={accessToken} dark={themeColor}>
          <ContentWrapper isToken={accessToken} dark={themeColor}>
            {!isRouteOnWhiteList(route) && route !== "usermanagment" ? (
              <TopMenu themeColor={themeColor} />
            ) : (
              ""
            )}
            <Switch>
              <Route path="/login" component={LoginContainer} />
              <Route path="/home/velocity" component={VelocityContainer} />
              <Route
                path="/home/reliability"
                component={ReliabilityContainer}
              />
              <Route path="/home/resource" component={ResourceContainer} />
              <Route path="/home" component={ScoreCardContainer} />
              <Route path="/usermanagment" component={UserManagmentContainer} />
              <Route
                path="/enableUser/:token"
                component={EnableUserContainer}
              />
              <Route path="/users/token" component={EmailResetContainer} />
              <Route
                path="/token/reset/:token"
                component={ForgotPasswordContainer}
              />
            </Switch>
          </ContentWrapper>
        </Wrapper>
      </DashboardWrapper>
    );
  }
}

Dashboard.propTypes = {
  themeColor: PropTypes.bool.isRequired,
  handleLoadTokenFromLocalStorage: PropTypes.func.isRequired,
  accessToken: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired
};

Dashboard.defaultProps = {
  accessToken: null
};

export default Dashboard;
