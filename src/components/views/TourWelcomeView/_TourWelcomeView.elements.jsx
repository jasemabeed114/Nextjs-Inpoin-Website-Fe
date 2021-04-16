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
  flex: 60%;
  padding: 20px;
@media only screen and ${device.tabletL}{
  flex: 60%;
  padding: 5px;
}
`;

export const Main = styled.div`
  flex: 40%;
  align-self: center;
  // padding-top: 10%;
@media only screen and ${device.tabletL}{
  flex: 40%;
  padding: 25px;
}
`;

export const TourWelcome = styled.div`
  display: flex;
  flex-direction: column;

@media screen and(max-width: 1550px) and(min-width: 426px), (orientation: landscape){
  padding-top: 15%;
}
`;

export const TourWelcomeGroup = styled.div`
  display: flex;
`;

export const TourWelcomeBlackTitle = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #303030;
  text-transform: uppercase;
  text-align: left;
  line-height: 100%;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 30px;
}
`;

export const TourWelcomeRedTitle = styled.span`
  font-family: "AlphaMack AOE";
  color: #ee2e31;
  font-size: 90px;
  font-weight: normal;
  font-style: normal;
  text-transform: capitalize;
  text-align: left;
  // margin-top: -6%;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 50px;
}
`;

export const Visual = styled.img`
  max-width: 100%;
  height: auto;
  // padding-bottom: 20%;
`;

export const PlayButton = styled.button`
  background-color: #ED2B2E;
  color: white;
  font-size: 36px;
  border-radius: 10px;
  border: none;
  width: 141px;
  height: 88px;
  outline: none;
  box-shadow: 5px 10px #888888;
&:hover{
  background-color: white;
  color: #ED2B2E;
  box-shadow: none;
  transition: 0.3s;
}
`;
