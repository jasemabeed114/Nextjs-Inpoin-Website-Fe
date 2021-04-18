//
// last updated: 16/04/2021
// @author: mahenza
import styled from "styled-components";
import device from "../../utils/device"

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
  flex: 30%;
  align-self: center;
  
@media only screen and ${device.tabletL}{
  display: none;
}
`;

export const Main = styled.div`
  flex: 70%;
  align-self: flex-end;
@media only screen and ${device.tabletL}{
  flex: 100%;
  padding: 5px;
}
`;

export const JoinUs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JoinUsTitleGroup = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const JoinUsTitle = styled.h2`
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

export const JoinUsSubtitle = styled.span`
  font-family: "AlphaMack AOE";
  color: #ee2e31;
  font-size: 120px;
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
  text-align: justify;
  inline-size: auto;
  writing-mode: horizontal-tb;
  line-height: 150%;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 12px;
}
`;