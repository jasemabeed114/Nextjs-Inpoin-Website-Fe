import styled from "styled-components";

export const ContentWrapper = styled.div`
  @media(max-width: 768px) {
    flex-direction: column-reverse;
  }
  width: 100%;
  display: flex;
`;

export const Showcase = styled.div`
  @media(max-width: 768px) {
    width: 100%;
    padding-top: 5%;
  }
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-top: 20%;
`;

export const ShowcaseGroup = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  width: 90%;
`;

export const ShowcaseTitle = styled.div`
  display: flex;
  align-items: left;
`;

export const ShowcaseBlackTitle = styled.h2`
  @media(max-width: 768px) {
    font-size: 32px;
  }
  font-family: "Work Sans", sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #303030;
  text-transform: uppercase;
  text-align: left;
`;

export const ShowcaseRedTitle = styled.span`
  @media(max-width: 768px) {
    font-size: 64px;
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
  @media(max-width: 768px) {
    max-width: 100%;
    padding-top: 1%;
    margin-bottom: -32px;
  }
  max-width: 60%;
  height: auto;
  padding-top: 15%;
`;

export const ShowcaseFrame = styled.iframe`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: auto;
  border: none;
@media (min-width: 320px) and (max-width: 760px) {
    display: none;
  }
`;