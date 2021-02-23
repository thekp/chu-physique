import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const MY_HERO_IMG_PATH = "/assets/home/chu-hero.jpg";

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
      background-attachment: scroll;
      background-position: 50% 10%;
      background-size: cover;
      background-repeat: no-repeat;
      min-height: 50vh;
    }

    @media (min-width: ${theme.size.GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
      background-image: url(${MY_HERO_IMG_PATH});
      background-attachment: fixed;
      background-position: 50%;
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

const HeroTitleWrapper = styled.div`
  /* Center vertically and horizontally */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: center;
  color: #fdfdfd;
`;

const HeroTitle = styled.h1`
  letter-spacing: 0.125rem;
  text-transform: none;
  font-weight: 500;
  font-style: normal;
  font-size: 68px;
`;

const HeroSubTitle = styled.h2`
  font-family: "Shippori Mincho", serif;
  font-style: italic;
  font-size: 16px;
`;

const HeroLinkWrapper = styled.span`
  margin-top: 16px;
  font-family: "Shippori Mincho", serif;
  font-style: italic;
  font-size: 16px;
  border-bottom: 1px solid #fdfdfd;
`;

const MyHero = () => {
  return (
    <HeroSection>
      <MyHeroOverlay />
      <HeroWrapper>
        <HeroTitleWrapper>
          <HeroTitle>CHU PHYSQIUE</HeroTitle>
          <HeroSubTitle>
            Let’s Work Together To Achieve Your Ideal Physique
          </HeroSubTitle>
          <HeroLinkWrapper>
            <Link href="/about/my-journey">Read About My Journey</Link>
          </HeroLinkWrapper>
        </HeroTitleWrapper>
      </HeroWrapper>
    </HeroSection>
  );
};

export default MyHero;
