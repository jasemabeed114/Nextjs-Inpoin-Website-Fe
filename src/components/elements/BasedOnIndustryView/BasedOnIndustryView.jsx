import React, { Component } from "react";
import { 
    ContentWrapper, 
    WhiteSubTitle,
    BlackTitle,
    Slider, 
    Icons, 
    IconsTitle,
    DescriptionTitle,
    TitleIcon,
    Description,
    MobileDescription,
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
        <Slider>
          <Swiper slidePerView={1} spaceBetween={30} align={'center'}>
            <SwiperSlide>
              <BasedOnIndustry>
                <BasedOnIndustryTitle>
                  <div>
                    <BasedOnIndustryBlackTitle>Based on</BasedOnIndustryBlackTitle>
                    <BasedOnIndustryWhiteTitle>Industries</BasedOnIndustryWhiteTitle>
                  </div>
                  {/* <Visual src={IMAGES.INDUSTRY_HEALTH}></Visual> */}
                  <Visual src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/2.-Visual-Based-On-Industries-1-Healthcare-and-Services-01.png" />
                </BasedOnIndustryTitle> 
                <BasedOnIndustryGroup>
                  <TitleIcon src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/label-howwework-1.png" />
                  <Description>
                    In the Health Care industry, having credibility and quality of human resources can affect the ease of achieving business goals. With the Inpoin service, appreciation and support from the company in the form of rewards that can affect employee productivity levels will be easier to obtain. Not only increases productivity levels, this system can also increase customer loyalty with a membership program with all its benefits.
                  </Description>
                  <MobileDescription>
                    In the Health Care industry, having credibility <br />
                    and quality of human resources can affect <br />
                    the ease of achieving business goals. With the Inpoin <br />
                    service, appreciation and support from the company <br />
                    in the form of rewards that can affect employee <br />
                    productivity levels will be easier to obtain. <br />
                    Not only increases productivity levels, this system <br />
                    can also increase customer loyalty <br />
                    with a membership program with all its benefits.
                </MobileDescription>
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
                  {/* <Visual src={IMAGES.INDUSTRY_HEALTH}></Visual> */}
                  <Visual src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/3.-Visual-Based-On-Industries-2-Banking-and-Financial-Services.png" />
                </BasedOnIndustryTitle>
                <BasedOnIndustryGroup>
                  <TitleIcon src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/label-howwework-2.png" />
                  <Description>
                    Having a large costumer base and high sales point, Banking and Financial Services should maintain relationships and engage more closely with existing customers. With Inpoin services, this industry can build a good ecosystem with gamification approaches an also increasing customer financial productivity.
                  </Description>
                  <MobileDescription>
                    Having a large costumer base and high sales <br />
                    point, Banking and Financial Services should <br />
                    maintain relationships and engage more <br />
                    closely with existing customers. With Inpoin services,<br />
                    this industry can build a good ecosystem with <br />
                    gamification approaches an also increasing <br />
                    customer financial productivity.
                </MobileDescription>
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
                  {/* <Visual src={IMAGES.INDUSTRY_HEALTH}></Visual> */}
                  <Visual src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/4.-Visual-Based-On-Industries-3-Hospitality-and-Travel.png" />
                </BasedOnIndustryTitle>
                <BasedOnIndustryGroup>
                  <TitleIcon src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/label-howwework-3.png" />
                  <Description>
                    Earning and maintaining customer loyalty can make it easier for Hospitality and Travel industry to achieve business goals that are highly dependent on customer satisfaction. The ease of Inpoin's services has given rise to several uses for Hospitality and Travel industry, including improve the efficiency of service and treatment for customer, and create preferences and maintaining consistency in repeated transactions.
                  </Description>
                  <MobileDescription>
                    Earning and maintaining customer loyalty <br />
                    can make it easier for Hospitality and Travel industry <br />
                    to achieve business goals that are highly dependent<br />
                    on customer satisfaction. The ease of Inpoin's <br />
                    services has given rise to several uses <br />
                    for Hospitality and Travel industry, <br />
                    including improve the efficiency of service <br />
                    and treatment for customer, and create preferences <br />
                    and maintaining consistency in repeated transactions.
                </MobileDescription>
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
                  {/* <Visual src={IMAGES.INDUSTRY_HEALTH}></Visual> */}
                  <Visual src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/5.-Visual-Based-On-Industries-4-Consumer-Goods.png" />
                </BasedOnIndustryTitle>             
                <BasedOnIndustryGroup>
                  <TitleIcon src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/label-howwework-4.png" />
                  <Description>
                    Embedding “Brand Values” in the minds of customers is one of the most important things for the consumer goods industry to do. Inpoin services, will support your company to create customer loyalty by communicating and delivering "Brand Values" right on target. Inpoin's service will help you developing business goals with the right tactics and strategies, lead generation, and also repeated transactions.
                  </Description>
                  <MobileDescription>
                    Embedding “Brand Values” in the minds of customers is one <br />
                    of the most important things for the consumer goods <br />
                    industry to do. Inpoin services, will support <br />
                    your company to create customer loyalty by <br />
                    communicating and delivering "Brand Values" <br />
                    right on target. Inpoin's service will help you <br />
                    developing business goals with the right tactics <br />
                    and strategies, lead generation, and also repeated <br />
                    transactions.
                </MobileDescription>
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
                  {/* <Visual src={IMAGES.INDUSTRY_HEALTH}></Visual> */}
                  <Visual src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/6.-Visual-Based-On-Industries-5-Modern-Retail.png" />
                </BasedOnIndustryTitle>
                <BasedOnIndustryGroup>
                  <TitleIcon src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/label-homework-5.png" />
                  <Description>
                    One of the things that has made this industry great are customers. Customer loyalty has become an important commodity and has succeeded in creating fierce competition in the Modern Retail industry. Inpoin with experience and quality in loyalty marketing can help to create an effective and profitable loyalty program in the retail industry.
                  </Description>
                  <MobileDescription>
                    One of the things that has made this industry great <br />
                    are customers.Customer loyalty has become <br />
                    an important commodity and has succeeded in <br />
                    creating fierce competition in the Modern Retail <br />
                    industry. Inpoin with experience and quality in loyalty<br />
                    marketing can help to create an effective and <br />
                    profitable loyalty program in the retail industry.
                </MobileDescription>
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
                  {/* <Visual src={IMAGES.INDUSTRY_HEALTH}></Visual> */}
                  <Visual src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/7.-Visual-Based-On-Industries-6-Telecom.png" />
                </BasedOnIndustryTitle>
                <BasedOnIndustryGroup>
                  <TitleIcon src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/label-howwework-6.png" />
                  <Description>
                    Telecom has become an industry that is very close to its users. However, despite the industry's aggressive marketing tactics and strategies, telecommunications companies have encountered challenges in maintaining the loyalty of their customers. In fact, the main factor in surviving in this industry, a company must be able to maintain long-term relationships with its customers. Here's Inpoin will give you help.
                  </Description>
                  <MobileDescription>
                    Telecom has become an industry that is very close <br />
                    to its users. However, despite the industry's <br />
                    aggressive marketing tactics and strategies, <br />
                    telecommunications companies have encountered <br />
                    challenges in maintaining the loyalty <br />
                    of their customers. In fact, the main factor <br />
                    in surviving in this industry, a company must be able <br />
                    to maintain long-term relationships <br />
                    with its customers. Here's Inpoin will give you help.
                </MobileDescription>
                </BasedOnIndustryGroup>
                </BasedOnIndustry>
            </SwiperSlide>

          </Swiper>
        </Slider>
        
        
        {/* <div style={{ maxWidth: '1300px', width: '100vw', padding: '16px' }}>
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
        </div> */}

      </ContentWrapper>
    );
  }
}

export default BasedOnIndustryView;