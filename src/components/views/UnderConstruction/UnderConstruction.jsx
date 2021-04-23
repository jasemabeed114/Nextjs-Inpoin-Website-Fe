//
// last updated: 13/04/2021
// @author: mahenza
import React, { Component } from "react";

import {
    ContentWrapper,
    Row,
    BlackTitle,
} from "./UnderConstruction.elements";

class UnderConstruction extends Component {
    render() {
        return (
            <ContentWrapper>
                <Row>
                    <p className="clip">UNDER DEVELOPMENT
                    <BlackTitle>scroll down to preview next section</BlackTitle>
                    </p>
                </Row>
            </ContentWrapper>
        );
    }
}

export default UnderConstruction;