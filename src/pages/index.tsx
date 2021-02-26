import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Hero from "#components/Hero";
import PromoCard, { CardContainer } from "#components/PromoCard";
import { MainWrapper } from "#components/Layouts";
import promos from "#constants/home/promos";

const PageTitle = styled.h1`
  padding: 0 16px 16px;
  font-weight: bolder;
  font-size: 32px;
  color: #5d5457;
`;

const PageParagraph = styled.p`
  padding: 16px;
  margin: 0 40px;
  line-height: 2rem;
  color: #5d5457;
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

const CardTitle = styled.h2`
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
              <Link href="/contact">contact me to learn more.</Link>
            </LinkWrapper>
          </PageParagraph>
        </SectionWrapper>

        <SectionWrapper>
          <CardContainer>
            {promos.map(promo => (
              <PromoCard details={promo} />
            ))}
          </CardContainer>
          <CardText>
            If you are interested,{" "}
            <CardLinkWrapper>
              <Link href="/online-coaching">
                find out more about online coaching here.
              </Link>
            </CardLinkWrapper>
          </CardText>
        </SectionWrapper>
      </MainWrapper>
    </>
  );
};

export default Home;
