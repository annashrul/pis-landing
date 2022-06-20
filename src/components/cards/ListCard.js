import React from "react";
import tw from "twin.macro";
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import moment from "moment";
import 'moment/locale/id';
moment.locale('id');

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

export default ({
  recent=[],
  top=[]
}) => {
  return (
    <Container id="top_member">
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
                {recent.map((card, index) => (
                  <Item>
                          <CardImage src={card.foto} alt={card.fullname}/>
                          <DescContainer>
                              <div>
                                  {card.fullname} <CardDescSub>Telah bergabung {moment(card.created_at).fromNow()}.</CardDescSub>
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
                {top.map((card, index) => (
                  <Item>
                          <CardImage src={card.foto} alt={card.fullname}/>
                          <DescContainer>
                              <div>
                                  {card.fullname}
                              </div>
                              <CardDescSub2>
                                  Jumlah sponsor: <b>{card.jumlah_sponsor} member</b>.
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
