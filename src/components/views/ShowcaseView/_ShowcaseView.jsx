import React, { Component } from "react";
import Tilt from 'react-tilt';

import {
    ContentWrapper,
    Row,
    Side,
    Main,
    Showcase,
    ShowcaseTitle,
    ShowcaseBlackTitle,
    ShowcaseRedTitle,
    ShowcaseGroup,
    ShowcaseFrame,
    Visual,
} from "./_ShowcaseView.elements";

class _ShowcaseView extends Component {
    render() {
        return (
            <ContentWrapper>
                <Row>                
                    <Side>
                        <Showcase>
                            <Tilt className="Tilt" options={{ max: 35 }} >
                            <ShowcaseTitle>
                                <ShowcaseBlackTitle>
                                    Experience our game <br/>and earn
                            <ShowcaseRedTitle>Your Points!</ShowcaseRedTitle>
                                </ShowcaseBlackTitle>
                            </ShowcaseTitle>
                            </Tilt>
                        </Showcase>
                    </Side>
                    <Main>
                        <Visual src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/visual-tour-8.png"></Visual>
                        {/* <ShowcaseFrame></ShowcaseFrame> */}

                    </Main>
                </Row>
            </ContentWrapper>
        );
    }
}

export default _ShowcaseView;