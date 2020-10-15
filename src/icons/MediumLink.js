import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const MediumLink = () => {
  return (
    <a href="https://medium.com/@berellevy" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faMedium} />
    </a>
  )
}


export default MediumLink