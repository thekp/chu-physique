import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import metadata from "#constants/metadata";
import Navigation from "./Navigation";

const HomeLink = styled.a`
  font-style: italic;

  ${({ theme }) => css`
    font-size: ${theme.size.GEL_SPACING_TRPL};
    letter-spacing: ${theme.size.GEL_SPACING_QUAT};
    font-weight: 800;
  `}
`;

const BrandWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.size.GEL_SPACING_DBL};
  `}
`;

const HeaderWrapper = styled.div`
  display: flex;
  ${({ theme }) => css`
    padding: ${theme.size.GEL_SPACING};
    color: ${theme.colors.text.primary};
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
