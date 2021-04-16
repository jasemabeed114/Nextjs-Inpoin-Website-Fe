import React, { Component } from "react";

import {
  ContentWrapper,
  Row,
  Side,
  Main,
  HowWeWork,
  HowWeWorkTitle,
  HowWeWorkWhiteTitle,
  HowWeWorkRedTitle,
  Label,
  Item,
  Visual,
} from './_HowWeWorkView.elements';

import Swiper from '../../elements/Swiper/Swiper';
import SwiperSlide from '../../elements/Swiper/SwiperSlide';

class _HowWeWorkView extends Component {
  render() {
    return (
      <ContentWrapper>
        <Row>
          <Side>
            <Label>How We Work</Label>
            <Swiper>
              <SwiperSlide>
                <HowWeWork>
                  <HowWeWorkTitle>
                    <HowWeWorkWhiteTitle>
                      Integration, <br />
                      Implementation, <br />
                      Performance <br />
                      Monitoring 
                    </HowWeWorkWhiteTitle>
                    <HowWeWorkRedTitle>
                      and Evaluation
                    </HowWeWorkRedTitle>
                    <Item>
                      Go-live & maintenance. Monitoring user <br/> 
                      habits, frequency of use, favorite rule, <br/> 
                      achievement, etc.
                    </Item>
                  </HowWeWorkTitle>
                </HowWeWork>
              </SwiperSlide>
              <SwiperSlide>
                <HowWeWork>
                  <HowWeWorkTitle>
                    <HowWeWorkWhiteTitle>
                      Identify Business  
                    <HowWeWorkRedTitle>
                      Objectives
                    </HowWeWorkRedTitle>
                    </HowWeWorkWhiteTitle>
                      <Item>
                        A design has to be purposive & align with business objectives.<br/> 
                        What are the goals? <br/> 
                        What is the designed to accomplish?
                      </Item>
                  </HowWeWorkTitle>
                </HowWeWork>
              </SwiperSlide>
              <SwiperSlide>
                <HowWeWork>
                  <HowWeWorkTitle>
                    <HowWeWorkWhiteTitle>
                      Delineate Target
                    </HowWeWorkWhiteTitle>
                    <HowWeWorkRedTitle>
                      Behaviours
                    </HowWeWorkRedTitle>
                    <Item>
                      Gamification is about motivation.<br/> 
                      What are the target behaviours? <br/> What do you want people to do?
                    </Item>
                  </HowWeWorkTitle>
                </HowWeWork>
              </SwiperSlide>
              <SwiperSlide>
                <HowWeWork>
                  <HowWeWorkTitle>
                    <HowWeWorkWhiteTitle>
                      Describe
                    </HowWeWorkWhiteTitle>
                    <HowWeWorkRedTitle>
                      the Players
                    </HowWeWorkRedTitle>
                    <Item>
                      Human centric, player centric; <br /> the essence for Gamification.<br/>
                      Who are the players?
                    </Item>
                  </HowWeWorkTitle>
                </HowWeWork>
              </SwiperSlide>
              <SwiperSlide>
                <HowWeWork>
                  <HowWeWorkTitle>
                    <HowWeWorkWhiteTitle>
                      Gamification <br/>
                      Design Proposal
                    </HowWeWorkWhiteTitle>
                    <HowWeWorkRedTitle>
                      and Approval
                    </HowWeWorkRedTitle>
                    <Item>
                      Game Design to achieve specific objective:<br/>
                      Rules, game elements, and development process.
                    </Item>
                  </HowWeWorkTitle>
                </HowWeWork>
              </SwiperSlide>
            </Swiper>
          </Side>
          <Main>
            <Visual src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/B-6-integration.png" />
          </Main>
        </Row>
      </ContentWrapper>
    );
  }
}

export default _HowWeWorkView;
