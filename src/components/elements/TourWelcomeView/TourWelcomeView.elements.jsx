//
// last updated: 19/04/2021
// @author: mahenza
import styled from "styled-components";
import device from "../../utils/device";

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-left: 5%;
`;

export const Row = styled.div`
  display: flex;
`;

export const Side = styled.div`
@media only screen and ${device.tabletL}{
  flex: 60%;
  padding: 5px;
}
  flex: 60%;
  padding: 20px;
`;

export const Main = styled.div`
  @media only screen and ${device.tabletL}{
    flex: 40%;
  }
    flex: 40%;
    align-self: center;
`;

export const TourWelcome = styled.div`
@media screen and(max-width: 1550px) and(min-width: 426px), (orientation: landscape){
  padding-top: 15%;
}
  display: flex;
  flex-direction: column;
`;

export const TourWelcomeGroup = styled.div`
  display: flex;
`;

export const TourWelcomeBlackTitle = styled.h2`
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 30px;
}
  font-family: "Work Sans", sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #303030;
  text-transform: uppercase;
  text-align: left;
  line-height: 100%;
`;

export const TourWelcomeRedTitle = styled.span`
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
  margin-top: -25px;
`;

export const Visual = styled.img`
@media screen and ${device.tabletL} and (min-width: 426px){
  max-width: 80%;
}
  max-width: 100%;
  height: auto;
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

export const DialogContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DialogDescription = styled.p`
  font-size: 28px;
  width: 280px;
  margin-bottom: 32px;
  font-weight: 900;
  text-align: center;
`;

export const Iframe = styled.iframe`
  height: 600px;
  width: 360px;
`;