import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { MainWrapper, NavSpacer, SectionWrapper } from "#components/Layouts";
import { PageTitle } from "#components/Core";

const PageParagraph = styled.p`
  padding-bottom: 16px;
  line-height: 2rem;
  color: #5d5457;
`;

const StyledList = styled.ul`
  padding-left: 24px;
`;

const StyledItem = styled.li`
  white-space: pre-wrap;
`;

const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const OnlineCoaching = () => {
  return (
    <>
      <NavSpacer />
      <MainWrapper>
        <PageTitle style={{ marginTop: "24px" }}>Online Coaching</PageTitle>
        <SectionWrapper>
          <PageParagraph>
            Interested in online coaching? Before you sign up, please understand
            that I only take a limited amount of clients to ensure I give each
            client my best effort and attention. My goal for online training is
            not just to be able to train people worldwide, but to teach them how
            to achieve their goals, so they understand how to reach out for
            different fitness goals in their life.
          </PageParagraph>
          <PageParagraph>
            By signing up to online coaching, you will receive:
            <StyledList>
              <StyledItem>
                Personalised workout programmes based on your goals and
                preferences
              </StyledItem>
              <StyledItem>
                Customised diet plan / macro nutrient targets for your specific
                body type/weight
              </StyledItem>
              <StyledItem>
                Workout exercise library to see how to perform each exercise
                with correct technique
              </StyledItem>
              <StyledItem>
                Weekly check-ins to keep you accountable towards your goals and
                to make adjustments to your program and diet based on your
                progress. (Using Video calls)
              </StyledItem>
              <StyledItem>
                My personal phone number to receive help and answer any
                questions within 24 hours.
              </StyledItem>
            </StyledList>
          </PageParagraph>
        </SectionWrapper>
        <SectionWrapper style={{ paddingTop: 0 }}>
          <PageParagraph>
            If you are interested in online coaching, fill the form down below
            and I will get back to you to arrange a call to see if we are a good
            fit. Thanks, Leung
          </PageParagraph>
        </SectionWrapper>
        <SectionWrapper>
          <EmailForm>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <button type="submit"></button>
          </EmailForm>
        </SectionWrapper>
      </MainWrapper>
    </>
  );
};

export default OnlineCoaching;
