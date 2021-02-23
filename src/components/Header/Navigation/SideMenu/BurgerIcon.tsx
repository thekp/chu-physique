import * as React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const BurgerButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 8px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
`;

const Path = props => (
  <motion.path
    strokeWidth="3"
    stroke="#FDFDFD"
    strokeLinecap="round"
    {...props}
  />
);

const BurgerSvg = () => (
  <svg width="24" height="24" viewBox="0 0 23 24">
    <Path
      variants={{
        closed: { d: "M 2 2.5 L 20 2.5" },
        open: { d: "M 3 16.5 L 17 2.5" },
      }}
    />
    <Path
      d="M 2 9.423 L 20 9.423"
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 },
      }}
      transition={{ duration: 0.2 }}
    />
    <Path
      variants={{
        closed: { d: "M 2 16.346 L 20 16.346" },
        open: { d: "M 3 2.5 L 17 16.346" },
      }}
    />
  </svg>
);

const Burger = ({ toggle }) => (
  <BurgerButton onClick={toggle}>
    <BurgerSvg />
  </BurgerButton>
);

export default Burger;
