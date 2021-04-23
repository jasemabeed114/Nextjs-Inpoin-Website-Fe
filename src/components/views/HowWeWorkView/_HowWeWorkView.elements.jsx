//
// last updated: 21/04/2021
// @author: mahenza
import styled from "styled-components";
import device from "../../utils/device";


export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-self: flex-end;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Side = styled.div`
@media only screen and ${device.tabletL}{
  flex: 40%;
  padding-left: 10%;
}
  flex: 70%;
  padding-left: 5%;
  align-self: flex-start;
`;

export const Main = styled.div`
@media only screen and ${device.tabletL}{
  flex: 60%;
  padding: 5px;
}
  flex: 30%;
  align-self: flex-end;
`;

export const HowWeWork = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HowWeWorkTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HowWeWorkWhiteTitle = styled.h2`
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 20px;
}
  font-family: "Work Sans", sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  text-align: left;
`;

export const HowWeWorkRedTitle = styled.span`
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 40px;
  margin-top: -25px;
}
  font-family: "AlphaMack AOE";
  color: #ee2e31;
  font-size: 60px;
  font-weight: normal;
  font-style: normal;
  // text-transform: capitalize;
  text-align: left;
  margin-top: -55px;
`;

export const Label = styled.span`
@media screen and ${device.tabletL} and (min-width: 426px){
  width: 170px;
  height: 33px;
  padding: 5px;
  font-size: 18px;
}
  width: 341px;
  height: 50px;
  font-size: 36px;
  font-weight: bold;
  padding: 15px;
  margin-bottom: 5%;
  background: linear-gradient(180deg, #F02F32 0%, #FD5457 100%);
  text-transform: uppercase;
  color: white;
`;

export const Item = styled.p`
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 12px;
}
  font-family: "Work Sans", sans-serif;
  color: white !important;
  font-weight: 200;
  text-align: justify;
`;

export const Visual = styled.img`
@media screen and ${device.tabletL} and (min-width: 426px){
  max-width: 70%;
}
  max-width: 100%;
  height: auto;

&.objectives{
  @media screen and ${device.tabletL} and (min-width: 426px){
  max-width: 260px;
  }
  max-width: 660px;
}

&.behaviours{
  @media screen and ${device.tabletL} and (min-width: 426px){
  max-width: 260px;
  }
  max-width: 660px;
}

&.thePlayers{
  @media screen and ${device.tabletL} and (min-width: 426px){
  max-width: 260px;
  }
  max-width: 540px;
}

&.andApproval{
  @media screen and ${device.tabletL} and (min-width: 426px){
  max-width: 260px;
  }
  max-width: 660px;
}

&.andEvaluation{
  @media screen and ${device.tabletL} and (min-width: 426px){
  max-width: 260px;
  }
  max-width: 540px;
}

`;

export const Slider = styled.div`
  maxWidth: 1300px; 
  width: 100vw; 
  height: 80vh;
  padding-left: 5%;
`;