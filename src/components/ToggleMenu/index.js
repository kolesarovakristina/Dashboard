import React from "react";
import { connect } from "react-redux";
import ThemeActions from "../../redux/actions/theme.action";
import ToggleButton from "react-toggle-button";
import PropTypes from "prop-types";

const ThemeToggler = ({ themeColor, themeColorAction }) => {
  const styles = {
    borderRadius: 2
  };

  const toggleStyles = {
    activeThumb: {
      base: "#fff"
    },
    inactiveThumb: {
      base: "#f76f39"
    },
    active: {
      base: "#f76f39"
    },
    inactive: {
      base: "#222"
    }
  };

  return (
    <div>
      <ToggleButton
        colors={toggleStyles}
        activeLabel="light"
        trackStyle={styles}
        thumbStyle={styles}
        inactiveLabel="dark"
        value={themeColor}
        onToggle={() => themeColorAction(!themeColor)}
      />
    </div>
  );
};

ThemeToggler.propTypes = {
  themeColor: PropTypes.bool.isRequired,
  themeColorAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor
});
const mapDispatchToProps = dispatch => ({
  themeColorAction: color => dispatch(ThemeActions.themeColorAction(color))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeToggler);
