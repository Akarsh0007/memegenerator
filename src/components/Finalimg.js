import React from 'react'

function Finalimg(props) {
  return (
    <div className='finalimg'> 
            <img src={props.img} alt="" className='meme-img' />
            <h3 className='meme top'>{props.toptext}</h3>
            <h3 className='meme bottom'>{props.bottomtext}</h3>
    </div>
  )
}

export default Finalimg