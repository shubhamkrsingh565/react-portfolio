import React, { useRef } from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
// import {FaFacebookMessenger} from 'react-icons/fa'
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

// npm i  emailjs-com --save
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q43menp', 'template_2gztkeg', form.current, '4PnyzJ3MsnQRs0dDE')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>shubhamkrsingh565@gmail.com</h5>
            <a href="mailto:ramansinghlpu@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>shubhamkrsingh565</h5>
            <a href="https://m.me/shubhamkrsingh565" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8340XX XXXX</h5>
            <a href="api.whatsapp.com/send?phone=8340588280" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact