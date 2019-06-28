import React, { Component } from "react";
import PropTypes from "prop-types";
import { ModalOverlay, Modal } from "./styles";

class ModalComponent extends Component {
  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
  }

  handleKeyUp = e => {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener("keyup", this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) { keys[e.keyCode](); }
  }

  render() {
    const { children, dark } = this.props;

    return (
      <ModalOverlay dark={dark}>
        <Modal
          ref={node => (this.modal = node)}
        >
          <div>
            {children}
          </div>
        </Modal>
      </ModalOverlay>
    );
  }
}

ModalComponent.propTypes = {
  onCloseRequest: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  dark: PropTypes.bool.isRequired
};

export default ModalComponent;
