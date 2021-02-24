import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import metadata from "#constants/metadata";

const BrandWrapper = styled.span`
  font-style: italic;
  font-weight: 800;
  ${({ theme }) => css`
    padding: ${theme.size.GEL_SPACING_DBL};
    font-size: ${theme.size.GEL_SPACING_TRPL};
    letter-spacing: ${theme.size.GEL_SPACING_QUAT};
    color: ${theme.color.secondary};

    @media (max-width: ${theme.size.GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
      font-size: 16px;
      padding: ${theme.size.GEL_SPACING_HLF_TRPL};
    }
  `};
`;

type BrandProps = {};

const Brand: React.FC<BrandProps> = () => {
  return (
    <BrandWrapper>
      <Link href="/">{metadata.BRAND}</Link>
    </BrandWrapper>
  );
};

export default Brand;
