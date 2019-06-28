import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import StyledLinkComponent from "Components/StyledLinkComponent";
import { withRouter } from "react-router";
import theme from "../../styles/themes/default";
import Wrapper from "./styles";

const activeClassDark = {
  background: theme.darkColor.bgNavbar,
  color: "white",
  fontSize: "1.2em"
};

const activeClassLight = {
  background: "white",
  color: theme.darkColor.bgNavbar,
  fontSize: "1.2em"
};

class TopMenu extends React.Component {
  state = {
    width: 0,
    link: [
      {
        id: 0,
        href: "home",
        name: "Score Card",
        icon: ""
      },
      {
        id: 1,
        href: "home/reliability",
        name: "Reliability",
        icon: ""
      },
      {
        id: 2,
        href: "home/velocity",
        name: "Velocity",
        icon: ""
      },
      {
        id: 3,
        href: "home/resource",
        name: "Resource",
        icon: ""
      }
    ]
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  shorten(label) {
    const { width } = this.state;
    return width < 840 ? label.substring(0, 3) : label;
  }

  render() {
    const { themeColor } = this.props;
    const { link } = this.state;
    const activeClass = themeColor ? activeClassLight : activeClassDark;
    return (
      <Wrapper>
        {link.map(item => (
          <StyledLinkComponent
            href={`/${item.href}`}
            item
            dark={themeColor}
            activeClass={activeClass}
            key={item.id}
          >
            {this.shorten(item.name)}
          </StyledLinkComponent>
        ))}
      </Wrapper>
    );
  }
}

TopMenu.propTypes = {
  themeColor: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(TopMenu)
);
