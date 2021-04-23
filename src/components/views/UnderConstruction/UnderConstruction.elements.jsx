//
// last updated: 21/04/2021
// - commented out view sections, and adding clip txt css to display underconstruction 
// @author: mahenza
import styled from "styled-components";
import device from "../../utils/device";

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-left: 5%;
  background: white;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;

& p{ margin: 0px; }

& .clip{
  /*
  Ensure background is added first
  */
  background: linear-gradient(to bottom, #eee, rgba(222,112,6,0.2), #ee2e31),url(http://in-poin.mahenza.com/wp-content/uploads/2021/04/bg-underconst-1.jpg);

  //  background-attachment: fixed;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-family: "AlphaMack AOE";
  font-size: 12vw;
  font-weight: bold;
  text-align: center;
}
`;

export const BlackTitle = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #303030;
  text-transform: uppercase;
  text-align: left;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 20px;
}
`;