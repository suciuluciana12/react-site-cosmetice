import React from 'react'
import styled from 'styled-components'

const Eroare = styled.h1`
  color: red;
`

function ErrorPage() {
  return <Eroare>Eroare! Pagină inexistentă!</Eroare>
}

export default ErrorPage
