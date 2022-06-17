import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import Pricing from "components/pricing/ThreePlans";
import Blog from "components/cards/TwoTrendingPreviewCardsWithImage";
import Testimonial from "components/testimonials/SimplePrimaryBackground";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Card from "components/cards/ListCard.js";

export default () => (
  <AnimationRevealPage>
    <Hero
    heading={
        <>
          Paket Bergabung
        </>
      }
    />
    <MainFeature 
    description ={
      <>
      Legalitas :
      <br/>✓ NIB .2611210002833
      <br/>✓ SK.KEMENKUMHAM UHU - 0075353. AH .01 .01 
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;TAHUN 2021 No .4021112336106067
      <br/>✓ NPWP.53.387 .322 .0 - 451.000
      </>
    }
    statistics={[
                {
                  key: "Members",
                  value: "2282+"
                },
                {
                  key: "Bonus dibagikan",
                  value: "122x"
                },
                {
                  key: "Bonus Ditarik",
                  value: "Rp 1.000.000.000  "
                }
              ]}
    />
    <Pricing
      subheading=""
      heading={
        <>
          Paket Bergabung
        </>
      }
      description="Paket bergabung dengan prowara sangat terjangkau!"
    />
    <Card />
    <Blog />

    <Testimonial
      subheading=""
      heading={
        <>
          Testimoni
        </>
      }
      description="Apa kata member PROWARA selama menggunakan sistem dari kami."
      testimonials={[
        {
          imageSrc:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
          quote:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
          customerName: "Charlotte Hale",
          customerTitle: "CEO, Tesla Inc."
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
          quote:
            "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
          customerName: "Adam Cuppy",
          customerTitle: "Founder, Nestle"
        }
      ]}
      textOnLeft={true}
    />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
