import React, { createContext, useState } from "react";

export const NavContext = createContext({});

export const NavContextProvider = ({ children }) => {
  const [isNavOpen, toggleIsNavOpen] = useState(false);

  return <NavContext.Provider>{children}</NavContext.Provider>;
};
