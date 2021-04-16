//
// last updated: 13/04/2021
// @author: mahenza
import React, { Component } from "react";

import {
    ContentWrapper,
    Row,
    Side,
    Main,
    PlayButton,
    Visual,
    TourWelcome,
    TourWelcomeBlackTitle,
    TourWelcomeRedTitle,
} from "./_TourWelcomeView.elements";

function handleClick(e){
    e.preventDefault();
    console.log('Hi - from PlayButton')
}

class _TourWelcomeView extends Component{
    render(){
        return(
            <ContentWrapper>
                <Row>
                    <Side>
                        <Visual src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/Sally.png"></Visual>
                    </Side>
                    <Main>
                        <TourWelcome>
                            <TourWelcomeBlackTitle>
                                Push <br></br>the button <br></br>and get
                    </TourWelcomeBlackTitle>
                            <TourWelcomeRedTitle>
                                Your Points!
                    </TourWelcomeRedTitle>
                            <PlayButton onClick={handleClick}>Play</PlayButton>
                        </TourWelcome>
                    </Main>
                </Row>               
            </ContentWrapper>
        );
    }
}

export default _TourWelcomeView;