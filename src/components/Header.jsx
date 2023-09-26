import React from 'react'
import Covid from "../assets/Covid"

function Header() {
  return (
    <div className="headerWrapper">
    <div className='header'>C<span><Covid/></span>VID</div>
    <div className="header-text">
      <div className="header-text-inner1">Global and Country Wise Cases of Corona Virus</div>
      <div className="header-text-inner2">(For a Particlar select a Country from below)</div>
    </div>
    </div>
    
  )
}

export default Header