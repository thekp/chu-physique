import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import SideMenu from "./SideMenu";
import WideMenu from "./WideMenu";
import useMediaQuery from "#hooks/useMediaQuery";
import navItems from "#constants/navItems";

type NavProps = {};

const Navigation: React.FC<NavProps> = () => {
  const isMobile = useMediaQuery(`(max-width: 680px)`);
  return <nav>{isMobile ? <SideMenu /> : <WideMenu />}</nav>;
};

export default Navigation;
