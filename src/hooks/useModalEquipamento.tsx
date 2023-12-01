import { useState } from "react";

export default function useModalEquipamento() {
  const [isOpenEquipamento, setisisOpenEquipamento] = useState(false);

  const toggleEquipamento = () => {
    setisisOpenEquipamento(!isOpenEquipamento);
  };

  return {
    isOpenEquipamento,
    toggleEquipamento,
  };
}
