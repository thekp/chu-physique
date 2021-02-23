import * as React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import MenuItem from "./MenuItem";
import navItems from "#constants/navItems";

const ListWrapper = styled(motion.ul)`
  transform: scaleX(-1);
  position: absolute;
  top: 80px;
  width: 100%;
`;

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MenuList = ({ toggleSideMenu }) => (
  <AnimateSharedLayout>
    <ListWrapper variants={variants}>
      {navItems.map(item => (
        <MenuItem key={item.name} item={item} toggleSideMenu={toggleSideMenu} />
      ))}
    </ListWrapper>
  </AnimateSharedLayout>
);

export default MenuList;
