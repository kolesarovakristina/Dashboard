import React from "react";
import PropTypes from "prop-types";
import blackLogo from "Assets/gl_logo.png";
import whiteLogo from "Assets/gl_logo_white.png";
import ToggleMenu from "Components/ToggleMenu/index";
import Logo from "Components/Logo";
import HamburgerMenu from "Components/HamburgerMenu/hamburgerMenu";
import Filter from "Components/Filter/Filter";
import MenuItem from "Components/MenuItem";
import ReloadButton from "Components/ReloadButton";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  Navigation,
  MenuContent,
  ItemsWrapper,
  TogglerWrapper
} from "./styles";
import { isAdmin } from "../../utils/utils";
import Logout from "../Logout/logout";
library.add(faBars, faTimes);

class SideNavbar extends React.Component {
  state = {
    width: "",
    isHidden: true,
    role: null,
    isOpen: false
  };

  componentWillMount() {
    this.setState({ role: JSON.parse(window.localStorage.getItem("role")) });
  }

  componentDidMount() {
    const { fetchFilterData } = this.props;
    fetchFilterData();
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  toggleMenu = () => {
    const { isHidden, isOpen } = this.state;
    if (!isOpen) {
      document.body.classList.add("stopScrolling");
    } else {
      document.body.classList.remove("stopScrolling");
    }
    this.setState({
      isHidden: !isHidden,
      isOpen: !isOpen
    });
  };

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, isOpen: false });
    document.body.classList.remove("stopScrolling");
    this.showOrHideMenu(window.innerWidth);
  };

  showOrHideMenu = width => {
    if (width > 840) {
      this.setState({ isHidden: false });
    } else {
      this.setState({ isHidden: true });
    }
  };

  logoutActions = () => {
    const { handleLogout, closeUpdate, closeModalAction } = this.props;
    handleLogout();
    closeUpdate(false);
    closeModalAction(false);
  };

  render() {
    const { themeColor, sprints, teams, accessToken, reloadData } = this.props;
    const { width, isHidden, role, isOpen } = this.state;

    const loggedUser = accessToken ? (
      <Logout
        dark={themeColor}
        accessToken={accessToken.firstName}
        onClick={this.logoutActions}
      />
    ) : (
      ""
    );
    return (
      <div>
        {width <= 840 ? (
          <div>
            <HamburgerMenu
              logo={themeColor ? blackLogo : whiteLogo}
              click={this.toggleMenu}
              dark={themeColor}
              isHidden={isHidden}
              icon={isOpen ? "times" : "bars"}
            />
            <Navigation isHidden={isHidden} dark={themeColor}>
              <MenuContent className="menuContent" dark={themeColor}>
                <ItemsWrapper>
                  <Filter role={role} sprints={sprints} teams={teams} />
                  <MenuItem
                    themeColor={themeColor}
                    href="/home"
                    title="Home"
                    isAdmin
                  />
                  <MenuItem
                    themeColor={themeColor}
                    href="/usermanagment"
                    title="User Managment"
                    isAdmin={isAdmin()}
                  />
                  <ReloadButton
                    isAdmin={isAdmin()}
                    reloadDataFunc={reloadData}
                  />
                  <TogglerWrapper dark={themeColor}>
                    <ToggleMenu />
                  </TogglerWrapper>
                </ItemsWrapper>
              </MenuContent>
              {loggedUser}
            </Navigation>
          </div>
        ) : (
          <Navigation isHidden={isHidden} dark={themeColor}>
            <MenuContent
              className={themeColor ? "lightMenu" : "darkMenu"}
              dark={themeColor}
            >
              <div style={{ width: "100%" }}>
                <Logo
                  logo={themeColor ? blackLogo : whiteLogo}
                  dark={themeColor}
                />
              </div>
              <ItemsWrapper>
                <Filter role={role} sprints={sprints} teams={teams} />
                <MenuItem
                  themeColor={themeColor}
                  href="/home"
                  title="Home"
                  isAdmin
                  exact
                />
                <MenuItem
                  themeColor={themeColor}
                  href="/usermanagment"
                  title="User Managment"
                  isAdmin={isAdmin()}
                />
                <ReloadButton isAdmin={isAdmin()} reloadDataFunc={reloadData} />

                <TogglerWrapper dark={themeColor}>
                  <ToggleMenu />
                </TogglerWrapper>
              </ItemsWrapper>
            </MenuContent>
            {loggedUser}
          </Navigation>
        )}
      </div>
    );
  }
}

SideNavbar.propTypes = {
  themeColor: PropTypes.bool.isRequired,
  sprints: PropTypes.arrayOf(PropTypes.object).isRequired,
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
  accessToken: PropTypes.objectOf(PropTypes.any),
  handleLogout: PropTypes.func.isRequired,
  fetchFilterData: PropTypes.func.isRequired
};

SideNavbar.defaultProps = {
  accessToken: null
};

export default SideNavbar;
