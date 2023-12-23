import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaPinterest } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com" target='_blank' rel="noreferrer"><FiGithub/></a>
        <a href="https://pinterest.com" target='_blank' rel="noreferrer"><FaPinterest/></a>
    </div>
  )
}

export default HeaderSocials