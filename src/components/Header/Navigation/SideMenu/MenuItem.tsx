import React, { useState } from "react";
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
    background-color: #999;
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

// const iconVariants = {
//   open: {
//     rotate: 0,
//   },
//   closed: {
//     rotate: -180,
//   },
// };

const MenuItem = ({ item }) => {
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
        onClick={() => hasChildrenItems && toggleOpen()}
      >
        {item.name}
        {hasChildrenItems && (
          <ChildrenItemIcon
          // variant={iconVariants}
          // initial="closed"
          // animate={isOpen ? "open" : "closed"}
          >
            {isOpen ? "▲" : "▼"}
          </ChildrenItemIcon>
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
                <ItemText whileHover={{ scale: 1.05 }}>
                  {childItem.name}
                </ItemText>
              </ItemWrapper>
            ))}
          </ChildrenList>
        )}
      </AnimatePresence>
    </ItemWrapper>
  );
};

export default MenuItem;
