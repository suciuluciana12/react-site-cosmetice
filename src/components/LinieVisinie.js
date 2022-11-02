import React from 'react'
import styled from 'styled-components'
const Line = styled.div`
  background-color: rgba(184, 49, 114, 1);
  width: 100%;
  font-size: 18px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  padding: 10px;
  color: white;
`

const LinieVisinie = () => {
  return (
    <Line>
      Transport prin curier Sameday: 16ron cu plata în cont și 20ron cu ramburs
      , la primirea pachetului
    </Line>
  )
}

export default LinieVisinie
