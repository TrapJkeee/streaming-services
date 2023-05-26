import { useState } from "react";
import { createPortal } from "react-dom";

import { useAppDispatch } from "store/redux-hooks";
import { modalActions } from "store/ModalSlice/modalSlice";

import { ReactComponent as Close } from "assets/svg/close.svg";
import "./Modal.scss";

interface ModalProps {
  closeModalHandler?: () => void;
  children?: React.ReactNode;
}

const portal = document.getElementById("modal") as HTMLElement;

const BackDrop = ({ closeModalHandler }: ModalProps) => {
  return <div className="backdrob" onClick={closeModalHandler}></div>;
};

const ModalWindow = ({ closeModalHandler, children }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal__close" onClick={closeModalHandler}>
        <Close />
      </div>
      <div className="modal__body">{children}</div>
    </div>
  );
};

const Modal = ({ children }: ModalProps) => {
  const dispatch = useAppDispatch();

  const closeModalHandler = () => {
    dispatch(modalActions.closeModal());
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0";
  };

  return (
    <>
      {createPortal(<BackDrop closeModalHandler={closeModalHandler} />, portal)}
      {createPortal(
        <ModalWindow closeModalHandler={closeModalHandler}>
          {children}
        </ModalWindow>,
        portal
      )}
    </>
  );
};

export default Modal;
