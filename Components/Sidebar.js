import React, { useState } from "react";
import CoinbaseLogo from "c:/Users/Omar2/Desktop/All/Cyber World/cyberworld-exchange/assets/cb-logo.png"
import styled from "styled-components"
import Image from "next/image";
import { navItems } from "../Static/navItems"

const Sidebar = ({setAction}) => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title)

  return (
    <Wrapper>
      {/* <LogoContainer>
        <Logo>
          <Image src={CoinbaseLogo} alt = "Coinbase Logo" />
        </Logo>
      </LogoContainer> */}
      <NavItemsContainer>
        {navItems.map((item, index) => (
          <NavItem key={index} onClick={() =>  {setActiveIcon(item.title); setAction(index); console.log(setAction);}}>
            <NavIcon style = {{ color: item.title === activeIcon && '#FFA500'}}>
              {item.icon}
            </NavIcon>
            <Navtitle>{item.title}</Navtitle>
          </NavItem>
        ))}
      </NavItemsContainer>
    </Wrapper>
  )
}
  
export default Sidebar

const Wrapper = styled.div`
    height: calc(130vh);
    border-right: 3px solid #66cad8;
    width: calc(24rem - 98px - 16px);
    padding: 0 1rem;
`
const LogoContainer = styled.div `
    margin: 1rem 0;
`

const Logo = styled.div`
    width: 100%;
    object-fit: contain;
    margin-left: 0rem;
`

const NavItemsContainer = styled.div`
    margin-top: 0.7rem;

    &:hover {
        cursor: pointer;
    }
`

const NavItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.22rem;
    font-weight: 500;
    border-radius: 0.5rem;
    height: 5rem;

    &:hover {
        border-right: 3px solid #66cad8;
        border-left: 3px solid #66cad8;
        background-color: #141519;
    }
`

const NavIcon = styled.div`
    // background-color: #141519;
    padding: 0.7rem;
    border-radius: 50%;
    margin: 0 0.5rem;
    display: grid;
    place-items: center;
`

const Navtitle = styled.div`
    
`