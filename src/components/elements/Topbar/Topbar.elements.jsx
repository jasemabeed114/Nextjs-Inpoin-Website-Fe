import styled from "styled-components";
import device from "../../utils/device"

export const Container = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    width: 100%;
    z-index: 999;
    margin-top: 0;
    background: transparent;
    background-size: 100 % 100 %;
    background-color: transparent;
    background-repeat: no-repeat;

& nav{
  @media screen and (orientation: portrait){
  display: none;
  }
    position: absolute;
    top: 20px;
    right: 40px;
}

& img{
  @media screen and ${device.tabletL} and (min-width: 426px){
  width: 10%;
  left: 15px;
  }
  @media screen and (orientation: portrait){
    display: none;
  }
    position: absolute;
    width: 10%;
    left: 3%;
    top: 20px;
}
`;