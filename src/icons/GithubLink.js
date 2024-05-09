import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const GithubLink = () => {
  return (
    <a 
      href="https://github.com/berellevy" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon className='text-light' icon={faGithub} />
    </a>
  )
}


export default GithubLink