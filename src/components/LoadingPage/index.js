import React from "react";
import gif from "Assets/owl.gif";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Wrapper, Loading } from "./styles";

const LoadingPage = ({ themeColor }) => (
  <Wrapper dark={themeColor}>
  <Loading src={gif} />
  </Wrapper>
);

LoadingPage.propTypes = {
  themeColor: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor
});

export default connect(mapStateToProps)(LoadingPage);
