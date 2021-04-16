import React, { useState } from "react";
import {FaBars, FaTimes, FaHome, FaTicketAlt, FaUsers, FaPaperPlane} from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import Link from "next/link";
import { useRouter } from 'next/router';

import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from "./Navbar.elements";

function Navbar()  {     
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const router = useRouter();
  const { pathname } = router;

  return(
    <IconContext.Provider value={{ color: "#fff"}}>  
      <Nav>                    
        <NavbarContainer>
          {/* <MobileIcon onClick={handleClick} >
              {click ? <FaTimes /> : <FaBars />}
          </MobileIcon> */}
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <Link href="/" passHref>
                <NavLinks active={pathname === '/'}> 
                  {pathname === '/' && <FaHome className="mr-8px" />} 
                  Home 
                </NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/product-and-services" passHref>
                <NavLinks active={pathname === '/product-and-services'}>
                  {pathname === '/product-and-services' && <FaTicketAlt className="mr-8px" />} 
                  Product & Services
                </NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/login" passHref>
                <NavLinks active={pathname === '/login'}> 
                  {pathname === '/login' && <FaUsers className="mr-8px" />} 
                  Community 
                </NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/contact-us" passHref>
                <NavLinks active={pathname === '/contact-us'}> 
                  {pathname === '/contact-us' && <FaPaperPlane className="mr-8px" />} 
                  Contact Us
                </NavLinks>
              </Link>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>

  )
}

export default Navbar;