import { useContext, createContext, useState } from "react";
import { NavContext } from "#contexts/navigation";

const useNavContext = () => {
  const navContext = useContext(NavContext);

  return navContext;
};

export default useNavContext;
