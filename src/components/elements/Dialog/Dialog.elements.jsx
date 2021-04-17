import styled from "styled-components";
import { Dialog } from '@material-ui/core/';


export const DialogShowLandscape = styled(Dialog)`
& .MuiDialog-container {
    height: auto;
    outline: 0;
  }
& .MuiDialog-paperWidthSm {
    position: fixed; 
    top: 0;
  } 
& .MuiDialog-paper {
    margin: 0;
  }
  display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    
}
@media screen and (orientation: portrait){
  display: none;
}
`;

export const DialogContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: -webkit-fill-available;
`;

export const DialogDescription = styled.p`
  font-size: 28px;
  width: 280px;
  margin-bottom: 32px;
  font-weight: 900;
  text-align: center;
`;

// export { Dialog } from '@material-ui/core/';