
import styled from "styled-components";
import device from "../../utils/device";

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 5%;
  padding-left: 5%;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Side = styled.div`
  flex: 100%;
  padding: 20px;
  align-self: center;
  flex-direction: column;
@media only screen and ${device.tabletL}{
  flex: 100%;
  padding: 5px;
}
`;

export const Main = styled.div`
  flex: 100%;
@media only screen and ${device.tabletL}{
  flex: 100%;
  padding: 25px;
}
`;

export const ListVouchers = styled.div`
  align-self: center;
  // flex-direction: column;
  // width: 50%;
`;

export const ListVouchersTitleGroup = styled.div`
  display: flex;
  // flex-direction: row;
  // justify-content: flex-start;
  // text-align: left;
  // width: 100%;
  // position: relative;
`;

export const ListVouchersTitle = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #303030;
  text-align: left;
  text-transform: uppercase;
  line-height: 100%;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 20px;
}
`;

export const ListVouchersSubtitle = styled.span`
  font-family: "AlphaMack AOE";
  color: #ee2e31;
  font-size: 90px;
  font-weight: normal;
  font-style: normal;
  text-transform: capitalize;
  text-align: left;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 50px;
}
`;

export const Visual = styled.img`
  max-width: 70%;
  height: auto;
  display: block;
`;

export const Description = styled.p`
  font-size: 20px;
  padding: 20px 0 0 0;
  text-align: justify !important;
  line-height: 150%;
`;

export const Vouchers = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px;
  grid-gap: 10px;
  color: #444;
  display: inline-grid;
  @media screen and ${device.tabletL} and (min-width: 426px){
    grid-template-columns: 125px 125px 125px;
    grid-gap: 5px;
}
`;

export const VouchersItem = styled.div`
  // background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  max-width: 100%;
`;

export const VouchersImage = styled.img`
  max-width: 100%;
`;
