import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import metadata from "#constants/metadata";
import Navigation from "./Navigation";

const HomeLink = styled.a`
  font-style: italic;
  font-weight: 800;
  margin
  ${({ theme }) => css`
    font-size: ${theme.size.GEL_SPACING_TRPL};
    letter-spacing: ${theme.size.GEL_SPACING_QUAT};
    color: ${theme.color.secondary};
  `};
`;

const BrandWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.size.GEL_SPACING_DBL};
  `}
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => css`
    background: ${theme.color.primary};
    color: ${theme.color.secondary};
  `};
`;

type HeaderProps = {};

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <HeaderWrapper>
      <BrandWrapper>
        <HomeLink>{metadata.BRAND}</HomeLink>
      </BrandWrapper>
      <Navigation />
    </HeaderWrapper>
  );
};

export default Header;
