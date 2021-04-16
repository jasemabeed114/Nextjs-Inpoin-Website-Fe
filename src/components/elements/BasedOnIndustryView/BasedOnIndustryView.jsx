import React, { Component } from "react";
import { 
    ContentWrapper, 
    WhiteSubTitle,
    BlackTitle,
    Slider, 
    Icons, 
    IconsTitle,
    DescriptionTitle,
    Description,
    Visual,
    BasedOnIndustry,
    BasedOnIndustryTitle,
    BasedOnIndustryWhiteTitle,
    BasedOnIndustryBlackTitle,
    BasedOnIndustryGroup,

} from "./BasedOnIndustryView.elements";
import Swiper from '../Swiper/Swiper';
import SwiperSlide from '../Swiper/SwiperSlide';
import { IMAGES } from '../../../configs/'

class BasedOnIndustryView extends Component{
  render(){
    return(
      <ContentWrapper>
        <div style={{ maxWidth: '1300px', width: '100vw', padding: '16px' }}>
          <Swiper slidePerView={1} spaceBetween={30}>
            <SwiperSlide>
              <BasedOnIndustry>
                <BasedOnIndustryTitle>
                  <div>
                    <BasedOnIndustryBlackTitle>Based on</BasedOnIndustryBlackTitle>
                    <BasedOnIndustryWhiteTitle>Industries</BasedOnIndustryWhiteTitle>
                  </div>
                  <Visual src={IMAGES.INDUSTRY_HEALTH}></Visual>
                </BasedOnIndustryTitle>
                <BasedOnIndustryGroup>
                  <DescriptionTitle>
                    Health Care
                  </DescriptionTitle>
                  <Description>
                    In the Health Care industry, having credibility and quality of human resources can affect the ease of achieving business goals. With the Inpoin service, appreciation and support from the company in the form of rewards that can affect employee productivity levels will be easier to obtain. Not only increases productivity levels, this system can also increase customer loyalty with a membership program with all its benefits.
                  </Description>
                </BasedOnIndustryGroup>
              </BasedOnIndustry>
            </SwiperSlide>

            <SwiperSlide>
              <BasedOnIndustry>
                <BasedOnIndustryTitle>
                  <div>
                    <BasedOnIndustryBlackTitle>Based on</BasedOnIndustryBlackTitle>
                    <BasedOnIndustryWhiteTitle>Industries</BasedOnIndustryWhiteTitle>
                  </div>
                  <Visual src={IMAGES.INDUSTRY_TELECOM}></Visual>
                </BasedOnIndustryTitle>
                <BasedOnIndustryGroup>
                  <DescriptionTitle>
                    TELECOM
                  </DescriptionTitle>
                  <Description>
                    Telecom has become an industry that is very close to its users. However, despite the industry's aggressive marketing tactics and strategies, telecommunications companies have encountered challenges in maintaining the loyalty of their customers. In fact, the main factor in surviving in this industry, a company must be able to maintain long-term relationships with its customers. Here's Inpoin will give you help.
                  </Description>
                </BasedOnIndustryGroup>
              </BasedOnIndustry>
            </SwiperSlide>
          </Swiper>
        </div>
      </ContentWrapper>
    );
  }
}

export default BasedOnIndustryView;