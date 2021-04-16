import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 5%;
  padding-left: 5%;
`;

export const ListParnerFAQ = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ListParnerFAQGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: start;
  width: 100%;
  position: relative;
`;

export const ListParnerFAQTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const ListParnerFAQBlackTitle = styled.h2`
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

export const ListParnerFAQRedTitle = styled.span`
  @media(max-width: 768px) {
    font-size: 68px;
    line-height: 0.7;
  }
  font-family: "AlphaMack AOE";
  color: #ee2e31;
  font-size: 90px;
  font-weight: normal;
  font-style: normal;
  text-transform: capitalize;
  text-align: left;
`;

export const Description = styled.p`
  @media(max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
  font-size: 20px;
  text-align: justify !important;
  line-height: 150%;
  max-width: 382px;
`;

export const Spacing = styled.div`
  padding-bottom: 5%;
`;

export const Slider = styled.div`
 
`;

export const LogoWrapper = styled.div`
  background-color: #FFFFFF;
  border-radius: 16px;
  width: 160px;
  height: 90px;
  display: flex !important;
  align-items: center;
`;

export const Logo = styled.img`
  width: 152px;
  height: 54px;
`;

export const FAQWrapper = styled.div`
  width: auto;
  height: auto;
  overflow: scroll;
`;

export const Accordion = styled.button`
  background-color: white;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  border-radius: 50%;
  text-align: left;
  outline: none;
  font-size: 15px;
  font-weight: bold;
  transition: 0.4s;
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
&:hover {
  background-color: #ccc;
}
`;

export const Pannel = styled.div`
  padding: 0 18px;
  display: none;
  background-color: white;
  overflow: hidden;
  text-align: justify;
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

export const SectionWrapper = styled.div`
  @media(max-width: 768px) {
    flex-direction: column;
  }

  display: flex;
`;

export const SectionPartner = styled.div`
  @media(max-width: 768px) {
    width: 100%;
  }
  flex: 1;
  width: 50%;
`;

