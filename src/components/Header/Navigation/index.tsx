import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import SideMenu from "./SideMenu";
import useMediaQuery from "#hooks/useMediaQuery";
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
    padding: 0 ${theme.size.GEL_SPACING_DBL};
    color: ${theme.color.secondary};
  `};
  list-style-type: none;
`;

type NavProps = {};

const Navigation: FunctionComponent<HeaderProps> = () => {
  const isBreakpoint = useMediaQuery(605);

  return (
    <NavWrapper>
      {isBreakpoint ? (
        <SideMenu />
      ) : (
        <NavList>
          {navItems.map(({ name, link, children }) => (
            <NavItem>{name}</NavItem>
          ))}
        </NavList>
      )}
    </NavWrapper>
  );
};

export default Navigation;
