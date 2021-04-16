import React, { Component } from "react";

import {
    Container,
    Form,
    DataGroup,
    DataLabelGroup,
    ImportantSign,
    DataLabel,
    DataInput,
    DataDropdown,
    DataDropdownItem,
    DataTextArea,
    SubmitButton,
    MultiSelect,
    SelectBox,
    OverSelect,
    CheckBoxes,
    CheckBoxesLabel,
} from "./JoinUsForm.elements";

class JoinUsForm extends Component {

    state = {
        fullName: "",
        email: "",
        contactNumber: "",
        industry: "",
        company:"",
        gamificationCheck:"",
        message:"",
    };
    render() {
        return (
            <Container>
                <Form>
                    <DataGroup>
                        <DataLabelGroup>
                            <DataLabel>Full Name</DataLabel>
                            <ImportantSign> * </ImportantSign>
                        </DataLabelGroup>
                        <DataInput
                            placeholder={"John Doe"}
                            value={this.state.fullName}
                            onChange={(e) => this.setState({ fullName: e.target.value })}
                            required
                        ></DataInput>
                    </DataGroup>
                    <DataGroup>
                        <DataLabelGroup>
                            <DataLabel>Email</DataLabel>
                            <ImportantSign>*</ImportantSign>
                        </DataLabelGroup>
                        <DataInput
                            value={this.state.email}
                            placeholder={"john.doe@gmail.com"}
                            onChange={(e) => this.setState({ email: e.target.value })}
                            type="email"
                            required
                        ></DataInput>
                    </DataGroup>
                    <DataGroup>
                        <DataLabelGroup>
                            <DataLabel>Contact Number</DataLabel>
                            <ImportantSign>*</ImportantSign>
                        </DataLabelGroup>
                        <DataInput
                            value={this.state.contactNumber}
                            placeholder={"+62"}
                            onChange={(e) => this.setState({ contactNumber: e.target.value })}
                            type="tel"
                            required
                        ></DataInput>
                    </DataGroup>
                    <DataGroup>
                        <DataLabelGroup>
                            <DataLabel>Industry</DataLabel>
                        </DataLabelGroup>
                        <DataDropdown
                            value={this.state.industry}
                            onChange={(e) => this.setState({ industry: e.target.value })}
                        >
                            <DataDropdownItem
                                value={""} hidden>Select Your Industry                           
                            </DataDropdownItem>
                            <DataDropdownItem
                                value={"Healthcare and Services"}>Healthcare and Services
                            </DataDropdownItem>
                            <DataDropdownItem
                                value={"Banking and Financial Services"}>Banking and Financial Services
                            </DataDropdownItem>
                            <DataDropdownItem
                                value={"Hospitality and Travel"}>Hospitality and Travel
                            </DataDropdownItem>
                            <DataDropdownItem
                                value={"Consumer Goods"}>Consumer Goods
                            </DataDropdownItem>
                            <DataDropdownItem
                                value={"Modern Retail"}>Modern Retail
                            </DataDropdownItem>
                            <DataDropdownItem
                                value={"Others"}>Others
                            </DataDropdownItem>
                        </DataDropdown>
                    </DataGroup>
                    <DataGroup>
                        <DataLabelGroup>
                            <DataLabel>Company</DataLabel>
                            <ImportantSign> * </ImportantSign>
                        </DataLabelGroup>
                        <DataInput
                            value={this.state.company}
                            onChange={(e) => this.setState({ company: e.target.value })}
                            required
                        ></DataInput>
                    </DataGroup>
                    <DataGroup>
                        <DataLabelGroup>
                            <DataLabel>Your Gamification Needs</DataLabel>
                        </DataLabelGroup>
                        <DataDropdown
                            value={this.state.gamificationCheck}
                            onChange={(e) => this.setState({ gamificationCheck: e.target.value })}
                        >
                            <DataDropdownItem
                                value={""} hidden>Choose Your Gamification Needs
                            </DataDropdownItem>
                            <DataDropdownItem
                                value={"Customer Loyalty"}>Customer Loyalty
                            </DataDropdownItem>
                            <DataDropdownItem
                                value={"Salesforce Team"}>Salesforce Team
                            </DataDropdownItem>
                            <DataDropdownItem
                                value={"Training"}>Training
                            </DataDropdownItem>
                            <DataDropdownItem
                                value={"Others"}>Others
                            </DataDropdownItem>
                        </DataDropdown>
                    </DataGroup>
                    <DataGroup>
                        <DataLabelGroup>
                            <DataLabel>Message</DataLabel>
                        </DataLabelGroup>
                        <DataTextArea
                            value={this.state.message}
                            onChange={(e) => this.setState({ message: e.target.value })}
                            rows={"10"}
                            cols={"30"}
                        ></DataTextArea>
                    </DataGroup>                   
                    <SubmitButton>Submit</SubmitButton>
                </Form>
            </Container>
        );
    }
}

export default JoinUsForm;