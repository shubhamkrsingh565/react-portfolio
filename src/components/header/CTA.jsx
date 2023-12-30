/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import CV from '../../assets/Fullstack_Developer.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#connect" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA