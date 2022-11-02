import React from 'react'
import styled from 'styled-components'
import LogoSuciuLuciana from './LogoSuciuLuciana'
import SocialMediaBar from './SocialMediaBar'

const FooterWrap = styled.div`
  height: 150px;
  width: 100%;
  position: absolute;
  bottom: -150px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.6);
  z-index: 100;
  background-image: linear-gradient(
    rgba(15, 37, 32, 0.5),
    rgba(15, 37, 32, 0.7)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    height: 250px;
    bottom: -250px;
  }
`
const FooterContent = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 540px) {
    flex-direction: column;
  }
`
const Footer = () => {
  return (
    <>
      <FooterWrap>
        <FooterContent>
          <SocialMediaBar />
          <LogoSuciuLuciana />
        </FooterContent>
      </FooterWrap>
    </>
  )
}

export default Footer
