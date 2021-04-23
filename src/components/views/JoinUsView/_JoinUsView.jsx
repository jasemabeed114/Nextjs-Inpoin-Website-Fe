import React, { Component } from "react";
import Tilt from 'react-tilt';

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
                            <Tilt className="Tilt" options={{ max: 35 }} >
                            <JoinUsTitleGroup>
                                <JoinUsTitle>Join<JoinUsSubtitle>Us</JoinUsSubtitle></JoinUsTitle>
                            </JoinUsTitleGroup>
                            </Tilt>
                            <Description>
                                For any inquiries and needs<br/> please fill the form and contact us.
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