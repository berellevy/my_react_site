import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const LinkedInLink = () => {
  return (
    <a href="https://www.linkedin.com/in/berellevy/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon className='text-light' icon={faLinkedinIn} />
    </a>
  )
}


export default LinkedInLink