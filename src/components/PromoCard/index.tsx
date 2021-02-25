import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

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

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const PromoCard = ({ details }) => {
  const { image, title, text } = details;

  return (
    <CardWrapper>
      <CardImageWrapper>
        <Image
          src={image.src}
          alt={image.alt}
          layout="responsive"
          height={355}
          width={470}
        />
      </CardImageWrapper>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardWrapper>
  );
};

export default PromoCard;
