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

const NavWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
`;

const GhostWrapper = styled(motion.div)`
  height: 100%;
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
    width: override ? "100%" : "60%",
    clipPath: `circle(${height * 2 + 200}px at 0px 0px)`,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 20,
      restDelta: 10,
    },
  }),
  closed: {
    clipPath: override ? "circle(0px at 0px 0px)" : "circle(0px at 1px 1px)",
    width: "100%",
    transform: "scaleX(-1)",

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
