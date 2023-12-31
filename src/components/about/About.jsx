import React from 'react'
import './About.css'
import ME from '../../assets/me-ALPHA_.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">

        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Images" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>

            <article className="about_card">
              <FiUsers className='about_icon' />
              <h5>Deploy</h5>
              <small>15+ Live</small>
            </article>

          </div>

          <p>
            As a passionate and dedicated professional, I am committed to applying my skills and experience in design and develop innovative applications across multiple platforms while staying upto-date with the latest advancements in technology. I thrive in challenging environments and am able to work effectively under pressure, managing my time efficiently to deliver high quality results.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About 