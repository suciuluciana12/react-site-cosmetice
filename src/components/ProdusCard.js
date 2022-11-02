import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import * as GoIcons from 'react-icons/go'
import styled from 'styled-components'

const CardButton = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: #b83172;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
`
const CardBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
`
const Pret = styled.div`
  color: green;
  text-align: center;
`
const ProdusCard = ({ produs }) => {
  const navigate = useNavigate()
  const stil = {
    img: {
      width: '100%',
      // height: '200px',
    },
    card: {
      width: '15rem',
      height: '100%',
      boxShadow: '0px 5px 5px lightgray',
    },
    titlu: {
      fontSize: '16px',
      textAlign: 'center',
    },
  }

  return (
    <Card
      className="d-flex flex-column align-items-center p-3 "
      style={stil.card}
    >
      <Card.Img style={stil.img} variant="top" src={produs.src} />
      <CardButton
        onClick={() => {
          navigate(`/produs/${produs.id}`)
        }}
      >
        <div className="me-2">
          <GoIcons.GoPlus />
        </div>
        <div>Detalii</div>
      </CardButton>
      <CardBody>
        <Card.Title style={stil.titlu}>{produs.titlu}</Card.Title>

        <Pret>{produs.pret}</Pret>
      </CardBody>
    </Card>
  )
}

export default ProdusCard
