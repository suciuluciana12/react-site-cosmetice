import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SideNavLinkLabel = styled.div`
  color: white;
  display: flex;
  padding: 15px;
  font-family: 'Mali';
  font-weight: 600;
  &:hover {
    font-weight: bold;
  }
`
const SideNavDropDown = styled.div`
  margin-left: 10px;
`
const SideNavDropDownLabel = styled.div`
  color: white;
  padding: 10px;
  margin-left: 0.5em;
  font-family: 'Mali';
  font-weight: 500;
`
const navLinkStyle = ({ isActive }) => {
  return { textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' }
}
const SideNavLinkItem = ({ item, showSideNav }) => {
  const [subnav, setSubnav] = useState(false)
  const showSubnav = () => {
    setSubnav(!subnav)
  }
  return (
    <div>
      <NavLink
        to={item.path}
        style={navLinkStyle}
        onClick={item.subNav ? showSubnav : showSideNav}
        className="d-flex align-items-center  p-2"
      >
        <SideNavLinkLabel>{item.title}</SideNavLinkLabel>
        <div style={{ color: 'white' }}>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </NavLink>

      <SideNavDropDown>
        {subnav &&
          item.subNav.map((itemDropDown, index) => {
            return (
              <NavLink
                to={itemDropDown.path}
                key={index}
                style={navLinkStyle}
                onClick={showSideNav}
              >
                <SideNavDropDownLabel>
                  {itemDropDown.title}
                </SideNavDropDownLabel>
              </NavLink>
            )
          })}
      </SideNavDropDown>
    </div>
  )
}

export default SideNavLinkItem
