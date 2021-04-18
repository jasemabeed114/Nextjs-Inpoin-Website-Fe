import styled from "styled-components";
import device from "../../utils/device"

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 5%;
  padding-left: 5%;
`;

export const ListPartnerFAQ = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ListPartnerFAQGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: start;
  width: 100%;
  position: relative;
@media screen and ${device.tabletL} and (min-width: 426px) {
    display: none;
  }
`;

export const ListPartnerFAQTitle = styled.div`
  display: flex;
  align-items: center;
@media screen and ${device.tabletL} and (min-width: 426px) {
    font-size: 50px;
  }
`;

export const ListPartnerFAQBlackTitle = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #303030;
  text-transform: uppercase;
  text-align: left;
  @media screen and ${device.tabletL} and (min-width: 426px) {
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
  @media screen and ${device.tabletL} and (min-width: 426px) {
    font-size: 50px;
  }
`;

export const Description = styled.p`
  font-family: "Work Sans", sans-serif;
  font-size: 20px;
  text-align: justify;
  inline-size: auto;
  writing-mode: horizontal-tb;
  line-height: 150%;
  padding-right: 15%;
  @media screen and ${device.tabletL} and (min-width: 426px) {
    display: none;
  }
`;

export const MobileDescription = styled.p`
  display: none;
  @media screen and ${device.tabletL} and (min-width: 426px) {
    display: block;
    font-family: "Work Sans", sans-serif;
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
  display: flex;
  align-items: center;
 @media screen and ${device.tabletL} and (min-width: 426px) {
    width: 80px;
    height: 45px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  //height: 54px;
`;

export const FAQWrapper = styled.div`
  width: auto;
  height: 35vh;
  overflow-y: auto;
 @media screen and ${device.tabletL} and (min-width: 426px) {
    display: none;
  }
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

export const SectionWrapper = styled.div`
  @media(max-width: 768px) {
    flex-direction: column;
  }
  display: flex;
`;

export const SectionPartner = styled.div`
  @media screen and ${device.tabletL} and (min-width: 426px) {
     width: 100%;
  }
  flex: 1;
  width: 50%;
  align-self: center;
`;

