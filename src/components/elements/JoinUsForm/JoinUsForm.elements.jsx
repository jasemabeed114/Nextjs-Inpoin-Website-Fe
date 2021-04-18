//
// last updated: 16/04/2021
// @author: mahenza
import styled from "styled-components";
import device from "../../utils/device"

export const Container = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Column = styled.div`
  float: left;
  width: 100%;
  padding: 10px;

&. col-left{
  width: 10%;
}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 10px 10px;
  background: white;
  box shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 10px 10px;

@media screen and ${device.tabletL} and (min-width: 426px){
  background: none;
}
`;

export const DataGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

@media screen and ${device.tabletL} and (min-width: 426px){
  margin: 2px 0;
}
`;

export const DataLabelGroup = styled.div`
  display: flex;
  align-self: flex-start;
`;

export const DataLabel = styled.label`
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  font-size: large;
  color: #303030;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: small;
}
`;

export const ImportantSign = styled.p`
  color: red;
  margin: 0 5px;
`;

export const DataInput = styled.input`
  border-radius: 5px;
  border: 1px solid #adadad;
  height: 30px;
  padding: 10px;
&:focus {
  outline-style: none;
  box-shadow: none;
  border-color: #ff3a3a;
}

@media screen and ${device.tabletL} and (min-width: 426px){
  padding: 5px;
}
`;

export const DataDropdown = styled.select`
  border-radius: 5px;
  border: 1px solid #adadad;
  height: 50px;
  padding: 10px;
&:focus {
  outline-style: none;
  box-shadow: none;
}
`;

export const DataDropdownItem = styled.option``;

export const DataTextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid #adadad;
  padding: 10px;
&:focus {
  outline-style: none;
  box-shadow: none;
}
`;

export const SubmitButton = styled.button`
  color: white;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 40px;
  margin: 10px 0 10px 0;
  outline: none;
  background: #EE2D30;
&:active {
   background: white;
   color: #EE2D30;
   transition:all .3s ease-out;
`;
