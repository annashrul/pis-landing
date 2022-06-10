import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";


const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
// const Subheading = tw(Subheading)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center mb-4`;

const TwoColumn = tw.div`flex flex-wrap`;
const Column = tw.div``;
const CardColumn = tw(Column)`gap-8 w-full md:w-1/2 xl:w-1/2 mt-16 xl:mt-0`;

const CardHeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const CardHeadingTitle = tw(Subheading)`xl:text-left leading-tight mb-2`;
const CardDescSub = tw.span`text-xs text-gray-600`;
const CardDescSub2 = tw.span`text-sm text-gray-600`;

const Card = tw.div`flex flex-col bg-white rounded w-full p-5 mx-auto`;
const CardImage = tw.img `w-10 h-10 rounded-full`;
const Item = tw.div `odd:bg-gray-100 flex gap-3 items-center font-semibold text-gray-800 p-3 hover:bg-gray-100 rounded-md hover:cursor-pointer`;
const DescContainer = tw.div `flex flex-col`;

export default () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1553194587-b010d08c6c56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      type: "Beachfront",
      pricePerDay: "$99",
      title: "A Trip to the Bahamas and the Carribean Ocean",
      trendingText: "Trending",
      durationText: "7 Days Tour",
      locationText: "Africa"
    }, {
      imageSrc: "https://images.unsplash.com/photo-1584200186925-87fa8f93be9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      type: "Cruise",
      pricePerDay: "$169",
      title: "Cruise to the Mariana Trench and the Phillipines",
      trendingText: "Trending",
      durationText: "15 Days Tour",
      locationText: "Australia"
    }, {
      imageSrc: "https://images.unsplash.com/photo-1584200186925-87fa8f93be9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      type: "Cruise",
      pricePerDay: "$169",
      title: "Cruise to the Mariana Trench and the Phillipines",
      trendingText: "Trending",
      durationText: "15 Days Tour",
      locationText: "Australia"
    }, {
      imageSrc: "https://images.unsplash.com/photo-1584200186925-87fa8f93be9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      type: "Cruise",
      pricePerDay: "$169",
      title: "Cruise to the Mariana Trench and the Phillipines",
      trendingText: "Trending",
      durationText: "15 Days Tour",
      locationText: "Australia"
    }, {
      imageSrc: "https://images.unsplash.com/photo-1584200186925-87fa8f93be9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      type: "Cruise",
      pricePerDay: "$169",
      title: "Cruise to the Mariana Trench and the Phillipines",
      trendingText: "Trending",
      durationText: "15 Days Tour",
      locationText: "Australia"
    }, {
      imageSrc: "https://images.unsplash.com/photo-1584200186925-87fa8f93be9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      type: "Cruise",
      pricePerDay: "$169",
      title: "Cruise to the Mariana Trench and the Phillipines",
      trendingText: "Trending",
      durationText: "15 Days Tour",
      locationText: "Australia"
    }, {
      imageSrc: "https://images.unsplash.com/photo-1584200186925-87fa8f93be9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      type: "Cruise",
      pricePerDay: "$169",
      title: "Cruise to the Mariana Trench and the Phillipines",
      trendingText: "Trending",
      durationText: "15 Days Tour",
      locationText: "Australia"
    }, {
      imageSrc: "https://images.unsplash.com/photo-1584200186925-87fa8f93be9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      type: "Cruise",
      pricePerDay: "$169",
      title: "Cruise to the Mariana Trench and the Phillipines",
      trendingText: "Trending",
      durationText: "15 Days Tour",
      locationText: "Australia"
    }, {
      imageSrc: "https://images.unsplash.com/photo-1584200186925-87fa8f93be9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      type: "Cruise",
      pricePerDay: "$169",
      title: "Cruise to the Mariana Trench and the Phillipines",
      trendingText: "Trending",
      durationText: "15 Days Tour",
      locationText: "Australia"
    }, {
      imageSrc: "https://images.unsplash.com/photo-1584200186925-87fa8f93be9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      type: "Cruise",
      pricePerDay: "$169",
      title: "Cruise to the Mariana Trench and the Phillipines",
      trendingText: "Trending",
      durationText: "15 Days Tour",
      locationText: "Australia"
    }, {
      imageSrc: "https://images.unsplash.com/photo-1584200186925-87fa8f93be9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      type: "Cruise",
      pricePerDay: "$169",
      title: "Cruise to the Mariana Trench and the Phillipines",
      trendingText: "Trending",
      durationText: "15 Days Tour",
      locationText: "Australia"
    }
  ];
  return (
    <Container>
      <Content>
        <HeaderContainer>
          {/* {subheading && <Subheading>{subheading}</Subheading>} */}
          <Heading>Member Prowara</Heading>
          <Description>Para member di prowara dengan pencapaian mereka.</Description>
        </HeaderContainer>
        <TwoColumn>
            <CardColumn>
              <Card>
                <CardHeadingInfoContainer>
                  <CardHeadingTitle>Member Terbaru</CardHeadingTitle>
                </CardHeadingInfoContainer>
                {cards.map((card, index) => (
                  <Item>
                          <CardImage src="https://randomuser.me/api/portraits/women/24.jpg" alt="Rebecca Burke"/>
                          <DescContainer>
                              <div>
                                  Rebecca Burke <CardDescSub>Telah bergabung 1 jam yang lalu.</CardDescSub>
                              </div>
                          </DescContainer>
                  </Item>
                ))}
              </Card>
            </CardColumn>
            <CardColumn>
              <Card>
                <CardHeadingInfoContainer>
                  <CardHeadingTitle>Top Sponsor</CardHeadingTitle>
                </CardHeadingInfoContainer>
                {cards.map((card, index) => (
                  <Item>
                          <CardImage src="https://randomuser.me/api/portraits/women/24.jpg" alt="Rebecca Burke"/>
                          <DescContainer>
                              <div>
                                  Rebecca Burke
                              </div>
                              <CardDescSub2>
                                  Jumlah sponsor: <b>10 member</b>.
                              </CardDescSub2>
                          </DescContainer>
                  </Item>
                ))}
              </Card>
            </CardColumn>

        </TwoColumn>
      </Content>
    </Container>
  );
};
