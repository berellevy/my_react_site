import React from 'react'
import resume from '../assets/Berel_Levy_Resume.docx'

const ResumeLink = () => {
  return (
    <a href={resume} download>
      Download my resume
    </a>
  )
}


export default ResumeLink