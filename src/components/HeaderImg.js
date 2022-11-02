import React from 'react'
import MediaQuery from 'react-responsive'
import { Row } from 'react-bootstrap'
import styled from 'styled-components'

const HeaderImgText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 2px 2px black;
  @media (max-width: 500px) {
    text-shadow: 0.5px 0.5px black;
  }
`

const HeaderImgText1 = styled.div`
  font-size: 100px;
  font-family: 'Oooh Baby';
  color: rgba(184, 49, 114, 1);

  @media (max-width: 1000px) {
    font-size: 80px;
  }

  @media (max-width: 500px) {
    font-size: 50px;
  }
`
const HeaderImgText2 = styled.div`
  font-size: 80px;
  font-family: 'Oooh Baby';
  color: rgba(184, 49, 114, 1);

  @media (max-width: 1000px) {
    font-size: 60px;
  }

  @media (max-width: 500px) {
    font-size: 45px;
  }
`
const HeaderImg = () => {
  return (
    <div className="position-relative">
      <MediaQuery maxWidth={500}>
        <Row>
          <img
            src="/images/headerImg/9.jpg"
            style={{
              opacity: '70%',
              boxShadow: '0 3px 7px 0 rgba(0, 0, 0, 0.3)',
            }}
          />
          <HeaderImgText>
            <HeaderImgText1>Lucille Natural </HeaderImgText1>
            <HeaderImgText2>Care</HeaderImgText2>
          </HeaderImgText>
        </Row>
      </MediaQuery>
      <MediaQuery minWidth={500} maxWidth={800}>
        <Row>
          <img src="/images/headerImg/9.jpg" style={{ opacity: '70%' }} />
          <HeaderImgText>
            <HeaderImgText1>Lucille Natural </HeaderImgText1>
            <HeaderImgText2>Care</HeaderImgText2>
          </HeaderImgText>
        </Row>
      </MediaQuery>
      <MediaQuery minWidth={800} maxWidth={1100}>
        <Row>
          <img src="/images/headerImg/9.jpg" style={{ opacity: '80%' }} />
          <HeaderImgText>
            <HeaderImgText1>Lucille Natural </HeaderImgText1>
            <HeaderImgText2>Care</HeaderImgText2>
          </HeaderImgText>
        </Row>
      </MediaQuery>
      <MediaQuery minWidth={1100}>
        <Row>
          <img src="/images/headerImg/8.jpg" style={{ opacity: '70%' }} />
          <HeaderImgText>
            <HeaderImgText1>Lucille Natural </HeaderImgText1>
            <HeaderImgText2>Care</HeaderImgText2>
          </HeaderImgText>
        </Row>
      </MediaQuery>
    </div>
  )
}

export default HeaderImg
