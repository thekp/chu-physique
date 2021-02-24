import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import metadata from "#constants/metadata";
import useNavContext from "#hooks/useNavContext";
import Navigation from "./Navigation";
import Brand from "./Brand";

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 4;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  ${({ theme, isScrolling }) => css`
    background: ${isScrolling ? theme.color.primary : "transparent"};
    color: ${theme.color.secondary};
  `};
`;

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [isScrolling, toggleScrolling] = useState(false);

  const handleScrolling = () => {
    if (window.scrollY >= 50) {
      toggleScrolling(true);
    } else {
      toggleScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);

    return () => window.removeEventListener("scroll", handleScrolling);
  }, [handleScrolling]);

  return (
    <HeaderWrapper isScrolling={isScrolling}>
      <Brand />
      <Navigation />
    </HeaderWrapper>
  );
};

export default Header;
