import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import metadata from "#constants/metadata";
import Navigation from "./Navigation";
import Brand from "#components/Brand";

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 4;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  ${({ theme, isScrolling, isTransparent }) => css`
    background: ${isScrolling || !isTransparent
      ? theme.color.primary
      : "transparent"};
    color: ${theme.color.secondary};
  `};
`;

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({ isTransparent }) => {
  const [isScrolling, toggleScrolling] = useState(false);

  const handleScrolling = () => {
    if (window.scrollY >= 54) {
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
    <HeaderWrapper isTransparent={isTransparent} isScrolling={isScrolling}>
      <Brand />
      <Navigation />
    </HeaderWrapper>
  );
};

export default Header;
