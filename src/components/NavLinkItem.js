import { Dropdown } from 'bootstrap'
import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavLinkLabel = styled.div`
  display: flex;
  padding: 5px;
  font-size: 17px;
  font-family: 'Mali';
  font-weight: 500;
  color: ${({ headerColor }) => (headerColor ? 'white' : 'black')};
  &:hover {
    color: rgba(184, 49, 114, 1);
  }
`
const DropDown = styled.div`
  position: absolute;
  top: 65.2px;
  background-color: ${({ headerColor }) =>
    headerColor ? 'rgba(0, 0, 0, 0.8)' : '#eeeeee'};
`
const DropDownLabel = styled.div`
  padding: 15px;
  font-family: 'Mali';
  font-weight: 500;

  color: ${({ headerColor }) => (headerColor ? 'white' : 'black')};
`
const navLinkStyle = ({ isActive }) => {
  return {
    textDecoration: 'none',
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'rgba(184, 49, 114,1)' : 'black',
  }
}

const NavLinkItem = ({
  item,
  headerColor,
  subnav,
  showSubnav,
  dropdownRef,
}) => {
  return (
    <div className="position-relative" ref={item.subNav ? dropdownRef : null}>
      <NavLink
        to={item.path}
        style={navLinkStyle}
        onClick={item.subNav ? showSubnav : null}
        className="d-flex align-items-center  p-2"
      >
        <NavLinkLabel headerColor={headerColor}>{item.title}</NavLinkLabel>
        <div style={{ color: '#b83172' }}>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </NavLink>
      <DropDown headerColor={headerColor}>
        {subnav &&
          item.subNav &&
          item.subNav.map((element, index) => {
            return (
              <NavLink
                key={index}
                to={element.path}
                style={navLinkStyle}
                onClick={showSubnav}
              >
                <DropDownLabel headerColor={headerColor}>
                  {element.title}
                </DropDownLabel>
              </NavLink>
            )
          })}
      </DropDown>
    </div>
  )
}

export default NavLinkItem
