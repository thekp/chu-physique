import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { MainWrapper, NavSpacer } from "#components/Layouts";
import { PageTitle } from "#components/Core";

const Contact = () => {
  return (
    <>
      <NavSpacer />
      <MainWrapper>
        <PageTitle style={{ marginTop: "24px" }}>Online Coaching</PageTitle>
      </MainWrapper>
    </>
  );
};

export default Contact;
