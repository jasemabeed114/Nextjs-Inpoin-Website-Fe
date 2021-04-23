//
// last updated: 19/04/2021
// @author: mahenza
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
`;

export const Side = styled.div`
@media only screen and ${device.tabletL}{
  flex: 40%;
  padding: 5px;
}
  flex: 55%;
  align-self: flex-start;
`;

export const Main = styled.div`
@media only screen and ${device.tabletL}{
  flex: 60%;
  padding-left: 25px;
}
  flex: 50%;
  align-self: flex-end;
`;

export const ExitTour = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExitTourGroup = styled.div`
  display: flex;
`;

export const ExitTourTitle = styled.div`
  display: flex;
  align-items: left;
`;


export const ExitTourWhiteTitle = styled.h2`
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 70px;
}
  font-family: "AlphaMack AOE" !important;
  font-size: 90px;
  color: white !important;
  font-weight: normal !important;
  text-align: left !important;
  font-style: normal !important;
  text-transform: capitalize !important;
`;

export const ExitText = styled.h5`
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 18px;
}
  font-family: "Work Sans", sans-serif !important;
  font-size: 32px;
  font-weight: lighter !important;
  text-align: left !important;
  color: #303030 !important;
  text-transform: uppercase;
`;

export const ExitScoring = styled.h4`
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 18px;
}
  font-family: "Work Sans", sans-serif !important;
  font-size: 36px;
  font-weight: bold !important;
  text-align: left !important;
  color: #303030 !important;
  text-transform: uppercase;
`;

export const ExitScoringLogo = styled.img`
@media screen and ${device.tabletL} and (min-width: 426px){
  max-width: 20%;
}
  max-width: 30%;
`;

export const Visual = styled.img`
  max-width: 100%;
  height: auto;
  padding-top: 15%;
`;

export const RedeemButton = styled.div`
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 18px;
  width: 150px;
  height: 44px;
  padding: 10px;
}
    background-color: #ED2B2E;
    color: white;
    font-size: 36px;
    border-radius: 10px;
    border: none;
    width: 300px;
    height: 88px;
    padding: 20px;
    margin-top: 10%;
    outline: none;
    box-shadow: 5px 10px #888888;
:hover{
    background-color: white;
    color: #ED2B2E;
    box-shadow: none;
    transition: 0.3s;
}
`;