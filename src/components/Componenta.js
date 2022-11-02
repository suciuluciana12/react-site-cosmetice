import React from 'react'
import { Container } from 'react-bootstrap'
import FilterButtons from './FilterButtons'
import { FilterButtonsData } from './FilterButtonsData'
import HeaderImg from '../components/HeaderImg'
import ListaProduseSelectate from './ListaProduseSelectate'

const Componenta = ({
  categorie_principala,
  titluComponenta,
  dateFunctieDeCategorie,
}) => {
  const existaFiltre = FilterButtonsData.some((item) => {
    return item.categorie_principala === categorie_principala
  })
  const stil = {
    mainWrap: {
      padding: '0',
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titlu: {
      marginTop: '20px',
      textAlign: 'center',
    },
    linie: {
      width: '20%',
      height: '3px',
      backgroundImage: 'url(/images/header/2.jpg',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center right',
      marginLeft: '50%',
      transform: 'translateX(-50%)',
    },
    filterButtons: {
      marginTop: '0px',
    },
  }

  return (
    <>
      {/* <HeaderImg /> */}
      {dateFunctieDeCategorie && (
        <Container xs="auto" fluid="lg" style={stil.mainWrap}>
          <h1 style={stil.titlu}> {titluComponenta}</h1>
          {existaFiltre && (
            <FilterButtons
              categorie_principala={categorie_principala}
              style={stil.filterButtons}
            />
          )}
          <ListaProduseSelectate
            dateFunctieDeCategorie={dateFunctieDeCategorie}
          />

          <img
            src="/images/componentaImg/1.png"
            style={{
              width: '40%',
              transform: 'rotate(0deg)',
            }}
          />
        </Container>
      )}
    </>
  )
}

export default Componenta
