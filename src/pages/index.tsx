import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Hero from "#components/Hero";

const MainWrapper = styled.main`
  max-width: 1080px;
  margin: 0 auto;
  padding: 32px;
  text-align: center;
`;

const PageTitle = styled.h1`
  padding: 0 16px 16px;
  font-weight: bolder;
  font-size: 32px;
`;

const PageParagraph = styled.p`
  padding: 16px;
  margin: 0 40px;
  line-height: 2rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.size.GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
      margin: 0;
      padding: 16px 0;
    }
  `};
`;

const LinkWrapper = styled.span`
  text-decoration: underline;
  text-style: italic;
`;

const SectionWrapper = styled.section`
  margin: 16px 0;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  width: 45%;
  margin: 16px 24px;

  ${({ theme }) => css`
    @media (max-width: ${theme.size.GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
      width: 40%;
    }
  `};

  ${({ theme }) => css`
    @media (max-width: ${theme.size.GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
      width: 100%;
    }
  `};
`;

const CardImageWrapper = styled.div`
  margin-bottom: 16px;
`;

const CardTitle = styled.h3`
  color: #5d5457;
  text-align: center;
  white-space: pre-wrap;
  font-size: 24px;
  margin-bottom: 16px;
`;

const CardText = styled.p`
  color: #5d5457;
  line-height: 2rem;
`;

const CardLinkWrapper = styled.span`
  text-decoration: underline;
`;

const Home = () => {
  return (
    <>
      <Hero />
      <MainWrapper>
        <SectionWrapper>
          <PageTitle>Personal Trainer</PageTitle>
          <PageParagraph>Specialise In Helping You</PageParagraph>
          <PageParagraph>
            Build an athletic, powerful body & Improving your mindset
          </PageParagraph>
          <PageParagraph>
            If you are interested in working with me to better yourself and
            improve your lifestyle,{" "}
            <LinkWrapper>
              <Link href="/contact">CLICK HERE</Link>
            </LinkWrapper>
            .
          </PageParagraph>
        </SectionWrapper>

        <SectionWrapper>
          <CardContainer>
            <CardWrapper>
              <CardImageWrapper>
                <Image
                  src="/assets/chuman.jpg"
                  alt="Picture of Leung looking into the mirror holding weights"
                  layout="responsive"
                  height={355}
                  width={470}
                />
              </CardImageWrapper>
              <CardTitle>1 - 1 PT SESSIONS</CardTitle>
              <CardText>
                If you prefer to have someone guide you in person, whether it’s
                because you’re not confident or consistent with training, then
                get in contact with me and we can arrange specific training
                goals for yourself.
              </CardText>
            </CardWrapper>
            <CardWrapper>
              <CardImageWrapper>
                <Image
                  src="/assets/chu-arm.jpg"
                  alt="Picture of Leung looking into the mirror holding weights"
                  layout="responsive"
                  height={355}
                  width={470}
                />
              </CardImageWrapper>
              <CardTitle>ONLINE COACHING</CardTitle>
              <CardText>
                Live too far away to train with me in person? No worries. I have
                recently added online fitness coaching where I can help guide
                you to your training goals online.
              </CardText>
            </CardWrapper>
          </CardContainer>
          <CardText>
            If you are interested,{" "}
            <CardLinkWrapper>
              <Link href="/online-coaching">CLICK HERE</Link>
            </CardLinkWrapper>{" "}
            to learn more.
          </CardText>
        </SectionWrapper>
      </MainWrapper>
    </>
  );
};

export default Home;
