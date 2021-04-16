import React, { Component } from "react";

import {
    ContentWrapper,
    Row,
    Side,
    Main,
    ExitTourWhiteTitle,
    ExitText,
    Visual,
    RedeemButton,
    ExitScoring,
    ExitScoringLogo,
    ExitTour,
    ExitTourTitle,

} from "./_ExitTourView.elements";


function handleClick(e) {
    e.preventDefault();
    console.log('Hi - from RedeemButton')
}

class _ExitTourView extends Component {
    render() {
        return (
            <ContentWrapper>
                <Row>
                    <Side>
                        <ExitTour>
                            <ExitTourTitle>
                                <ExitTourWhiteTitle>
                                    Congratulations!
                                </ExitTourWhiteTitle>
                            </ExitTourTitle>
                            <ExitText>you have completed the tour</ExitText>
                            <ExitScoring>YOU GOT xxxx points from <ExitScoringLogo src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/myinpoin-logo.png"></ExitScoringLogo> </ExitScoring>
                            <RedeemButton onClick={handleClick}> Redeem Now </RedeemButton>
                        </ExitTour>
                    </Side>
                    <Main>
                        <Visual src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/visual-tour-9.png"></Visual>
                    </Main>
                </Row>
            </ContentWrapper>
        );
    }
}

export default _ExitTourView;