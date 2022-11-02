import React, { useState } from 'react'
import { FilterButtonsData } from './FilterButtonsData'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const FilterButton = styled.div`
  border: 2px solid #b83172;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  width: 160px;
  text-align: center;
  font-size: 15px;
  transition: ease background-color 250ms;
  ${({ active }) => active && 'color: white;background-color: #b83172;'};

  &:hover {
    color: white;
    background-color: #b83172;
  }
`

const FilterButtons = ({ categorie_principala }) => {
  const navigate = useNavigate()

  const filterButtons = FilterButtonsData.filter((item) => {
    return item.categorie_principala === categorie_principala
  })

  const [activeButton, setActiveButton] = useState(filterButtons[0].button_nr)
  return (
    <Container fluid="lg" className="mt-3">
      <Row xs="auto" className="justify-content-center ">
        {filterButtons.map((item) => (
          <Col key={item.button_nr} className="p-0">
            <FilterButton
              className="text-nowrap w-100"
              active={activeButton === item.button_nr}
              onClick={() => {
                setActiveButton(item.button_nr)
                navigate(`${item.button_path}`)
              }}
            >
              {item.button_text}
            </FilterButton>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default FilterButtons
