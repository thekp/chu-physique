import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import metadata from "#constants/metadata";
import Navigation from "./Navigation";

const BrandLink = styled.a`
  font-style: italic;
  font-weight: 800;
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

type BrandProps = {};

const Brand: React.FC<BrandProps> = () => {
  return (
    <BrandWrapper>
      <BrandLink>{metadata.BRAND}</BrandLink>
    </BrandWrapper>
  );
};

export default Brand;
