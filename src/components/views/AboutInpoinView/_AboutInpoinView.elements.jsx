// 
// last updated: 13/04/2021
// @author: mahenza
import styled from "styled-components";
import device from "../../utils/device";

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  // padding-top: 5%;
  padding-left: 5%;
`;

export const Row = styled.div`
  display: flex;
`;

export const Side = styled.div`
  flex: 30%;
  padding: 20px;
  align-self: center;
@media only screen and ${device.tabletL}{
  flex: 30%;
  padding: 5px;
}
`;

export const Main = styled.div`
  flex: 70%;
@media only screen and ${device.tabletL}{
  flex: 70%;
  padding: 5px;
}
`;

export const AboutInpoin = styled.div`
  display: flex;
  flex-wrap: wrap;

@media screen and(max-width: 1550px) and(min-width: 426px), (orientation: landscape){
  padding-top: 15%;
}
`;

export const AboutTitleGroup = styled.div`
  display: flex;
`;

export const AboutInpoinTitle = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #303030;
  text-align: left;
  text-transform: uppercase;
  line-height: 100%;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 30px;
}
`;

export const AboutInpoinSubtitle = styled.span`
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
  max-width: 100%;
  height: auto;
`;

export const Description = styled.p`
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  padding-top: 20px;
  text-align: justify !important;
  line-height: 150%;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 12px;
  width: 250px;
}
`;

