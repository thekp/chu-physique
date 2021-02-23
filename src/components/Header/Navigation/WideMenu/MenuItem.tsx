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

const ItemWrapper = styled(motion.li)`
  list-style: none;
  cursor: pointer;
  padding: 20px;
`;

const ItemText = styled(motion.p)`
  ${({ theme }) => css`
    color: ${theme.color.secondary};
  `};
  width: 100%;
  font-size: 16px;
`;

const ChildrenItemIcon = styled(motion.span)`
  margin-left: 12px;
  font-size: 12px;
`;

const ChildrenList = styled(motion.ul)`
  position: absolute;
  margin-top: 20px;
  ${({ theme }) => css`
    background: ${theme.color.secondary};
  `};
`;

const ChildItemText = styled(motion.p)`
  width: 100%;
  font-size: 16px;
  padding: 16px 0;

  ${({ theme }) => css`
    color: ${theme.color.primary};
  `};
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

const newListVariants = {
  open: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.3,
    },
    display: "block",
  },
  closed: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

type NavProps = {};

const MenuItem: React.FC<NavProps> = ({ item }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const hasChildrenItems = item.children.length > 0;

  return (
    <ItemWrapper onClick={() => hasChildrenItems && toggleOpen()}>
      <ItemText whileHover={{ scale: 1.1 }}>
        <Link href={item.link}>{item.name}</Link>
        {hasChildrenItems && (
          <ChildrenItemIcon>{isOpen ? "▲" : "▼"}</ChildrenItemIcon>
        )}
      </ItemText>
      {hasChildrenItems && (
        <ChildrenList
          variants={newListVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          {item.children.map(childItem => (
            <ItemWrapper key={childItem.name}>
              <ChildItemText whileHover={{ scale: 1.05 }}>
                <Link href={childItem.link}>{childItem.name}</Link>
              </ChildItemText>
            </ItemWrapper>
          ))}
        </ChildrenList>
      )}
    </ItemWrapper>
  );
};

export default MenuItem;
