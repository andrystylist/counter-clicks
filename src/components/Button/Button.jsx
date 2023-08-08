import React from 'react'
import './button.scss'

function Button({ text, isButtonClick, onClick }) {
  return (
    <button
      className={ isButtonClick ? 'button button__click': 'button button__restart'}
      onClick= {onClick}>  
      {text}
    </button>
  )
}

export default Button