import React,{useRef} from 'react';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Button from '../Button/Button';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footerpage from '../Footer/Footerpage';
import './Contact.css'
import { useState } from 'react';
const ContactForm = () => {
  const notify = () => toast("Message sent successfully !");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${process.env.REACT_APP_YOUR_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current,{
          publicKey:`${process.env.REACT_APP_Public_Key}`,
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      notify();
  };
  
  return (
    <>
    <div className='contact-section'> 
    <section className='form_section'>
         <ToastContainer />
        <div className='left-form-side'>
          <div className='contact_form'>
              <Button isOutline='true' text='chaudharyranjit459@gmail.com' icon={<HiMail fontSize='20px'/>}></Button>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className='form_control'>
              <label htmlFor="name">Name</label>
              <input type="text" name='user_name' placeholder='Jhon Peter' className='form-input'/>
            </div>

            <div className='form_control'>
              <label htmlFor="email">Email</label>
              <input type="text" name='user_email' placeholder='abc@example.com' className='form-input'/>
            </div>

            <div className='form_control'>
              <label htmlFor="text">Text</label>
              <textarea type="text" name='message' placeholder='Discription' className='form-input'/>
            </div>
            <div className='submit'>
              <Button text='SUBMIT'  />
            </div>
          </form>
          </div>
        <div className='contact_image'>
          <img src="/images/image2.png" alt="image" />
        </div>
    </section>
    </div>
    <div>
    <Footerpage/>
    </div>
    </>
  )
}

export default ContactForm;