import React, { Component } from "react";
import Tilt from 'react-tilt';
import { 
    ContentWrapper,
    Description,
    MobileDescription,
    FAQWrapper,
    Logo,
    LogoWrapper,
    ListPartnerFAQ,
    ListPartnerFAQTitle,
    ListPartnerFAQBlackTitle,
    ListPartnerFAQRedTitle,
    ListPartnerFAQGroup,
    SectionWrapper,
    SectionPartner,
    ReadMoreButton
} from "../ListPartnersFAQView/ListPartnersFAQView.elements";

import Accordion from '../../elements/Accordion/Accordion';

import Swiper from '../Swiper/Swiper';
import SwiperSlide from '../Swiper/SwiperSlide';


class ListPartnersFAQView extends Component{
  render(){

    const sliderBreakpoints = {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }

    const faq = [
      { 
        title: 'What is Inpoin?',
        description: 'Inpoin is a gamification platform. Inpoin helps enterprises to retain customers and build loyal customers. With its gamification capability, Inpoin encourages customers to continuously engage with the product,experience the challenge, and get the rewards.'
      },
      {
        title: 'What are the advantages of using the Inpoin platform?',
        description: (
          <ul>
            <li>
              Easily to use and to set up your gamification rules/target/mission beyond ‘transaction-gamification’.
            </li>
              <li>
              Various game mechanics such as points, experience points, levels, badges, leaderboard, rules,
              targets, missions, and various mini-games such as lucky spin, lucky cards, lucky envelope and
              lucky ‘celengan’ to give extra points.
              </li>
            <li>
              Easy to integrate with any platform or digital touchpoints through our API.
            </li>
            <li>
              Easily and effectively monitor all customers gamification activities and your business
              performance by combining all data sources into a single, beautiful dashboard.
            </li>
          </ul>
        )
      },
      {
        title: 'How can I subscribe to Inpoin?',
        description: 'Please send an email to hello@inpoin.id, or via whatsapp/message to +62 812-2423-2101.'
      },
      {
        title: 'How do I log in to the Inpoin dashboard?',
        description: (
          <>
            <ol>
                <li>
                  Visit https://dashboard-gamification.inpoin.id/login
                </li>
                <li>
                  Fill in your username and password
                </li>
                  <li>
                  Enjoy your gamification zone
                  </li>
              </ol>
              <br/>
            <p>If the entered username and password are correct, you will immediately be directed to the Inpoin dashboard page. </p>
          </>
        )
      },
      {
        title: 'If I forget my username and password, how do I recover my account?',
        description: (
          <>
            <ol>
              <li>Click “Forgot Password” </li>
              <li>Enter the email that has been registered in Inpoin </li>
              <li>Click send, and wait for an email from our system to receive a link to enter your new password.</li>
            </ol>
            <br/>
            <p>If you have trouble recovering your username and password, please contact Inpoin admin.  </p>
          </>
        )
      },
      {
        title: 'How can I set up my gamification in Inpoin?',
        description: (
          <>
            <p>
              You need to login to Inpoin dashboard. The steps you need to set up your gamification design are:
            </p>
            <br/>
            <ol>
              <li>
                Configure Group Level and Detailed Level
              </li>
              <li>
                Configuration Rule
              </li>
              <li>
                Configuration Target
              </li>
              <li>
                Configuration Mission
              </li>
              <li>
                Configuration Karma System
              </li>
              <li>
                Configuration Rewards Configuration
              </li>
            </ol>
          </>
        )
      },
      {
        title: 'How can I configure Group Level in Inpoin?',
        description: (
          <>
            <ol>
              <li>
                Select the level menu
              </li>
              <li>
                Click the button "Add Group Level"
              </li>
              <li>
                Fill in the group level information
              </li>
                <li>
                Upload image
              </li>
              <li>
                Set the activation status
              </li>
              <li>
                Click "Save"
              </li>
            </ol>
          </>
        )
      },
    ]

    return(
      <ContentWrapper>
        <ListPartnerFAQ>
          <SectionWrapper>
            <SectionPartner>
              <Tilt className="Tilt" options={{ max: 35 }} >
              <ListPartnerFAQTitle>
                <ListPartnerFAQBlackTitle>
                  Project
                </ListPartnerFAQBlackTitle>
                <ListPartnerFAQRedTitle>
                  Portfolio
                </ListPartnerFAQRedTitle>
              </ListPartnerFAQTitle>
              </Tilt>
              <Description>
                Fulfilling their business objectives and increase their costumer loyalty, Inpoin has the previlege of working with some of the most costumer centric companies
              </Description>
              <MobileDescription>
                Fulfilling their business objectives and increase <br/>
                their costumer loyalty, Inpoin has the previlege of <br />
                working with some of the most costumer centric companies.
              </MobileDescription>
            </SectionPartner>
            <SectionPartner>
              <ListPartnerFAQGroup>
                <Swiper breakpoints={sliderBreakpoints} hideBullet slidesPerView={'auto'} spaceBetween={10}>
                  <SwiperSlide>
                    <LogoWrapper>
                      <Logo className="item-1" src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/8.-Visual-Logo-Project-Portofolio-1-MyPertamina.png"/>
                    </LogoWrapper>
                  </SwiperSlide>
                  <SwiperSlide>
                    <LogoWrapper>
                      <Logo className="item-2" src="http://in-poin.mahenza.com/wp-content/uploads/2021/04/my_indihome.png"/>
                    </LogoWrapper>
                  </SwiperSlide>
                  <SwiperSlide>
                    <LogoWrapper>
                      <Logo className="item-3" src="http://in-poin.mahenza.com/wp-content/uploads/2021/04/qren.png"/>
                    </LogoWrapper>
                  </SwiperSlide>
                  <SwiperSlide>
                    <LogoWrapper>
                      <Logo className="item-4" src="http://in-poin.mahenza.com/wp-content/uploads/2021/04/wonderin.png"/>
                    </LogoWrapper>
                  </SwiperSlide>
                  <SwiperSlide>
                    <LogoWrapper>
                      <Logo className="item-5" src="http://in-poin.mahenza.com/wp-content/uploads/2021/04/Screen-Shot-2021-04-21-at-09.58.28.png" />
                    </LogoWrapper>
                  </SwiperSlide>
                  <SwiperSlide>
                    <LogoWrapper>
                      <Logo className="item-6" src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/17.-Visual-Logo-Project-Portofolio-10-MyDigibiz.png"/>
                    </LogoWrapper>
                  </SwiperSlide>
                  <SwiperSlide>
                    <LogoWrapper>
                      <Logo className="item-7" src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/10.-Visual-Logo-Project-Portofolio-2-myIndiHome-Partner.png"/>
                    </LogoWrapper>
                  </SwiperSlide>
                </Swiper>
              </ListPartnerFAQGroup>  
            </SectionPartner>
          </SectionWrapper>
          <SectionWrapper>
            <div style={{ flex: 1, alignSelf: 'left' }}>
              <Tilt className="Tilt" options={{ max: 35 }} >
              <ListPartnerFAQBlackTitle>
                FAQ
              </ListPartnerFAQBlackTitle>
              </Tilt>
              <Description>
                Peoples usually ask about
              </Description>
              <MobileDescription>
                Peoples usually ask about
              </MobileDescription>
              <ReadMoreButton onClick={() => window.open("http://inpoin.id/myinpoin/faq", "_blank")}>
                Read More..
              </ReadMoreButton>
            </div>
            <div style={{ flex: 1, alignSelf: 'center' }}>
                <FAQWrapper>
                  <Accordion data={faq} />
                </FAQWrapper>
            </div>
          </SectionWrapper>
        </ListPartnerFAQ>             
      </ContentWrapper>
    );
  }
}

export default ListPartnersFAQView;