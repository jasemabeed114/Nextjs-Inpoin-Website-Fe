import styled from "styled-components";
import device from "../../utils/device"

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
@media screen and ${device.tabletL} and (min-width: 426px){
  max-width: 426px;
  }
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
    flex-direction: column;
  }
  display: flex;
  flex-direction: column;
  align-items: left;
  flex: 1;
  padding-right: 32px;
`;

export const BasedOnIndustryBlackTitle = styled.h2`
  @media screen and ${device.tabletL} and (min-width: 426px){
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
  @media screen and ${device.tabletL} and (min-width: 426px){
    font-size: 50px;
  }
  font-family: "AlphaMack AOE";
  color: white;
  font-size: 90px;
  font-weight: normal;
  font-style: normal;
  text-transform: capitalize;
  text-align: left;
  line-height: 0.7;
`;

export const TitleIcon = styled.img`
  max-width: 100%;
  height: auto;
  filter: drop-shadow(-2px 4px 10px rgba(0, 0, 0, 0.25));
`;

export const Description = styled.p`
  font-size: 20px;
  text-align: justify !important;
  line-height: 150%;
  padding-right: 5%;
@media screen and ${device.tabletL} and (min-width: 426px){
  display: none;
}
`;

export const MobileDescription = styled.p`
  display: none;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 12px;
  text-align: justify !important;
  line-height: 150%;
  display: block;
}
`;

export const Visual = styled.img`
  max-width: 60%;
  height: auto;
  align-self: center;
@media screen and ${device.tabletL} and (min-width: 426px){
  max-width: 30%;
}
`;

export const Slider = styled.div`
  maxWidth: 1300px; 
  width: 100vw; 
  padding-left: 5%;
`;