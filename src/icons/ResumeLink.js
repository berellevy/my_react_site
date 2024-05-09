import React from 'react'
import resume from '../assets/BerelLevy_Resume.pdf'

const ResumeLink = () => {
  return (
    <a href={resume} className='text-light' download="BerelLevy_Resume.pdf">
      Resume
    </a>
  )
}


export default ResumeLink