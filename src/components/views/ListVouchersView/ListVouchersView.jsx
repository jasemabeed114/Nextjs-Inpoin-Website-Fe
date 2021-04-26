import React, { Component } from "react";
import Tilt from 'react-tilt';

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

import Swiper from '../../elements/Swiper/Swiper';
import SwiperSlide from '../../elements/Swiper/SwiperSlide';

class ListVouchersView extends Component {
    render() {
        return (
            <ContentWrapper>
                
                <Row>  
                    <ListVouchers>
                        <Tilt className="Tilt" options={{ max: 35 }} >
                        <ListVouchersTitleGroup>
                            <ListVouchersTitle>List<ListVouchersSubtitle>Vouchers</ListVouchersSubtitle></ListVouchersTitle>
                        </ListVouchersTitleGroup>
                        </Tilt>
                    </ListVouchers>
                    <Main>
                        <Swiper slidePerView={1} spaceBetween={5} align={'center'}>
                            <SwiperSlide>
                                <Vouchers>
                                    <VouchersItem>
                                        <VouchersImage src="http://in-poin.mahenza.com/wp-content/uploads/2021/04/25.png"/>
                                    </VouchersItem>
                                    <VouchersItem>
                                        <VouchersImage src="http://in-poin.mahenza.com/wp-content/uploads/2021/04/24.png" />
                                    </VouchersItem>
                                    <VouchersItem>
                                        <VouchersImage src="http://in-poin.mahenza.com/wp-content/uploads/2021/04/26.png" />
                                    </VouchersItem>
                                    <VouchersItem>
                                        <VouchersImage src="http://in-poin.mahenza.com/wp-content/uploads/2021/04/27.png"/>
                                    </VouchersItem>
                                    {/* <VouchersItem>
                                        <VouchersImage src="http://in-poin.mahenza.com/wp-content/uploads/2021/04/5.png" />
                                    </VouchersItem>
                                    <VouchersItem>
                                        <VouchersImage src="http://in-poin.mahenza.com/wp-content/uploads/2021/04/6.png"/>
                                    </VouchersItem>  */}
                                </Vouchers>
                            </SwiperSlide>
                        </Swiper>
                    </Main>
                </Row>
            </ContentWrapper>
        );
    }
}

export default ListVouchersView;