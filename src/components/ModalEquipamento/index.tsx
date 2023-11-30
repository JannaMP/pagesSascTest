import React, { ReactNode } from "react";
import "./style.modalendereco.css";

interface ModalType {
  children?: ReactNode;
  isOpenEquipamento: boolean;
  toggleEquipamento: () => void;
}

export default function ModalEndereco(props: ModalType) {
  return (
    <>
      {props.isOpenEquipamento && (
        <div id="modalBackground" onClick={props.toggleEquipamento}>
          <div onClick={(e) => e.stopPropagation()} id="modal">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
