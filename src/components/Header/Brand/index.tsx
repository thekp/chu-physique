import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import metadata from "#constants/metadata";

const BrandWrapper = styled.div`
  font-style: italic;
  font-weight: 800;
  ${({ theme }) => css`
    font-size: ${theme.size.GEL_SPACING_TRPL};
    letter-spacing: ${theme.size.GEL_SPACING_QUAT};
    color: ${theme.color.secondary};
  `};

  ${({ theme }) => css`
    padding: ${theme.size.GEL_SPACING_DBL};
  `}
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
