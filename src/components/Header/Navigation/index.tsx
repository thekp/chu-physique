import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import SideMenu from "./SideMenu";
import navItems from "#constants/navItems";

const NavWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.size.GEL_SPACING_DBL};
  `};
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  ${({ theme }) => css`
    padding: ${theme.size.GEL_SPACING};
  `};
  list-style-type: none;
`;

type NavProps = {};

const Navigation: FunctionComponent<HeaderProps> = () => {
  return (
    <>
      {/* <NavWrapper>
        <NavList>
          {navItems.map(({ name, link, children }) => (
            <NavItem>{name}</NavItem>
          ))}
        </NavList>
      </NavWrapper> */}
      <SideMenu />
    </>
  );
};

export default Navigation;
