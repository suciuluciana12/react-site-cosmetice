import React, { useState } from 'react'
import styled from 'styled-components'
import { navData } from './navData'
import NavLinkItem from './NavLinkItem'
import * as FaIcons from 'react-icons/fa'
import SideNav from './SideNav'
import SocialMediaBar from './SocialMediaBar'
import LinieVisinie from './LinieVisinie'

const HeaderWrap = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ headerColor }) =>
    headerColor ? 'rgba(0,0,0,0.8)' : null};
`
const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 700px) {
    display: none;
  }
`

const HamburgerIcon = styled.div`
  box-shadow: ${({ headerColor }) =>
    headerColor ? '0 6px 10px 0 white' : '0 6px 10px 0 rgba(103,146,103, 1)'};
  color: ${({ headerColor }) =>
    headerColor ? 'white' : 'rgba(103,146,103, 1)'};
  position: absolute;
  right: 20px;
  font-size: 2em;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 5px;
  @media (min-width: 700px) {
    display: none;
  }
`

const Header = ({ subnav, setSubnav, showSubnav, dropdownRef }) => {
  const [headerColor, setHeaderColor] = useState(false)

  const changeHeaderColor = () => {
    if (window.scrollY >= 80) {
      setHeaderColor(true)
    } else {
      setHeaderColor(false)
    }
  }
  window.addEventListener('scroll', changeHeaderColor)

  const [sideNav, setSideNav] = useState(false)
  const showSideNav = () => {
    setSideNav(!sideNav)
  }

  return (
    <>
      <HeaderWrap headerColor={headerColor}>
        <SocialMediaBar />
        <Navbar>
          {navData.map((item, index) => {
            return (
              <NavLinkItem
                key={index}
                item={item}
                headerColor={headerColor}
                subnav={subnav}
                showSubnav={showSubnav}
                dropdownRef={dropdownRef}
              />
            )
          })}
        </Navbar>

        <HamburgerIcon to="#" headerColor={headerColor}>
          <FaIcons.FaBars onClick={showSideNav} />
        </HamburgerIcon>
        {sideNav && <SideNav showSideNav={showSideNav} />}
      </HeaderWrap>
      <LinieVisinie />
    </>
  )
}

export default Header
