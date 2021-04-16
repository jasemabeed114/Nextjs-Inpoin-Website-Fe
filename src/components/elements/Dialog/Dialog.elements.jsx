import styled from "styled-components";

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

export { Dialog } from '@material-ui/core/';