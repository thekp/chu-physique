import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { MainWrapper, NavSpacer, SectionWrapper } from "#components/Layouts";
import { PageTitle } from "#components/Core";
import testimonials from "#constants/client-testimonials/testimonials";

const TextWrapper = styled.div`
  width: 60%;
  padding: 0 16px;

  ${({ theme }) => css`
    @media (max-width: ${theme.size.GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
      width: 100%;
      margin-bottom: 24px;
    }
  `};
`;

const ImageWrapepr = styled.div`
  max-height: 450px;
  max-width: 450px;
  width: 40%;

  ${({ theme }) => css`
    @media (max-width: ${theme.size.GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
      width: 100%;
      margin-bottom: 24px;
    }
  `};
`;

const PageParagraph = styled.p`
  padding-bottom: 16px;
  margin: 0 40px;
  line-height: 2rem;
  color: #5d5457;
  ${({ theme }) => css`
    @media (max-width: ${theme.size.GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
      margin: 0;
    }
  `};
`;

const MyJourney = () => {
  return (
    <>
      <NavSpacer />
      <MainWrapper>
        <PageTitle style={{ marginTop: "24px" }}>My Journey</PageTitle>

        <SectionWrapper>
          <ImageWrapepr>
            <Image
              src="/assets/chu.jpg"
              alt="Portrait of Chu"
              layout="responsive"
              height={450}
              width={450}
            />
          </ImageWrapepr>

          <TextWrapper>
            <PageParagraph>
              Training has been a big part of my life for sport performance,
              health, body image, and overall strength and functionality.
            </PageParagraph>
            <PageParagraph>
              After graduating from the University of Exeter with my Sports
              Science degree, I made the decision to become a Personal Trainer
              to help teach/train people with the knowledge I have acquired.
            </PageParagraph>
            <PageParagraph>
              If you have been following a general training programme and have
              not seen the results you want, maybe your body works differently.
              That’s where Personal Training comes in and can help you learn
              twice as fast about your own body! This means you’ll be able to
              achieve your goals faster.
            </PageParagraph>
            <PageParagraph>
              Get in contact with me to see if we’re a good fit to work
              together.
            </PageParagraph>
          </TextWrapper>
        </SectionWrapper>
      </MainWrapper>
    </>
  );
};

export default MyJourney;
