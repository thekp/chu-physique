import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import MenuItem from "./MenuItem";
import navItems from "#constants/navItems";

const NavList = styled.ul`
  display: flex;
`;

const ItemText = styled(motion.p)`
  ${({ theme }) => css`
    color: ${theme.color.secondary};
  `};
  width: 100%;
  font-size: 16px;
`;

type NavProps = {};

const WideMenu: React.FC<NavProps> = () => {
  return (
    <NavList>
      {navItems.map(item => (
        <MenuItem key={item.name} item={item} />
      ))}
    </NavList>
  );
};

export default WideMenu;
