//
// last updated: 20/05/2021
// - adding embeded youtube video
// @author: mahenza
import React, { Component } from "react";
import Tilt from 'react-tilt';

import YoutubeEmbed from '../../elements/YoutubeEmbed/YoutubeEmbed';

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
  MobileServiceList,
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
              <Tilt className="Tilt" options={{ max: 35 }} >
              <OurServicesTitle>
                <OurServicesBlackTitle>Our</OurServicesBlackTitle>
                <OurServicesRedTitle>Services</OurServicesRedTitle>
              </OurServicesTitle>
              </Tilt>
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
                    Support in gamification project’s definition and engagement
                    model at the service of your business.
                  </ServiceDescription>
                  <ServiceDescription>
                    Provide APIs to connect to client application as loyalty system.
                  </ServiceDescription>
                  <ServiceDescription>
                    Provide Inpoin gamification dashboard to design and monitor the
                    gamification model.
                  </ServiceDescription>
                  <ServiceDescription>
                    Technical support for integration via API to clients software,
                    website, app, company CRM, etc.
                  </ServiceDescription>
                </ServiceList>
                <MobileServiceList>
                  <ServiceDescription>
                        Support in gamification project’s definition and<br /> engagement
                    model at the service of your business.
                  </ServiceDescription>
                      <ServiceDescription>
                        Provide APIs to connect to client application as<br />loyalty system.
                  </ServiceDescription>
                      <ServiceDescription>
                        Provide Inpoin gamification dashboard to design<br /> and monitor the
                    gamification model.
                  </ServiceDescription>
                      <ServiceDescription>
                        Technical support for integration via API to <br />clients software,
                    website, app, company CRM, etc.
                  </ServiceDescription>
                </MobileServiceList>
              </OurServiceGroup>
            </Services>     
          </Side>
          <Main>
            <YoutubeEmbed embedId="mdeRjAZBeQI" />
            {/* <VideoFrame contenteditable="true"
              src="https://youtu.be/mdeRjAZBeQI"
              frameborder="0"
              controls 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
              type="video/mp4"></VideoFrame> */}
          </Main>
        </Row>
      </ContentWrapper>
    );
  }
}

export default _OurServicesView;
