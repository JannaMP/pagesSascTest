import { useState } from "react";

export default function useModalFuncionario() {
  const [isOpen, setisOpen] = useState(false);

  const toggleFuncionario = () => {
    setisOpen(!isOpen);
  };

  return {
    isOpen,
    toggleFuncionario,
  };
}
