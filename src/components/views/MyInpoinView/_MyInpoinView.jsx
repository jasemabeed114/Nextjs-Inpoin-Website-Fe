//
// last updated: 13/04/2021
// @author: mahenza
import React, { Component } from "react";

import {
    ContentWrapper,
    Row,
    Side,
    Middle,
    Main,
    MyInpoinBlackTitle,
    MyInpoinRedSubTitle,
    MyInpoinText,
    DownloadButton,
    Visual,
    MyInpoinList,
    Item,
    IconTitle,
    WalletIcon,
    ExchangeIcon,
    RedeemIcon,
    MobileMyInpoinList,
    MobileWalletIcon,
    MobileExchangeIcon,
    MobileRedeemIcon,
} from "./_MyInpoinView.elements";

class _MyInpoinPage extends Component {
    render() {
        return (
            <ContentWrapper>
                <Row>
                   
                    <p className="clip">UNDER DEVELOPMENT
                    <MyInpoinBlackTitle>scroll down to preview next section</MyInpoinBlackTitle>
                    </p>
                </Row>
                
                {/* <Row>
                    <Side>
                        <MyInpoinBlackTitle>MANAGE YOUR REWARD <br/> POINTS WITH JUST
                        <MyInpoinRedSubTitle>One-Click Away!</MyInpoinRedSubTitle>
                        </MyInpoinBlackTitle>
                        <MyInpoinText>myinpoin is an exclusive redemption program mobile<br/> application that help you to collect reward points in one wallet.</MyInpoinText>                   
                        <MyInpoinList>
                            <WalletIcon/>
                            <IconTitle>Wallet</IconTitle>
                            <Item>
                                You can track all of your points in another merchant
                            </Item>
                            
                            <ExchangeIcon/>
                            <IconTitle>Exchange</IconTitle>
                            <Item>
                                Exchange your points to another merchant only in one click                           
                            </Item>
                            
                            <RedeemIcon/>
                            <IconTitle>Redeem</IconTitle>
                            <Item>
                                Use those points for various transactions in our merchant app                         
                            </Item>
                        </MyInpoinList>
                        <MobileMyInpoinList>
                            <MobileWalletIcon />
                            <IconTitle>Wallet</IconTitle>
                            <Item>
                                You can track all of your points in another merchant
                            </Item>
                            
                            <MobileExchangeIcon />
                            <IconTitle>Exchange</IconTitle>
                            <Item>
                                Exchange your points to another merchant only in one click
                            </Item>
                            
                            <MobileRedeemIcon />
                            <IconTitle>Redeem</IconTitle>
                            <Item>
                                Use those points for various transactions in our merchant app
                            </Item>
                        </MobileMyInpoinList>
                    </Side>
                    <Middle>
                        <DownloadButton href="https://play.google.com/store/apps/details?id=com.telkom.inpoinmobile" rel="noopener noreferrer nofollow" target="_blank">
                            <table>
                                <tr>
                                    <th>
                                        <img className="my-inpoin" src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/myinpoin-logo.png"></img>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <img className="google-play" alt="download myinpoin" src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/my_inpoin_app.png" />
                                    </td>
                                </tr>
                            </table>
                        </DownloadButton>
                    </Middle>
                    <Main>
                        <Visual src="https://inpoin.id/static/images/LandingPage/my_inpoin_app.png" alt="android-mobile-myinpoin"></Visual>
                    </Main>
                </Row>  */}
            </ContentWrapper>
        );
    }
}

export default _MyInpoinPage;