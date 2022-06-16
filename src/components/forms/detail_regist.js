import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);
const Table = tw.table `w-full text-sm text-left text-gray-500 dark:text-gray-400`;
const Tr = tw.tr `bg-white border-b dark:bg-gray-800 dark:border-gray-700`;
const Th = tw.th `px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap`
const Td = tw.td `px-2 py-6 text-primary`
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row`
const Input = tw.input`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-6 lg:mt-0`

export default ({
  subheading = "",
  heading = <>Ingin bergabung? <span tw="text-primary-500">jangan ragu</span><wbr/> untuk menghubungi kami.</>,
  description = "Klik tombol dibawah ini untuk menghubungi kami.",
  submitButtonText = "Hubungi Kami!",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Table>
                  <Tr>
                    <Th>Nama</Th>
                    <Td>:</Td>
                    <Td>Sliver</Td>
                  </Tr>
                  <Tr>
                    <Th>No. Handphone</Th>
                    <Td>:</Td>
                    <Td>Sliver</Td>
                  </Tr>
                  <Tr>
                    <Th>Username</Th>
                    <Td>:</Td>
                    <Td>Sliver</Td>
                  </Tr>
                  <Tr>
                    <Th>Bank</Th>
                    <Td>:</Td>
                    <Td>Sliver</Td>
                  </Tr>
                  <Tr>
                    <Th>Atas Nama</Th>
                    <Td>:</Td>
                    <Td>Sliver</Td>
                  </Tr>
                  <Tr>
                    <Th>No. Rekening</Th>
                    <Td>:</Td>
                    <Td>Sliver</Td>
                  </Tr>
              </Table>
            </div>

          </TextContent>
        </TextColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Form action={formAction} method={formMethod}>
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
