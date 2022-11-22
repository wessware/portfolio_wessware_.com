
import React, { useContext, useRef, useState } from 'react'
import './contact.css'
import Phone from '../../images/whatsapp.png'
import Email from '../../images/mail.png'
import Address from '../../images/address.png'
import Telegram from '../../images/telegram.png'


import emailjs from 'emailjs-com'
import { ThemeContext } from '../../context'

const Contact = () => {
    
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_03iufwz', 
            'template_zke4mld', 
            formRef.current, 
            'Xq3_gJ0Xlxk2YZXzc')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, 
      (error) => {
          console.log(error.text);
      })
  }

  return (
    <div className='c'>
        <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'> Talk to Wessware </h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img src={Phone} alt='' className='c-icon'/>
                            +254 799 762 433
                        </div> 
                        <div className='c-info-item'>
                            <img src={Email} alt='' className='c-icon'/>
                            admin@wessware.com
                        </div> 
                        <div className='c-info-item'>
                            <img src={Telegram} alt='' className='c-icon'/>
                            https://t.me/wessware  
                        </div> 
                        <div className='c-info-item'>
                            <img src={Address} alt='' className='c-icon'/>
                            PTM-04-Juja, Nairobi Kenya. 
                        </div> 
                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                    <b> Do you want a service? </b>
                    Contact Wessware at any time 24/7 to book our services.
                    We work to ensure your details are kept safe on our servers and a timely response to your request. 
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && '#333'}} type='text' placeholder='Name' name='user_name'/>
                        <input style={{backgroundColor: darkMode && '#333'}} type='text' placeholder='Subject' name='user_subject'/>
                        <input style={{backgroundColor: darkMode && '#333'}} type='text' placeholder='Email' name='user_email'/>
                        <textarea style={{backgroundColor: darkMode && '#333'}} rows='5' placeholder='Message' name='message'/>
                        <button>Submit</button>
                        {done && "Message Sent to Wessware!"}
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Contact