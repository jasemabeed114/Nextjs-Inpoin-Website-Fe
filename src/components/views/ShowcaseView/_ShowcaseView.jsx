import React, { Component } from "react";

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
                            <ShowcaseTitle>
                                <ShowcaseBlackTitle>
                                    Experience our game <br/>and earn
                            <ShowcaseRedTitle>Your Points!</ShowcaseRedTitle>
                                </ShowcaseBlackTitle>

                            </ShowcaseTitle>
                            <ShowcaseGroup>
                            </ShowcaseGroup>
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