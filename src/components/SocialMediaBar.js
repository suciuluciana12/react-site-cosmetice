import React from 'react'
import styled from 'styled-components'

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const FacebookIcon = styled.a`
  color: #4267b2;
  font-size: 30px;
  margin-left: 15px;
  display: flex;
`
const InstagramIcon = styled.a`
  font-size: 30px;
  margin-left: 15px;
  color: red;
  display: flex;
`
const WhatsappIcon = styled.a`
  font-size: 30px;
  margin-left: 15px;
`
const SocialMediaBar = () => {
  return (
    <SocialMediaContainer>
      <FacebookIcon
        href="https://www.facebook.com/LucilleNaturalCare/"
        target="_blank"
      >
        <img
          src="/images/social-media-icons/facebook.png"
          style={{ height: '35px', width: '35px' }}
        />
      </FacebookIcon>
      <InstagramIcon href="https://www.instagram.com/" target="_blank">
        <img
          src="/images/social-media-icons/instagram.png"
          style={{ height: '35px', width: '35px' }}
        />
      </InstagramIcon>
      <WhatsappIcon
        href="https://wa.me/+40757761615"
        className="d-flex"
        style={{ color: '#25D366' }}
        target="_blank"
      >
        <img
          src="/images/social-media-icons/whatsapp.png"
          style={{ height: '35px', width: '35px' }}
        />
      </WhatsappIcon>
    </SocialMediaContainer>
  )
}

export default SocialMediaBar
