import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import BurgerIcon from "./BurgerIcon";
import MenuList from "./MenuList";
import { useDimensions } from "#hooks/useDimensions";

const SideContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 60%;
  ${({ theme }) => css`
    background: ${theme.color.primary};
  `};
`;

const NavWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
`;

const GhostWrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  background: black;
  cursor: e-resize;
  z-index: 99;
`;

const sidebar = override => ({
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 25px 25px)`,
    transition: {
      duration: 1.5,
      type: "spring",
    },
  }),
  closed: {
    clipPath: override
      ? "circle(0px at 20px 20px)"
      : "circle(0px at 20px 20px)",
    transform: "scaleX(-1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
});

const SideMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <GhostWrapper
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebar(true)}
        onClick={() => toggleOpen()}
        isOpen={isOpen}
      />

      <NavWrapper
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        isOpen={isOpen}
      >
        <SideContainer variants={sidebar()}>
          <MenuList toggleSideMenu={toggleOpen} />
        </SideContainer>
        <BurgerIcon toggle={() => toggleOpen()} />
      </NavWrapper>
    </>
  );
};

export default SideMenu;
