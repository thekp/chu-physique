import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

const MY_HERO_IMG_PATH = "/assets/chu-hero.jpg";

const HeroSection = styled.section`
  position: relative;
  height: auto;
`;

const HeroWrapper = styled.div`
  position: relative;
  ${({ theme }) => css`
    /* Turn off parallax scrolling for tablets and phones */
    @media (max-width: ${theme.size.GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
      background-image: url(${MY_HERO_IMG_PATH});
      background-attachment: scroll;
      background-position: 50% 90%;
      background-size: cover;
      background-repeat: no-repeat;
      min-height: 60vh;
    }

    @media (min-width: ${theme.size
        .GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${theme.size
        .GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
      background-image: url(${MY_HERO_IMG_PATH});
      background-attachment: fixed;
      background-position: 50% 20%;
      background-size: cover;
      background-repeat: no-repeat;
      min-height: 50vh;
    }

    @media (min-width: ${theme.size.GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
      background-image: url(${MY_HERO_IMG_PATH});
      background-attachment: fixed;
      background-position: 80% 20%;
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 100vh;
    }
  `};
`;

const MyHeroOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const HeroTitleWrapper = styled(motion.div)`
  /* Center vertically and horizontally */
  position: absolute;
  width: 90%;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  z-index: 3;
  text-align: center;
  color: #fdfdfd;
`;

const HeroTitle = styled.p`
  letter-spacing: 0.125rem;
  text-transform: none;
  font-weight: 500;
  font-style: normal;
  font-size: 80px;

  ${({ theme }) => css`
    @media (max-width: ${theme.size.GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
      font-size: 64px;
    }
  `};

  ${({ theme }) => css`
    @media (max-width: ${theme.size.GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
      font-size: 32px;
    }
  `};
`;

const HeroSubWrapper = styled.div`
  font-style: italic;
`;

const HeroSubTitle = styled.p`
  margin-top: 16px;
  font-size: 32px;

  ${({ theme }) => css`
    @media (max-width: ${theme.size.GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
      font-size: 16px;
    }
  `};
`;

const HeroLinkWrapper = styled.div`
  margin-top: 24px;
  text-decoration: underline;
  font-size: 24px;

  ${({ theme }) => css`
    @media (max-width: ${theme.size.GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
      font-size: 12px;
    }
  `};
`;

const MyHero = () => {
  return (
    <HeroSection>
      <MyHeroOverlay />
      <HeroWrapper>
        <HeroTitleWrapper
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <HeroTitle>CHU PHYSQIUE</HeroTitle>
          <HeroSubWrapper>
            <HeroSubTitle>
              Let’s Work Together To Achieve Your Ideal Physique
            </HeroSubTitle>
            <HeroLinkWrapper>
              <Link href="/about/my-journey">Learn More About My Journey</Link>
            </HeroLinkWrapper>
          </HeroSubWrapper>
        </HeroTitleWrapper>
      </HeroWrapper>
    </HeroSection>
  );
};

export default MyHero;
