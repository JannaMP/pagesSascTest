import React, { ReactNode } from "react";
import "./style.modalfuncionario.css";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggleFuncionario: () => void;
}

export default function ModalFuncionario(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div id="modalBackground" onClick={props.toggleFuncionario}>
          <div onClick={(e) => e.stopPropagation()} id="modal">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
