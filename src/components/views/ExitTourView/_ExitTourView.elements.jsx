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
  flex: 55%;
  padding: 20px;
  align-self: flex-start;
@media only screen and ${device.tabletL}{
  flex: 40%;
  padding: 5px;
}
`;

export const Main = styled.div`
  flex: 50%;
  padding-top: 15%;
@media only screen and ${device.tabletL}{
  flex: 60%;
  padding-left: 25px;
}
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
  font-family: "AlphaMack AOE" !important;
  font-size: 90px;
  color: white !important;
  font-weight: normal !important;
  text-align: left !important;
  font-style: normal !important;
  text-transform: capitalize !important;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 70px;
}
`;

export const ExitText = styled.h5`
  font-family: "Work Sans", sans-serif !important;
  font-size: 32px;
  font-weight: lighter !important;
  text-align: left !important;
  color: #303030 !important;
  text-transform: uppercase;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 18px;
}
`;

export const ExitScoring = styled.h4`
  font-family: "Work Sans", sans-serif !important;
  font-size: 36px;
  font-weight: bold !important;
  text-align: left !important;
  color: #303030 !important;
  text-transform: uppercase;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 18px;
}
`;

export const ExitScoringLogo = styled.img`
  max-width: 30%;
@media screen and ${device.tabletL} and (min-width: 426px){
  max-width: 20%;
}
`;

export const Visual = styled.img`
  max-width: 100%;
  height: auto;
  padding-top: 15%;
`;



export const RedeemButton = styled.div`
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
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 18px;
  width: 150px;
  height: 44px;
  padding: 10px;
}
`;