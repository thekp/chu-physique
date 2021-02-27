import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { MainWrapper, NavSpacer, SectionWrapper } from "#components/Layouts";
import { PageTitle } from "#components/Core";
import testimonials from "#constants/client-testimonials/testimonials";

const CertList = styled.ul`
  list-style: none;
`;

const CertItem = styled.li`
  text-indent: 0;
  padding: 12px 0;
`;

const ImageWrapepr = styled.div`
  min-width: 300px;
  width: 50%;
  padding: 16px;
  ${({ theme }) => css`
    @media (max-width: ${theme.size.GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
      width: 100%;
      margin-bottom: 24px;
    }
  `};
`;

const Certifications = () => {
  return (
    <>
      <NavSpacer />
      <MainWrapper>
        <PageTitle style={{ marginTop: "24px" }}>Certifications</PageTitle>
        <SectionWrapper>
          <CertList>
            <CertItem>BSc Sports and Exercise Science</CertItem>
            <CertItem>Level 3 Personal Training</CertItem>
            <CertItem>Sports Conditioning</CertItem>
            <CertItem>ITEC Level 3 Sports Massage Therapist</CertItem>
          </CertList>
        </SectionWrapper>
        <SectionWrapper>
          <ImageWrapepr>
            <Image
              src="/assets/gallery/chu-grad.jpg"
              alt="Leung wearing university graduation attire"
              layout="responsive"
              height={500}
              width={500}
            />
          </ImageWrapepr>
          <ImageWrapepr>
            <Image
              src="/assets/gallery/chu-lifting.jpg"
              alt="Leung dead lifting over 100kg"
              layout="responsive"
              height={600}
              width={600}
            />
          </ImageWrapepr>
        </SectionWrapper>
      </MainWrapper>
    </>
  );
};

export default Certifications;
