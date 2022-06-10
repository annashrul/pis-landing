import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/logo.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";


const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex flex-col items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-32`;
const LogoText = tw.h5`ml-2 text-sm text-primary font-black tracking-wider`;


const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <br/>
            <LogoText>PT PROWARA MAPAN UTAMA</LogoText>
          </LogoContainer>
          <CopyrightText>
            &copy; Copyright 2022, PT PROWARA MAPAN UTAMA. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
