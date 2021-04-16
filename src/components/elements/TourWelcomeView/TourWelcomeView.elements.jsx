import styled from "styled-components";

export const ContentWrapper = styled.div`
  @media(max-width: 768px) {
    flex-direction: column;
  }
  width: 100%;
  display: flex;
  padding-top: 15%;
`;

export const TourWelcome = styled.div`
  @media(max-width: 768px) {
    width: 100%;
    padding-top: 5%;
  }
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-top: 20%;
`;

export const TourWelcomeGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: start;
  width: 60%;
  position: relative;
`;

export const TourWelcomeBlackTitle = styled.h2`
  @media(max-width: 1337px) {
    font-size: 32px
  }
  font-family: "Work Sans", sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #303030;
  text-transform: uppercase;
  text-align: left;
`;

export const TourWelcomeRedTitle = styled.span`
  @media(max-width: 1337px) {
    font-size: 64px
  }
  font-family: "AlphaMack AOE";
  color: #ee2e31;
  font-size: 90px;
  font-weight: normal;
  font-style: normal;
  text-transform: capitalize;
  text-align: left;
  margin-top: -6%;
  line-height:${props => props.lineHeight || 'auto'};
`;

export const Visual = styled.img`
  @media(max-width: 768px) {
    padding-bottom: 0px;
    max-width: 100%;
  }
  max-width: 60%;
  height: auto;
  padding-bottom: 20%;
`;

export const PlayButton = styled.button`
  background-color: #ED2B2E;
  color: white;
  font-size: 36px;
  border-radius: 10px;
  border: none;
  width: 175px;
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

export const BlackTitle = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-size: 96px;
  font-weight: bold;
  color: #303030;
  text-transform: uppercase;
  text-align: left;
`;

export const RedSubTitle = styled.h3`
  font-family: "AlphaMack AOE";
  color: #ee2e31;
  font-size: 120px !important;
  font-weight: normal;
  font-style: normal;
  text-transform: capitalize;
  text-align: left;
  margin-top: -10%;
  margin-bottom: 10%;
  @media (max-width: 425px) {
    font-size: 58px !important;
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