import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import ProdusCard from './ProdusCard'

const stil = {
  cardsContainer: {
    padding: '30px',
  },
  col: {
    marginTop: '10px',
    marginLeft: '1px',
    marginRight: '1px',
  },
}

const ListaProduseSelectate = ({ dateFunctieDeCategorie }) => {
  return (
    <>
      {dateFunctieDeCategorie && (
        <Container fluid="lg" style={stil.cardsContainer}>
          <Row xs="auto" className="justify-content-center  ">
            {dateFunctieDeCategorie.map((itemProduse) => {
              return (
                <Col style={stil.col} key={itemProduse.id}>
                  <ProdusCard produs={itemProduse} />
                </Col>
              )
            })}
          </Row>
        </Container>
      )}
    </>
  )
}

export default ListaProduseSelectate
