import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserManagmentActions from "Actions/usermanagment.action";
import Modal from "./modal";
import { ModalButton, Wrapper } from "./styles";

const ModalLauncher = ({
  children, themeColor, modalButton, closeModalAction, closeModal
}) => (

  <Wrapper>
    <ModalButton
      dark={themeColor}
      onClick={() => { closeModalAction(!closeModal); }}
    >
      {modalButton}
    </ModalButton>

    {closeModal
          && (
          <Modal
            dark={themeColor}
            onCloseRequest={() => { closeModalAction(!closeModal); }}
          >
            {children}
          </Modal>
          )}
  </Wrapper>
);

ModalLauncher.propTypes = {
  modalButton: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
  themeColor: PropTypes.bool.isRequired,
  closeModalAction: PropTypes.func.isRequired,
  closeModal: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor,
  closeModal: state.userManagmentReducer.closeModal
});

const mapDispatchToProps = dispatch => ({
  closeModalAction: (boolean) => { dispatch(UserManagmentActions.closeModalAction(boolean)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalLauncher);
