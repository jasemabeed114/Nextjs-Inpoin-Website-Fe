//
// last updated: 13/04/2021
// @author: mahenza
import React, { Component } from "react";

import {
  ContentWrapper,
  Row,
  Side,
  Main,
  Services,
  OurServicesTitle,
  OurServicesBlackTitle,
  OurServicesRedTitle,
  OurServiceGroup,
  ServiceList,
  ServiceDescription,
  VideoFrame,
  Icons,
  IconsTitle,
  IconGroup,
  DesignIcon,
  MobileDesignIcon,
  PlatformIcon,
  IntegrationIcon,
  MobileIconGroup,
  MobilePlatformIcon,
  MobileIntegrationIcon,
} from "./_OurServicesView.elements";

function autoPlayVideo(e) {
  e.preventDefault();
  console.log("Hi - from Auto Play Video");
  //another options to enable autoplay is to upload the vids to youtube
}

class _OurServicesView extends Component {
  render() {
    return (
      <ContentWrapper onpageshow={autoPlayVideo}>
        <Row>
          <Side>
            <Services>
            <OurServicesTitle>
              <OurServicesBlackTitle>Our</OurServicesBlackTitle>
              <OurServicesRedTitle>Services</OurServicesRedTitle>
            </OurServicesTitle>
          <OurServiceGroup>
            <IconGroup>
              <Icons>
                {" "}   
                <DesignIcon/>
                <IconsTitle>Design</IconsTitle>
              </Icons>
              <Icons>
                <PlatformIcon />
                <IconsTitle>Platform</IconsTitle>
              </Icons>
              <Icons>
                {" "}
                <IntegrationIcon />
                <IconsTitle>Integration</IconsTitle>
              </Icons>
            </IconGroup>
            <MobileIconGroup>
              <Icons>
                {" "}
                <MobileDesignIcon />
                <IconsTitle>Design</IconsTitle>
              </Icons>
              <Icons>
                <MobilePlatformIcon />
                <IconsTitle>Platform</IconsTitle>
              </Icons>
              <Icons>
                {" "}
                <MobileIntegrationIcon />
                <IconsTitle>Integration</IconsTitle>
              </Icons>
            </MobileIconGroup>
            <ServiceList>
              <ServiceDescription>
                Support in gamification project’s definition and<br/> engagement
                model at the service of your business.
              </ServiceDescription>
              <ServiceDescription>
                Provide APIs to connect to client application as<br/>loyalty system.
              </ServiceDescription>
              <ServiceDescription>
                Provide Inpoin gamification dashboard to design<br/> and monitor the
                gamification model.
              </ServiceDescription>
              <ServiceDescription>
                    Technical support for integration via API to <br />clients software,
                website, app, company CRM, etc.
              </ServiceDescription>
            </ServiceList>
          </OurServiceGroup>
        </Services>     
          </Side>
          <Main>
            <VideoFrame
              src="http://in-poin.mahenza.com/wp-content/uploads/2021/02/WhatsApp-Video-2021-02-27-at-3.59.12-PM.mp4?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              //   allow="autoplay; encrypted-media"
            ></VideoFrame>
          </Main>
        </Row>
      </ContentWrapper>
    );
  }
}

export default _OurServicesView;
