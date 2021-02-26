import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Brand from "#components/Brand";

const FooterWrapper = styled.footer`
  background: #1f1f1f;
  width: 100%;
  color: #fdfdfd;
`;

const BrandWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #fdfdfd;
`;

const BackToTopButton = styled.button`
  margin: 8px 20px;
  padding: 4px;
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  color: #fdfdfd;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
`;

const ContactDetailsWrapper = styled.div`
  padding: 1.25rem 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ContactDetailsText = styled.p`
  margin: 0 12px;
  ${({ theme }) => css`
    @media (max-width: ${theme.size.GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
      padding: 16px 0 0;
    }
  `};
`;

const KhoaPhan = styled.p`
  font-size: 12px;
  margin: 0 24px;
`;

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterWrapper>
      <BrandWrapper>
        <Brand />
        <BackToTopButton
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          BACK TO TOP
        </BackToTopButton>
      </BrandWrapper>
      <ContactDetailsWrapper
        style={{ borderBottom: "1px solid #fff", margin: "0 16px" }}
      >
        <ContactDetailsText>
          <a href="https://www.instagram.com/leungchupt" rel="noreferrer">
            INSTAGRAM
          </a>
        </ContactDetailsText>
        <ContactDetailsText>
          <a
            href="https://www.linkedin.com/in/leung-chu"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
        </ContactDetailsText>
        <ContactDetailsText>
          <a
            href="https://www.youtube.com/channel/UCkKgsuGNHUHVivJF6AesvxA"
            rel="noreferrer"
            target="_blank"
          >
            YOUTUBE
          </a>
        </ContactDetailsText>
        <ContactDetailsText>
          <a href="mailto:leungchu537@hotmail.com">LEUNGCHU537@HOTMAIL.COM</a>
        </ContactDetailsText>
      </ContactDetailsWrapper>

      <ContactDetailsWrapper style={{ justifyContent: "center" }}>
        <KhoaPhan>
          <span lang="en-GB">
            {`\u00A9`} {`${new Date().getFullYear()}`}{" "}
          </span>
          <a
            href="https://www.linkedin.com/in/thekp"
            rel="noreferrer"
            target="_blank"
          >
            WEBSITE CREATED BY KHOA PHAN
          </a>
        </KhoaPhan>
      </ContactDetailsWrapper>
    </FooterWrapper>
  );
};

export default Footer;
