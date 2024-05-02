import React from 'react'
import resume from '../assets/Berel Levy resume.pdf'

const ResumeLink = () => {
  return (
    <a href={resume} download="Berel-Levy-Resume.pdf">
      resume
    </a>
  )
}


export default ResumeLink