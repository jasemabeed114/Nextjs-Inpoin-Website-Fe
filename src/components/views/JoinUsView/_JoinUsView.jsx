import React, { Component } from "react";

import { 
    ContentWrapper, 
    Row,
    Side,
    Main,
    JoinUs,
    JoinUsTitleGroup,
    JoinUsTitle,
    JoinUsSubtitle,
    Description,
} from "./_JoinUsView.elements";

import JoinUsForm from "../../elements/JoinUsForm/JoinUsForm";

class _JoinUsView extends Component{
    state = {
        fullName: "",
        email: "",
        contactNumber: "",
        industry: "",
        company: "",
        gamificationCheck: "",
        message: "",
    };
    render(){
        return(
            <ContentWrapper>
                <Row>
                    <Side>
                        <JoinUs>
                            <JoinUsTitleGroup>
                                <JoinUsTitle>Join<JoinUsSubtitle>Us</JoinUsSubtitle></JoinUsTitle>
                            </JoinUsTitleGroup>
                            <Description>
                                For any inquiries and needs please fill the form <br />and contact us.
                            </Description>
                        </JoinUs>
                    </Side>
                    <Main>
                        <JoinUsForm/>
                    </Main>
                </Row>               
            </ContentWrapper>
        );
    }
}

export default _JoinUsView;