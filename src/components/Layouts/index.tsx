import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const MainWrapper = styled.main`
  max-width: 1080px;
  margin: 0 auto;
  padding: 32px;
  text-align: center;
  position: relative;
  min-height: 85vh;
`;

export const NavSpacer = styled.div`
  height: 60px;
  width: 100%;
  ${({ theme }) => css`
    @media (max-width: ${theme.size.GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
      height: 43px;
    }
  `};
`;
