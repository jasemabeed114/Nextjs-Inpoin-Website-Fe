import styled from "styled-components";

export const ContentWrapper = styled.div`
  @media(max-width: 768px) {
    flex-direction: column-reverse;
  }
  width: 100%;
  display: flex;
`;

export const ExitTour = styled.div`
  @media(max-width: 768px) {
    width: 100%;
    padding-top: 1%;    
  }
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-top: 20%;
`;

export const ExitTourGroup = styled.div`
  @media(max-width: 768px) {
    width: 100%;   
  }
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: start;
  width: 60%;
  position: relative;
`;

export const ExitTourTitle = styled.div`
  display: flex;
  align-items: left;
`;

// export const LeftColumn = styled.div`
//   max-width: 70%;
// `;

// export const RightColumn = styled.div`
//   max-width: 50%;
// `;

export const ExitTourWhiteTitle = styled.h2`
  font-family: "AlphaMack AOE" !important;
  font-size: 60px !important;
  color: white !important;
  font-weight: normal !important;
  text-align: left !important;
  font-style: normal !important;
  text-transform: capitalize !important;
`;

export const ExitText = styled.h5`
  @media(max-width: 768px) {
    font-size: 24px;
  }
  font-family: "Work Sans", sans-serif !important;
  font-size: 36px;
  font-weight: lighter !important;
  text-align: left !important;
  color: #303030 !important;
  text-transform: uppercase;
`;

export const ExitScoring = styled.h4`
  @media(max-width: 768px) {
    font-size: 24px;
  }
  font-family: "Work Sans", sans-serif !important;
  font-size: 36px;
  font-weight: bold !important;
  text-align: left !important;
  color: #303030 !important;
  text-transform: uppercase;
`;

export const ExitScoringLogo = styled.img`
  max-width: 100%;
`;

export const Visual = styled.img`
  @media(max-width: 768px) {
    align-self: center;
  }
  max-width: 60%;
  height: auto;
  padding-top: 15%;
`;



export const RedeemButton = styled.div`
    background-color: #ED2B2E;
    color: white;
    font-size: 36px !important;
    border-radius: 10px;
    border: none;
    width: 300px;
    height: 88px;
    padding: 20px;
    margin-top: 10%;
    outline: none;
    box-shadow: 5px 10px #888888;
    text-decoration: none;
:hover{
    background-color: white;
    color: #ED2B2E;
    box-shadow: none;
    transition: 0.3s;
}
`;