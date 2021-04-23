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
  width: 100%;
`;

export const Side = styled.div`
  flex: 50%;
  padding: 20px;
  align-self: center;
@media only screen and ${device.tabletL}{
  flex: 30%;
  padding: 5px;
}
`;

export const Main = styled.div`
  flex: 50%;
  align-self: center;
@media only screen and ${device.tabletL}{
  flex: 70%;
  padding: 25px;
}
`;
export const Showcase = styled.div`
  display: flex;
  flex-direction: column;
  // width: 50%;
  // padding-top: 20%;
`;

export const ShowcaseGroup = styled.div`
  display: flex;
  // align-items: center;
  // text-align: left;
  // width: 90%;
`;

export const ShowcaseTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShowcaseBlackTitle = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-size: 50px;
  font-weight: bold;
  color: #303030;
  text-transform: uppercase;
  text-align: left;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 20px;
}
`;

export const ShowcaseRedTitle = styled.span`
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
  padding-top: 30%;
`;

export const ShowcaseFrame = styled.iframe`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: auto;
  border: none;
// @media (min-width: 320px) and (max-width: 760px) {
//     display: none;
//   }
`;