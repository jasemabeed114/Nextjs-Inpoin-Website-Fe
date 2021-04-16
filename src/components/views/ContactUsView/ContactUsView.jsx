import React, { Component } from "react";

import {   
    ContentWrapper,
    Row,
    Side,
    Main,
    ContactUs,
    ContactUsGroup,
    ContactUsTitle,
    ContactUsSubtitle,
    Visual,
    TableContactUs,
    MobileTableContactUs,
    TableTitle,
    TableDetail,
    AddressIcon,
    MobileAddressIcon,
    PhoneIcon,
    MobilePhoneIcon,
    EmailIcon,
    MobileEmailIcon,
    SocialMediaIcon,
    MobileSocialMediaIcon,
    TableIcon,
    InstagramIcon,
    TwitterIcon,
    FacebookIcon,
    YoutubeIcon,
    LinkedInIcon,
    Link,
} from "./ContactUsView.elements";

class ContactUsView extends Component {
    render() {
        return (
            <ContentWrapper>
                <Row>
                    <Side>
                        <ContactUs>
                            <ContactUsGroup>
                                <ContactUsTitle>
                                    Contact
                                <ContactUsSubtitle>Us</ContactUsSubtitle>
                                </ContactUsTitle>
                            </ContactUsGroup>
                        </ContactUs>
                        <Visual src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/ContactUs.png" />
                    </Side>
                    <Main>
                        <TableContactUs>
                            <tr>
                                <td>
                                    <AddressIcon/>
                                </td>
                                <td>
                                    <TableTitle>
                                        Address
                                    </TableTitle>
                                </td>
                            </tr>
                            <tr>
                                <td/>
                                <td>
                                    <TableDetail>
                                        Jakarta
                                        <br/>
                                        PT. Telekomunikasi Indonesia Tbk<br />
                                        Jl. Kebon Siri No.12. Jakarta Pusat
                                        <br />
                                        <br />
                                        Bandung
                                        <br />
                                        Bandung Digital Valley<br />
                                        Jl. Gegerkalong Hilir No 47
                                    </TableDetail>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <PhoneIcon/>
                                </td>
                                <td>
                                    <TableTitle>
                                        Phone
                                    </TableTitle>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <TableDetail>
                                        +62 812-2423-2101
                                    </TableDetail>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <EmailIcon/>
                                </td>
                                <td>
                                    <TableTitle>
                                        Email
                                    </TableTitle>
                                </td>
                            </tr>
                            <tr>
                                <td/>
                                <td>
                                    <TableDetail>
                                        hello@inpoin.id
                                    </TableDetail>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <SocialMediaIcon/>
                                </td>
                                <td>
                                    <TableTitle>
                                        Social Media
                                    </TableTitle>
                                </td>
                            </tr>
                            <tr>
                                <td/>
                                <td>
                                    <TableIcon>
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <InstagramIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <TwitterIcon />
                                                </Link>     
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <FacebookIcon />
                                                </Link>      
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <YoutubeIcon />
                                                </Link>      
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <LinkedInIcon/>
                                                </Link>
                                            </li>
                                        </ul>
                                    </TableIcon>
                                </td>
                            </tr>
                        </TableContactUs>
                        <MobileTableContactUs>
                            <tr>
                                <td>
                                    <MobileAddressIcon />
                                </td>
                                <td>
                                    <TableTitle>
                                        Address
                                    </TableTitle>
                                </td>
                            </tr>
                            <tr>
                                <td />
                                <td>
                                    <TableDetail>
                                        Jakarta
                                        <br />
                                        PT. Telekomunikasi Indonesia Tbk<br />
                                        Jl. Kebon Siri No.12. Jakarta Pusat
                                        <br />
                                        <br />
                                        Bandung
                                        <br />
                                        Bandung Digital Valley<br />
                                        Jl. Gegerkalong Hilir No 47
                                    </TableDetail>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <MobilePhoneIcon />
                                </td>
                                <td>
                                    <TableTitle>
                                        Phone
                                    </TableTitle>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <TableDetail>
                                        +62 812-2423-2101
                                    </TableDetail>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <MobileEmailIcon />
                                </td>
                                <td>
                                    <TableTitle>
                                        Email
                                    </TableTitle>
                                </td>
                            </tr>
                            <tr>
                                <td />
                                <td>
                                    <TableDetail>
                                        hello@inpoin.id
                                    </TableDetail>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <MobileSocialMediaIcon />
                                </td>
                                <td>
                                    <TableTitle>
                                        Social Media
                                    </TableTitle>
                                </td>
                            </tr>
                            <tr>
                                <td />
                                <td>
                                    <TableIcon>
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <InstagramIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <TwitterIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <FacebookIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <YoutubeIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <LinkedInIcon />
                                                </Link>
                                            </li>
                                        </ul>
                                    </TableIcon>
                                </td>
                            </tr>
                        </MobileTableContactUs>
                    </Main>
                </Row>
                
            </ContentWrapper>
        );
    }
}

export default ContactUsView;