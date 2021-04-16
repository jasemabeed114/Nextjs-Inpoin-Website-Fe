import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px 10px;
  background: white;
  box shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 10px 10px;
`;

export const DataGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const DataLabelGroup = styled.div`
  display: flex;
  align-self: flex-start;
`;
export const DataLabel = styled.label`
  font-weight: 600;
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
  height: 40px;
  margin: 40px 0 10px 0;
  outline: none;
  background: #EE2D30;
&:active {
   background: white;
   color: #EE2D30;
   transition:all .3s ease-out;
`;

export const MultiSelect = styled.div`
  width: 200px;
`;

export const SelectBox = styled.div`
  width: 100%;
  font-weight: bold;
`;

export const OverSelect = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const CheckBoxes = styled.div`
  display: none;
  border: 1px #dadada solid;
`;

export const CheckBoxesLabel = styled.label`
  display: none;
  border: 1px #dadada solid;
&:hover {
  background-color: #1e90ff;
}
`;