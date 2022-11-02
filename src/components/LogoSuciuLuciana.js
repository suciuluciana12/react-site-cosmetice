import React from 'react'
import './LogoSuciuLuciana.css'
import '../fonts/Breathing.ttf'

const LogoSuciuLuciana = () => {
  return (
    <div className="logo-content">
      <div>
        <div className="d-flex">
          <div>@2022 </div>
          <div className="ms-2">POWERED BY</div>
        </div>
        <div className="text-center">(React App)</div>
      </div>

      <div className="logo ">
        <img
          src="/images/logo-suciu-luciana/2.svg"
          style={{ width: '100px', height: '100px' }}
        />
        <div className="logo-text">
          <div className="nume">Luciana Suciu</div>
          <div className="rights">ALL RIGHTS RESERVED</div>
        </div>
      </div>
    </div>
  )
}

export default LogoSuciuLuciana
