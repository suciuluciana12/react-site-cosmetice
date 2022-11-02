import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const DetaliiProdus = ({ productData }) => {
  const { id } = useParams()
  const produs = productData.find((item) => {
    return parseInt(item.id) === parseInt(`${id}`)
  })

  const stil = {
    containerWrap: { paddingBottom: '30px' },
    header: {
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '30px',
    },
    titlu_header: {
      fontSize: '22px',
      marginLeft: '10px',
    },
    titlu: {
      textAlign: 'center',
      marginTop: '20px',
      color: ' #ff9913',
    },
    compozitie: {
      fontSize: '15px',
    },
    valabilitateRow: {
      marginTop: '20px',
      textAlign: 'center',
    },
    titlu_valabilitate: {
      fontSize: '15px',
      color: ' #ff9913',
    },
    text_valabilitate: {
      fontSize: '13px',
    },
    titlu_pret: {
      fontSize: '15px',
      color: ' #ff9913',
    },
  }
  return (
    <>
      {produs && (
        <Container style={stil.containerWrap}>
          <Row>
            <Col style={stil.header}>
              <img
                src={produs.src}
                style={{ width: '150px', height: '200px' }}
              />
              <h3 style={stil.titlu_header}>{produs.titlu}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 style={stil.titlu}>Compoziția produsului : </h5>
              <div style={stil.compozitie}>{produs.compozitie}</div>
            </Col>
          </Row>

          <Row style={stil.valabilitateRow}>
            <Col>
              <h5 style={stil.titlu_valabilitate}>Valabilitate : </h5>
              <div style={stil.text_valabilitate}>{produs.valabilitate}</div>
            </Col>
            <Col>
              <h5 style={stil.titlu_pret}>Preț : </h5>
              <div style={stil.text_pret}>{produs.pret}</div>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5 style={stil.titlu}>Descrierea produsului : </h5>

              {produs &&
                produs.descriere_produs.map((item, index) => {
                  return <div key={index}>{item.descriere}</div>
                })}
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 style={stil.titlu}>Descrierea ingredientelor : </h5>
              {produs &&
                produs.descriere_ingrediente.map((item, index) => {
                  return <div key={index}>{item.descriere}</div>
                })}
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default DetaliiProdus
