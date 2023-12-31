import React from 'react'
import './Testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: "I have worked with this freelancer for over two years, in that time we've done many projects together. He does work that's higher than standard, his communication skills are good and he is very easy to work with. In the projects we've worked on together there has never been any issues. I would definitely recommend hiring him."
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review: "I have worked with the freelancer on a number of projects and always enjoyed working together. The freelancer has a great understanding of the industry, which helps us solve problems quickly and effectively. If you are looking for someone who can take ownership of your project and get it done, then I highly recommend this freelancer."
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review: "I had a great experience working with the freelancer[Name]. We were able to complete the SEO project ahead of schedule, with creative ideas that really tested well with our target audience. We would like to work together again in the future."
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review: "He has been a great freelancer to work with I have worked with him several times and he always delivers high quality work. The communication is also great, he responds quickly to messages and all in all very pleasant to work with."
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials 