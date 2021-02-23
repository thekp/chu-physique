import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import SideMenu from "./SideMenu";
import useMediaQuery from "#hooks/useMediaQuery";
import navItems from "#constants/navItems";

const NavWrapper = styled.div`
  margin-top: 4px;
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
  const isMobile = useMediaQuery(`(max-width: 680px)`);

  return (
    <NavWrapper>
      {isMobile ? (
        <SideMenu />
      ) : (
        <NavList>
          {navItems.map(({ name, link, children }) => (
            <NavItem key={name}>{name}</NavItem>
          ))}
        </NavList>
      )}
    </NavWrapper>
  );
};

export default Navigation;
