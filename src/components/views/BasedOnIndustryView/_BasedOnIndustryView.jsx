import React, { Component } from "react";
import { 
    ContentWrapper,
    Row,
    Main, 
    Icons, 
    HealthCareIcon,
    Description, 
    Visual,
    BasedOnIndustry,
    BasedOnIndustryTitle,
    BasedOnIndustryWhiteTitle,
    BasedOnIndustryBlackTitle,
    BasedOnIndustryGroup,

} from "./_BasedOnIndustryView.elements";

class _BasedOnIndustryView extends Component{
    render(){
        return(
            <ContentWrapper>
                <Row>
                    <Main>
                        <BasedOnIndustry>
                    <BasedOnIndustryTitle>
                        <BasedOnIndustryBlackTitle>Based on</BasedOnIndustryBlackTitle>
                        <BasedOnIndustryWhiteTitle>Industries</BasedOnIndustryWhiteTitle>
                        <Visual src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/2.-Visual-Based-On-Industries-1-Healthcare-and-Services-01.png"></Visual>
                    </BasedOnIndustryTitle>
                    <BasedOnIndustryGroup>
                        <Icons>
                            <HealthCareIcon/>
                        </Icons>
                        <Description>
                            In the Health Care industry, having credibility and quality of human resources can affect the ease of achieving business goals. With the Inpoin service, appreciation and support from the company in the form of rewards that can affect employee productivity levels will be easier to obtain. Not only increases productivity levels, this system can also increase customer loyalty with a membership program with all its benefits.
                        </Description>
                    </BasedOnIndustryGroup>
                </BasedOnIndustry>
                    </Main>
                </Row>
            </ContentWrapper>
        );
    }
}

export default _BasedOnIndustryView;