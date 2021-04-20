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
    position: absolute;
    top: 20px;
    right: 40px;
@media screen and (orientation: portrait){
  display: none;
  }
}

& img{
    position: absolute;
    top: 20px;
    left: 50px;
@media screen and (orientation: portrait){
  display: none;
}
}
`;

export const TopbarLogo = styled.img`
  width: 120px;
`;