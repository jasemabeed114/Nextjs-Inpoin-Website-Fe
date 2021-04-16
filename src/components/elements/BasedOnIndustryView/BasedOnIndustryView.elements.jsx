import styled from "styled-components";

export const ContentWrapper = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const BasedOnIndustry = styled.div`
  @media(max-width: 768px) {   
    flex-direction: column;
  }
  display: flex;
`;

export const BasedOnIndustryGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  flex: 1;
  max-width: 826px;
`;

export const BasedOnIndustryTitle = styled.div`
  @media(max-width: 768px) {   
    // flex-direction: row;
  }
  display: flex;
  flex-direction: column;
  align-items: left;
  flex: 1;
  padding-right: 32px;
`;

export const BasedOnIndustryBlackTitle = styled.h2`
  @media(max-width: 768px) {   
    font-size: 28px;
  }
  font-family: "Work Sans", sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #303030;
  text-transform: uppercase;
  text-align: left;
`;

export const BasedOnIndustryWhiteTitle = styled.h2`
  font-family: "AlphaMack AOE";
  color: white;
  font-size: 90px;
  font-weight: normal;
  font-style: normal;
  text-transform: capitalize;
  text-align: left;
  line-height: 0.7;
`;

export const Icons = styled.div`
    padding: 24px;
`;

export const IconsTitle = styled.div`
    width: 659px;
    height: 140px;
    left: 1010px;
    top: 310px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #FFFFFF;
`;

export const Description = styled.p`
  @media(max-width: 768px) {   
    font-size: 16px;
    line-height: 150%;
  }
  font-size: 20px;
  text-align: justify !important;
  line-height: 150%;
`;

export const DescriptionTitle = styled.p`
  @media(max-width: 768px) {   
    font-size: 24px;
  }
  margin-bottom: 24px;
  width: 100%;
  font-size: 32px;
  font-weight: 700;
  color: white;
  padding: 12px;
  background: linear-gradient(90deg, #F03134 6.81%, #E9A288 100%);
`;

export const Visual = styled.img`
  @media(max-width: 768px) {
    align-self: center;
    height: 128px;
    width: 128px;
  }
  width: 100%;
  height: auto;
  align-items: left;
`;

export const Slider = styled.div`

`;