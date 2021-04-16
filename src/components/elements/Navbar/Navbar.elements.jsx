import styled from "styled-components";

import { Container } from "../../utils/globalStyles"

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 40px;
padding-top: 15px;

${Container}
`;

export const NavLogo = styled.img`
    justify-seld: flex-start;
    cursor: pointer;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

@media screen and (max-width: 960px){
    color: #ef2e31;
    display: block;
    postion: absolute;
    top: 0;
    right: 0;
    transform: translate(-100, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center; 
    list-style-type: none;
@media screen and (max-width: 960px){
    display: none;
}
`;

export const NavItem = styled.li`
    float: left;

    
    @media screen and (max-width: 960px){
        width: 100%;
        &:hover{
            border: none;
    }
}
`;

export const NavLinks = styled.a`
    display: flex;
    align-items: center;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    background-color: ${({ active }) => active ? '#ef2e31;' : 'none;'}
    border-radius: 10px;
    margin-left: 16px;
    &:hover{
        background-color: #ef2e31;
        border-radius: 15px 0 15px 0;
        transition: all 0.5s ease;
    }
    &:active{
        background: linear-gradient(180deg, #ef2e31 0%, #fe5659 100%);
        border-radius: 10px;
    }
    
@media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover{
        background-color: #111;
        border-radius: 15px 0 15px 0;
        transition: all 0.5s ease;
    }
}
`;
