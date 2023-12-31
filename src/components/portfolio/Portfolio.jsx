import React from 'react'
import './Portfolio.css';

import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5A.png';
import IMG6 from '../../assets/portfolio6a.jpg';


const data = [
  {
    id: 1,
    image: IMG1,
    "title": "E-commerce Shopping Website",
    "github": "https://github.com/shubhamkrsingh565",
    "demo": "https://go-eshopping.netlify.app/"
  },
  {
    id: 2,
    image: IMG2,
    "title": "Bike sales currency dashboards and financial data visualization",
    "github": "https://github.com/shubhamkrsingh565",
    "demo": "ttps://github.com/shubhamkrsingh565"
  },
  {
    id: 3,
    image: IMG3,
    "title": "Data Analyst Portfolio",
    "github": "https://github.com/shubhamkrsingh565/shubhamkrsingh565.github.io",
    "demo": "https://shubhamkrsingh565.github.io/"
  },
  {
    id: 4,
    image: IMG4,
    "title": "E-Banking App using Java",
    "github": "https://github.com/shubhamkrsingh565/Bank-Management-System-ATM",
    "demo": "https://github.com/shubhamkrsingh565/Bank-Management-System-ATM"
  },
  {
    id: 5,
    image: IMG5,
    "title": "Favorite foods website, pure HTML",
    "github": "https://github.com/shubhamkrsingh565/favoritefoods.github.io",
    "demo": "https://shubhamkrsingh565.github.io/favoritefoods.github.io/"
  },
  {
    id: 6,
    image: IMG6,
    "title": "Indian railway website clone",
    "github": "https://github.com/shubhamkrsingh565/Bharat_Railway",
    "demo": "https://github.com/shubhamkrsingh565/Bharat_Railway"
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