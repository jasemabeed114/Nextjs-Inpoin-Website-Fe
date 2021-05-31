//
// last updated: 21/04/2021
// - adding custom sizing for logo item
// last updated: 16/05/2021
// - resizing partner logo for mobile 
// @author: mahenza
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
@media screen and ${device.tabletL} and (min-width: 426px) {
    // display: none;
    width: 60%;
  }
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: start;
  width: 100%;
  position: relative;
`;

export const ListPartnerFAQTitle = styled.div`
@media screen and ${device.tabletL} and (min-width: 426px) {
    font-size: 50px;
  }
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

export const ListPartnerFAQBlackTitle = styled.h2`
@media screen and ${device.tabletL} and (min-width: 426px) {
    font-size: 30px;
  }
  font-family: "Work Sans", sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #303030;
  text-transform: uppercase;
  text-align: left;
  
`;

export const ListPartnerFAQRedTitle = styled.span`
@media screen and ${device.tabletL} and (min-width: 426px) {
    font-size: 50px;
  }
  font-family: "AlphaMack AOE";
  color: #ee2e31;
  font-size: 90px;
  font-weight: normal;
  font-style: normal;
  text-transform: capitalize;
  text-align: left;
`;

export const Description = styled.p`
 @media screen and ${device.tabletL} and (min-width: 426px) {
    display: none;
  }
  font-family: "Work Sans", sans-serif;
  font-size: 20px;
  text-align: justify;
  inline-size: auto;
  writing-mode: horizontal-tb;
  line-height: 150%;
  padding-right: 15%;
`;

export const MobileDescription = styled.p`
 @media screen and ${device.tabletL} and (min-width: 426px) {
    display: block;
    font-family: "Work Sans", sans-serif;
    font-size: 12px;
  }
  display: none;
`;

export const Spacing = styled.div`
  padding-bottom: 5%;
`;

export const Slider = styled.div``;

export const LogoWrapper = styled.div`
@media screen and ${device.tabletL} and (min-width: 426px) {
    width: 80px;
    height: 45px;
  }
  background-color: #FFFFFF;
  border-radius: 16px;
  width: 140px;
  height: 90px;
  padding: 5px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100%;

&.item-2{
  @media screen and ${device.tabletL} and (min-width: 426px) {
    padding-left: 15px;
  }
  width: 70%;
  padding-left: 20px;
}

&.item-3{
  @media screen and ${device.tabletL} and (min-width: 426px) {
    padding-left: 15px;
  }
  width: 70%;
  padding-left: 20px;
}
`;

export const FAQWrapper = styled.div`
@media screen and ${device.tabletL} and (min-width: 426px) {
    display: none;
  }
  width: auto;
  height: 35vh;
  overflow-y: auto;
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

export const ReadMoreButton = styled.div`
  background-color: #303030;
    color: white;
    font-size: 16px;
    border-radius: 10px;
    border: none;
    width: 120px;
    height: 40px;
    padding: 10px;
    outline: none;
:hover{
    background-color:white;
    color: #303030;
    box-shadow: none;
    transition: 0.3s;
`;

