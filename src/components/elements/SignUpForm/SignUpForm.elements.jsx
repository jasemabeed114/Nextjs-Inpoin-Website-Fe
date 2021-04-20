import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
  /* height: auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 20px 0;
  background-image: url("http://in-poin.mahenza.com/wp-content/uploads/2021/03/A0.-Visual.png") !important;
  background-size: 443px 641px;
  height: 800px; 
  background-position: 56% 50%;;
  background-repeat: no-repeat; 
  /*background: linear-gradient(95.65deg, #f1f2f7 -19.48%, #d9bbbe 100%);*/
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* margin: 10px 20vw; */
  /* height: 80%; */
  width: 300px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: white;
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
  /* align-self: flex-start; */
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

export const SubmitButton = styled.button`
  color: white;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  height: 30px;
  margin: 0 0 10px 0;
  outline: none;
  background: #EE2D30;
&:active {
   background: white;
   color: #EE2D30;
   transition:all .3s ease-out;
`;