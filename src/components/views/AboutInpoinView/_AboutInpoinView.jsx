//
// last updated: 13/04/2021
// @author: mahenza
import React, { Component } from "react";

import {
    ContentWrapper,
    Row,
    Side,
    Main,
    AboutInpoin,
    AboutTitleGroup,
    AboutInpoinTitle,
    AboutInpoinSubtitle,
    Description,
    MobileDescription,
    Visual,
} from "./_AboutInpoinView.elements";

class _AboutInpoinView extends Component {
    render() {
        return (
            <ContentWrapper>
                <Row>
                    <Side>
                        <AboutInpoin>
                            <AboutTitleGroup>
                                <AboutInpoinTitle>Let's get <br />to know <br />about<AboutInpoinSubtitle>Inpoin!</AboutInpoinSubtitle></AboutInpoinTitle>
                            </AboutTitleGroup>
                        </AboutInpoin>
                        <Description>
                            Inpoin is a platform that help to boost your customer engagement,
                            experience, and rewards to build loyalty through gamification
                            approaches.
                        </Description>
                        <MobileDescription>
                            Inpoin is a platform that help to boost your <br />costumer engagement,
                            experience, and rewards<br /> to build loyalty through gamification
                            approaches.
                        </MobileDescription>
                    </Side>
                    <Main>
                        <Visual src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/A1-AboutInpoin.png" />
                    </Main>
                </Row>
            </ContentWrapper>
        );
    }
}

export default _AboutInpoinView;
