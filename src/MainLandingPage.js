import React, {useEffect, useState} from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { withRouter } from "react-router-dom";
import Hero from "components/hero/BackgroundAsImage.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import Pricing from "components/pricing/ThreePlans";
import Blog from "components/cards/TwoTrendingPreviewCardsWithImage";
import Testimonial from "components/testimonials/SimplePrimaryBackground";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Member from "components/cards/ListCard.js";
import {useDispatch,useSelector} from 'react-redux'
import {getMember} from './redux/actions/landing.action'
import { toRp } from "helpers/genera";

const Main = (props) => {
  const dispatch = useDispatch();
  const recent = useSelector(state => state.landingReducer.recent)
  const top = useSelector(state => state.landingReducer.top)
  const datum = useSelector(state => state.landingReducer)
  useEffect(() => {
    dispatch(getMember());
    // document.title = `Invoice PROWARA`;
  }, []);
  
  return (
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
                    value: datum.total_member+"+"
                  },
                  {
                    key: "Bonus dibagikan",
                    value: datum.count_wd+"x"
                  },
                  {
                    key: "Bonus Ditarik",
                    value: toRp(datum.total_wd || 0)
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
      <Member 
        recent={recent}
        top={top}
      />
      <Blog
        cards = {datum.promo.map(item => {
          return {
            imageSrc: item.picture,
            title: item.title,
          }
        })
        }
      />

      <Testimonial
        subheading=""
        heading={
          <>
            Testimoni
          </>
        }
        description="Apa kata member PROWARA selama menggunakan sistem dari kami."
        // testimonials={testi}
        textOnLeft={true}
      />
      <ContactUsForm
        link={`https://wa.me/+6281919555858`}
      />
      <Footer />
    </AnimationRevealPage>
  );
};

export default withRouter(Main)
