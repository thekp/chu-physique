import React, { useState } from "react";
import Link from "next/link";
import {
  motion,
  useCycle,
  AnimatePresence,
  AnimateSharedLayout,
} from "framer-motion";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ItemText = styled(motion.p)`
  ${({ theme }) => css`
    color: ${theme.color.secondary};
  `};
  width: 100%;
  font-size: 20px;
  padding: 24px;
`;

const ItemWrapper = styled(motion.li)`
  list-style: none;
  cursor: pointer;

  &:hover {
    background-color: #2f2f2f;
  }
`;

const ChildrenItemIcon = styled(motion.span)`
  margin-left: 16px;
  font-size: 16px;
`;

const ChildrenList = styled(motion.ul)`
  width: 100%;
  padding-left: 16px;
`;

const itemVariants = {
  open: {
    display: "block",
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: 100 },
    },
  },
  closed: {
    y: 10,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MenuItem = ({ item, toggleSideMenu }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const hasChildrenItems = item.children.length > 0;
  const [animate, cycle] = useCycle(
    { scale: 1.5, rotate: 0 },
    { scale: 1.0, rotate: 90 }
  );

  return (
    <ItemWrapper layout variants={itemVariants}>
      <ItemText
        layout
        whileHover={{ scale: 1.05 }}
        onClick={() => (hasChildrenItems ? toggleOpen() : toggleSideMenu())}
      >
        <Link href={item.link}>{item.name}</Link>
        {hasChildrenItems && (
          <ChildrenItemIcon>{isOpen ? "▲" : "▼"}</ChildrenItemIcon>
        )}
      </ItemText>
      <AnimatePresence>
        {isOpen && hasChildrenItems && (
          <ChildrenList
            layout
            variants={listVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            {item.children.map(childItem => (
              <ItemWrapper layout key={childItem.name} variants={itemVariants}>
                {console.log(childItem)}
                <Link href={childItem.link}>
                  <ItemText
                    whileHover={{ scale: 1.05 }}
                    onClick={() => toggleSideMenu()}
                  >
                    {childItem.name}
                  </ItemText>
                </Link>
              </ItemWrapper>
            ))}
          </ChildrenList>
        )}
      </AnimatePresence>
    </ItemWrapper>
  );
};

export default MenuItem;
