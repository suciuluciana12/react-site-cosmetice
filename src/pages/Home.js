import React from 'react'
import styled from 'styled-components'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HeaderImg from '../components/HeaderImg'

const HomeWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Content = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.5);
  width: 80%;
  background-color: white;
  padding: 10px;
`
const stil = {
  facebookLink: {
    marginLeft: '10px',
    marginRight: '10px',
    color: '#0dcaf0',
    fontWeight: '400',
  },
}
const Home = () => {
  return (
    <>
      <HeaderImg />
      <HomeWrap>
        <Content>
          <Row className="text-center  ">
            <h2 className="mt-4 fw-bold ">Cum se comandă?</h2>
            <h3 className="mt-2 fs-4">
              Comenzile se fac prin mesaj privat pe facebook
              <a
                style={stil.facebookLink}
                href="https://www.facebook.com/LucilleNaturalCare"
                target="_blank"
              >
                Lucille Natural Care
              </a>
              sau la telefon 0757761615.
            </h3>
            <h3 className="mt-2 fs-4">
              <span className="fw-bold">Transportul</span> se face numai prin
              curier Sameday , care ajunge în orice localitate din țară cu
              următorul tarif:
            </h3>
            <h3 className="mt-2 fs-4">
              - cu plata în cont (Raiffaisen,ING) : 16ron{' '}
            </h3>
            <h3 className="fs-4">- cu plata ramburs, la primire : 20ron </h3>
            <h3 className="mt-2 fs-4">
              În caz de produs neconform sau deteriorat la transport , acesta va
              fi înlocuit fără ca clientul să plătească ceva în plus.
            </h3>
            <h3 className="fs-4">
              Când faceți comandă, vă rog specificați cazul dvs în detaliu,
              pentru a vă putea recomanda cele mai potrivite produse.
            </h3>
          </Row>
        </Content>
      </HomeWrap>
    </>
  )
}

export default Home
