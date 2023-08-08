import React from 'react'
import { useState } from 'react'
import './Counter.scss'
import Button from '../Button/Button';

function Counter() {
  const [numClicks, setNumClicks]  = useState(0)

  const handleClick = () => {
    setNumClicks(curr => curr + 1)
  }

  const handleRestart = () => {
    setNumClicks(0)
  }

  return (
    <>
      <section className='counter'>
        <span
          className='counter__container'>
          {numClicks}
        </span>
      </section>
      <section className='counter__buttons-section'>
        <Button
          isButtonClick={true}
          text= 'Click'
          onClick={handleClick}
        />
        <Button
          isButtonClick={false}
          text= 'Restart'
          onClick={handleRestart}
        />
      </section>
    </>
  )
}

export default Counter