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
  width: 100%;

  ${({ theme }) => css`
    background: ${theme.color.primary};
  `};
`;

const NavWrapper = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 60%;
  transform: scaleX(-1);
  z-index: 99;
`;

const GhostWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  background: black;
  cursor: e-resize;
  transform: scaleX(-1);
`;

const sidebar = override => ({
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 15,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: override ? "circle(0px at 0px 0px)" : "circle(1px at 1px 1px)",
    transition: {
      delay: 0.2,
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
