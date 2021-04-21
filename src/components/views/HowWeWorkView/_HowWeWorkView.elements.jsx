//
// last updated: 13/04/2021
// @author: mahenza
import styled from "styled-components";
import device from "../../utils/device";


export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Side = styled.div`
  flex: 50%;
  padding-left: 5%;
  align-self: center;
@media only screen and ${device.tabletL}{
  flex: 40%;
  padding-left: 10%;
}
`;

export const Main = styled.div`
  flex: 50%;
  padding-top: 10%;
@media only screen and ${device.tabletL}{
  flex: 60%;
  padding: 5px;
}
`;

export const SlideShow = styled.div``;

export const ContainerSlideShow = styled.div``;

export const SectionSlideShow = styled.section``;

export const HowWeWork = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HowWeWorkTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HowWeWorkWhiteTitle = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  text-align: left;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 20px;
}
`;

export const HowWeWorkRedTitle = styled.span`
  font-family: "AlphaMack AOE";
  color: #ee2e31;
  font-size: 60px;
  font-weight: normal;
  font-style: normal;
  // text-transform: capitalize;
  text-align: left;
  margin-top: -8%;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 40px;
  margin-top: -8%;
}
`;

export const Label = styled.span`
  width: 341px;
  height: 67px;
  font-size: 36px;
  font-weight: bold;
  padding: 15px;
  margin-bottom: 5%;
  background: linear-gradient(180deg, #F02F32 0%, #FD5457 100%);
  text-transform: uppercase;
  color: white;
@media screen and ${device.tabletL} and (min-width: 426px){
  width: 170px;
  height: 33px;
  padding: 5px;
  font-size: 18px;
}
`;

export const Item = styled.p`
  font-family: "Work Sans", sans-serif;
  color: white !important;
  font-weight: 200;
  text-align: justify;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 12px;
}
`;

export const Visual = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Slider = styled.div`
  maxWidth: 1300px; 
  width: 100vw; 
  padding-left: 5%;
`;