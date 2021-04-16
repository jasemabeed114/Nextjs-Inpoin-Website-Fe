import styled from "styled-components";
import device from "../../utils/device";

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-left: 5%;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Side = styled.div`
  flex: 40%;
  padding: 20px;
  
@media only screen and ${device.tabletL}{
  flex: 40%;
  padding: 5px;
}
`;

export const Main = styled.div`
  flex: 60%;
  padding-top: 10%;
@media only screen and ${device.tabletL}{
  flex: 60%;
  padding: 5px;
  background: blue;
}
`;

export const ListPartnerFAQ = styled.div`
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;

@media screen and(max-width: 1550px) and(min-width: 426px), (orientation: landscape){
  padding-top: 15%;
}
`;

export const ListPartnerFAQGroup = styled.div`
  display: flex;
  
@media screen and ${device.tabletL} and (min-width: 426px){
  padding-top: 15%;
  padding-left: 2%;
}
`;

// export const ListPartnerFAQTitle = styled.div`
//   display: flex;
//   align-items: left;
// `;

export const ListPartnerFAQBlackTitle = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #303030;
  text-transform: uppercase;
  text-align: left;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 30px;
}
`;

export const ListPartnerFAQRedTitle = styled.span`
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

export const Description = styled.p`
  font-family: "Work Sans", sans-serif;
  font-size: 20px;
  text-align: justify !important;
  line-height: 150%;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 12px;
}
`;

export const Spacing = styled.div`
  padding-bottom: 5%;
`;

export const Slider = styled.div``;

export const LogoWrapper = styled.div`
  background-color: #FFFFFF;
  border-radius: 16px;
  width: 160px;
  height: 90px;
  padding: 15px 0 0 0;
  display: flex !important;
@media screen and ${device.tabletL} and (min-width: 426px){
  width: 80px;
  height: 45px;
}
`;

export const Logo = styled.img`
  width: 152px;
  height: 54px;
@media screen and ${device.tabletL} and (min-width: 426px){
  width: 76px;
  height: 27px;
}
`;

export const FAQWrapper = styled.div`
  width: auto;
  height: auto;
  overflow: scroll;
`;

export const Accordion = styled.button`
  background-color: white;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  border-radius: 50%;
  text-align: left;
  outline: none;
  font-size: 15px;
  font-weight: bold;
  transition: 0.4s;
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
&:hover {
  background-color: #ccc;
}
`;

export const Pannel = styled.div`
  padding: 0 18px;
  display: none;
  background-color: white;
  overflow: hidden;
  text-align: justify;
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;