import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {
  StyledContent,
  StyledWrapper,
  StyledContentWrapper,
  StyledToggler,
  StyledDisabledWrapper,
  StyledCheckbox,
  StyledDiv,
  Title,
  LabelWrapper
} from "./styles";

class SelectComponent extends React.Component {
  state = {
    isHidden: this.props.isHidden
  };

  handleSelect = () => {
    this.setState({ isHidden: true });
  };

  toggle = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  render() {
    const {
      themeColor,
      children,
      nameofSprintSelector,
      nameofTeamSelector,
      title,
      onChange,
      checked,
      isSelected,
      id,
      isUser
    } = this.props;

    const { isHidden } = this.state;

    return (
      <StyledWrapper isUser={isUser} dark={themeColor}>
        {isSelected ? (
          <StyledDisabledWrapper>
            <Title>{title}</Title>

            <LabelWrapper>
              <StyledCheckbox
                type="checkbox"
                onChange={onChange}
                checked={checked}
                id={id}
              />
              <label
                htmlFor={id}
                onChange={onChange}
                value={checked}
                style={{ marginBottom: 0 }}
              >
                All
              </label>
            </LabelWrapper>
          </StyledDisabledWrapper>
        ) : (
          <StyledDiv>
            <StyledToggler dark={themeColor}>
              <Title>{title}</Title>
              <LabelWrapper>
                <StyledCheckbox
                  type="checkbox"
                  onChange={onChange}
                  checked={checked}
                  id={id}
                />
                <label htmlFor="s" style={{ marginBottom: 0 }}>
                  {nameofSprintSelector}
                </label>
                <label htmlFor="t" style={{ marginBottom: 0 }}>
                  {nameofTeamSelector}
                </label>

                <FontAwesomeIcon
                  onClick={this.toggle}
                  style={{
                    color: "#f76f39",
                    width: "40px"
                  }}
                  icon={isHidden ? "angle-down" : "angle-up"}
                />
              </LabelWrapper>
            </StyledToggler>
            <StyledContentWrapper dark={themeColor} isHidden={isHidden}>
              <StyledContent
                className={themeColor ? "lightDropdown" : "darkDropdown"}
                isHidden={isHidden}
                dark={themeColor}
              >
                {children}
              </StyledContent>
            </StyledContentWrapper>
          </StyledDiv>
        )}
      </StyledWrapper>
    );
  }
}

SelectComponent.propTypes = {
  themeColor: PropTypes.bool.isRequired,
  nameofSprintSelector: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  nameofTeamSelector: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  isUser: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor
});

export default connect(mapStateToProps)(SelectComponent);
