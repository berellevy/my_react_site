import React from 'react'
import resume from '../assets/Berel Levy resume.pdf'

const ResumeLink = () => {
  console.log(resume)
  return (
    <a href={resume} download>
      resume
    </a>
  )
}


export default ResumeLink