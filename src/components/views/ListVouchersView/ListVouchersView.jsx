import React, { Component } from "react";
import { Side } from "../TourWelcomeView/_TourWelcomeView.elements";

import {
    ContentWrapper,
    Row,
    Main,
    ListVouchers,
    ListVouchersTitleGroup,
    ListVouchersTitle,
    ListVouchersSubtitle,
    Vouchers,
    VouchersItem,
    VouchersImage,
} from "./ListVouchersView.elements";

class ListVouchersView extends Component {
    render() {
        return (
            <ContentWrapper>
                
                <Row>  
                    <ListVouchers>
                        <ListVouchersTitleGroup>
                            <ListVouchersTitle>List<ListVouchersSubtitle>Vouchers</ListVouchersSubtitle></ListVouchersTitle>
                        </ListVouchersTitleGroup>
                    </ListVouchers>
                    <Main>
                        <Vouchers>
                            <VouchersItem>
                                <VouchersImage src="http://in-poin.mahenza.com/wp-content/uploads/2021/04/1.png"/>
                            </VouchersItem>
                            <VouchersItem>
                                <VouchersImage src="http://in-poin.mahenza.com/wp-content/uploads/2021/04/2.png" />
                            </VouchersItem>
                            <VouchersItem>
                                <VouchersImage src="http://in-poin.mahenza.com/wp-content/uploads/2021/04/3.png" />
                            </VouchersItem>
                            <VouchersItem>
                                <VouchersImage src="http://in-poin.mahenza.com/wp-content/uploads/2021/04/4.png"/>
                            </VouchersItem>
                            <VouchersItem>
                                <VouchersImage src="http://in-poin.mahenza.com/wp-content/uploads/2021/04/5.png" />
                            </VouchersItem>
                            <VouchersItem>
                                <VouchersImage src="http://in-poin.mahenza.com/wp-content/uploads/2021/04/6.png"/>
                            </VouchersItem> 
                        </Vouchers>
                    </Main>
                </Row>
            </ContentWrapper>
        );
    }
}

export default ListVouchersView;