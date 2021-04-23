/*
/ last updated: 19/04/2021
/ @author: mahenza
*/
import styled from "styled-components";
import device from "../../utils/device";

export const ContentWrapper = styled.div`#
@media only screen and ${device.tabletL}{
  padding-top: 80%;
}
  width: 100%;
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Side = styled.div`
@media screen and ${device.tabletL} and (min-width: 426px){
  flex: 30%;
  padding: 5px;
}
  flex: 50%;
  padding: 20px;
  align-self: center;
`;

export const Main = styled.div`
@media screen and ${device.tabletL} and (min-width: 426px){
  flex: 70%;
  align-self: flex-start;
}
  flex: 50%;
  align-self: flex-end;
`;
export const Showcase = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShowcaseGroup = styled.div`
  display: flex;
`;

export const ShowcaseTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShowcaseBlackTitle = styled.h2`
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 20px;
}
  font-family: "Work Sans", sans-serif;
  font-size: 50px;
  font-weight: bold;
  color: #303030;
  text-transform: uppercase;
  text-align: left;
`;

export const ShowcaseRedTitle = styled.span`
@media screen and ${device.tabletL} and (min-width: 426px){
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

export const Visual = styled.img`
@media screen and ${device.tabletL} and (min-width: 426px){
  max-width: 70%;  
}
  max-width: 100%;
  height: auto;
`;

export const ShowcaseFrame = styled.iframe`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: auto;
  border: none;
`;