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
`;

export const Side = styled.div`
  flex: 30%;
  padding: 20px;
  align-self: flex-start;
@media only screen and ${device.tabletL}{
  flex: 40%;
  padding-bottom: 12%;
  padding-right: 2%;
}
`;

export const Main = styled.div`
  flex: 70%;
  align-self: flex-start;
  height: 100%;
@media only screen and ${device.tabletL}{
  flex: 60%;
  align-self: center;
  padding-left: 2%;
}
`;

export const ExperienceDashboard = styled.div`
  // display: flex;
  // flex-direction: column;
  display: flex;
  flex-wrap: wrap;

@media screen and(max-width: 1550px) and(min-width: 426px), (orientation: landscape){
  padding-top: 15%;
}
`;

export const ExperienceDashboardGroup = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const ExperienceDashboardBlackTitle = styled.h2`
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

export const ExperienceDashboardRedTitle = styled.span`
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

export const DashboardFrame = styled.iframe`
    display: none;
@media (min-width: 320px) and (max-width: 760px) {
    display: none;
  }
@media (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
@media (min-width: 1000px) and (max-width: 2560px){
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const ExperienceDashboardTitle = styled.div`
  display: flex;
@media screen and ${device.tabletL} and (min-width: 426px){
  display: none;
}
`;

export const MobileExperienceDashboardTitle = styled.div`
  display: none;
@media screen and ${device.tabletL} and (min-width: 426px){
  display: block;
  align-self: flex-end;
}
`;

export const ExperienceDashboardList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: justify !important;
  line-height: 150%;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 12px;
}
`;

export const ExperienceDashboardDescription = styled.li`
  font-size: 16px;
  color: black;
  margin: 10px 40px;
  &::before {
    content: "•";
    color: red;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
@media screen and ${device.tabletL} and (min-width: 426px){
  margin: 5px 20px;
  display: none;
}
`;

export const DashboardNarrativeTitle = styled.h4`
  font-family: "Work Sans", sans-serif;
  color: #000000DE;
  font-size: 20px;
  font-weight: bold;
  font-weight: normal;
  font-style: normal;
  text-transform: capitalize;
  text-align: left;
  line-height: 150%;
  &::before {
    content: "•";
    color: red;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 12px;
  padding: 2px;
}
`;

export const VideoFrame = styled.img`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 85%;
  padding-top: 15%;
  display: none;
@media only screen and (max-width: 812px) {
  display: block;
}
`;