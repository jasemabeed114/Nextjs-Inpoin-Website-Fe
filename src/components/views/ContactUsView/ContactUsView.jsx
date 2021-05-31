import React, { Component } from "react";
import Tilt from 'react-tilt';

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
                            <Tilt className="Tilt" options={{ max: 35 }} >
                            <ContactUsGroup>
                                <ContactUsTitle>
                                    Contact
                                <ContactUsSubtitle>Us</ContactUsSubtitle>
                                </ContactUsTitle>
                            </ContactUsGroup>
                            </Tilt>
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
                                                <Link onClick={() => window.open("https://instagram.com/inpoin.id?utm_medium=copy_link", "_blank")}>
                                                    <InstagramIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => window.open("https://twitter.com/inpoin_id?s=11", "_blank")}>
                                                    <TwitterIcon />
                                                </Link>     
                                            </li>
                                            <li>
                                                <Link onClick={() => window.open("https://www.facebook.com/inpoin.id/", "_blank")}>
                                                    <FacebookIcon />
                                                </Link>      
                                            </li>
                                            <li>
                                                <Link onClick={() => window.open("https://youtube.com/channel/UCrPwO0di574N7QdZfQEUy9g", "_blank")}>
                                                    <YoutubeIcon />
                                                </Link>      
                                            </li>
                                            <li>
                                                <Link onClick={() => window.open("https://www.linkedin.com/company/inpoin", "_blank")}>
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
                                                <Link onClick={() => window.open("https://instagram.com/inpoin.id?utm_medium=copy_link", "_blank")}>
                                                    <InstagramIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => window.open("https://twitter.com/inpoin_id?s=11", "_blank")}>
                                                    <TwitterIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => window.open("https://www.facebook.com/inpoin.id/", "_blank")}>
                                                    <FacebookIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => window.open("https://youtube.com/channel/UCrPwO0di574N7QdZfQEUy9g", "_blank")}>
                                                    <YoutubeIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => window.open("https://www.linkedin.com/company/inpoin", "_blank")}>
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