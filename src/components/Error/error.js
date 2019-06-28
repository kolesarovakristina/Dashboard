import React from "react";
import PropTypes from "prop-types";
import { ErrorWrapper, Error } from "./styles";

const ErrorMessage = ({ errMessage, visibility }) => (
  <ErrorWrapper visibility={visibility}>
    <Error>
      {errMessage}
    </Error>
  </ErrorWrapper>
);

ErrorMessage.propTypes = {
  errMessage: PropTypes.string,
  visibility: PropTypes.bool
};

ErrorMessage.defaultProps = {
  errMessage: "",
  visibility: true
};

export default ErrorMessage;
