import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { MainWrapper, NavSpacer } from "#components/Layouts";
import { PageTitle } from "#components/Core";
import testimonials from "#constants/client-testimonials/testimonials";

const ClientWrapper = styled.div`
  margin: 32px 0;
  color: #5d5457 !important;
`;

const ClientParagraph = styled.p`
  padding-top: 16px;
  margin: 0 40px;
  line-height: 2rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.size.GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
      margin: 0;
    }
  `};
  font-family: none;
`;

const ClientName = styled(ClientParagraph)`
  padding: 0 !important;
  margin: 0 !important;
  line-height: 2rem;
  font-style: italic;
`;

const ClientTestimonials = () => {
  return (
    <>
      <NavSpacer />
      <MainWrapper>
        <PageTitle style={{ marginTop: "24px" }}>Client Testimonials</PageTitle>

        {testimonials.map(({ texts, name }) => (
          <ClientWrapper>
            {texts.map((text, index) => (
              <ClientParagraph>
                {index === 0 && '"'}
                {text}
                {index === texts.length - 1 && '"'}
              </ClientParagraph>
            ))}
            <ClientName>- {name}</ClientName>
          </ClientWrapper>
        ))}
      </MainWrapper>
    </>
  );
};

export default ClientTestimonials;
