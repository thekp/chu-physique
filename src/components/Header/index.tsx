import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import metadata from "#constants/metadata";
import Navigation from "./Navigation";
import Brand from "./Brand";

const HeaderWrapper = styled.header`
  position: absolute;
  z-index: 5;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => css`
    // background: ${theme.color.primary};
    color: ${theme.color.secondary};
  `};
`;

type HeaderProps = {};

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <HeaderWrapper>
      <Brand />
      <Navigation />
    </HeaderWrapper>
  );
};

export default Header;
