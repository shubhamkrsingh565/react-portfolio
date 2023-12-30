import React from 'react'
import './Portfolio.css';

import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    "title": "Crypto currency dashboards and financial data visualization",
    "github": "https://github.com",
    "demo": "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization"
  },
  {
    id: 2,
    image: IMG2,
    "title": "EOrion UI kit - Charts templates & infographics in Figma",
    "github": "https://github.com",
    "demo": "https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templetes-infographics-in-Figma"
  },
  {
    id: 3,
    image: IMG3,
    "title": "Eclipse - Figma dashboard UI kit for data design web apps",
    "github": "https://github.com",
    "demo": "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
  },
  {
    id: 4,
    image: IMG4,
    "title": "Maintaining tasks and tracking progress",
    "github": "https://github.com",
    "demo": "https://dribbble.com"
  },
  {
    id: 5,
    image: IMG5,
    "title": "Charts templates & infographics in Figma",
    "github": "https://github.com",
    "demo": "https://dribbble.com"
  },
  {
    id: 6,
    image: IMG6,
    "title": "Charts templates & infographics in Figma",
    "github": "https://github.com",
    "demo": "https://dribbble.com"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2> 

      <div className="container portfolio_cotainer">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
} 

export default Portfolio