import { useState } from "react";

export default function useModalFuncionario() {
  const [isOpenFuncionario, setisOpenFuncionario] = useState(false);

  const toggleFuncionario = () => {
    setisOpenFuncionario(!isOpenFuncionario);
  };

  return {
    isOpenFuncionario,
    toggleFuncionario,
  };
}
