import React from 'react'
import logo from './images/trollface.png'
function Header() {
  return (
     <div className="header">
    <img className='header-img' src={logo} alt="" />
    <h2 className="h2text">Meme-Generator</h2>
    <h4 className='h4course'>React-Course</h4>
   </div>
  )
}

export default Header