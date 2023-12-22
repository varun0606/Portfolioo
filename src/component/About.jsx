import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const About = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0iwfq3i', 'template_8seijao', form.current, 'i1A0HisATVWx3U_VG')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <>
      <div className='flex flex-col items-center justify-center  text-4xl mt-6' >
        <h1 className='dark:text-gray-200'> For any questions please contact us: </h1>
      </div>
      <form ref={form} onSubmit={sendEmail}
        className='flex flex-col items-center gap-3 mt-3' action="">
        <div className='flex flex-col items-center gap-3 mt-10 dark:bg-zinc-200 px-10 py-8 rounded-2xl shadow-2xl'>
          <input className=' bg-slate-50 rounded placeholder-black px-3 py-2 text-black p' type="text" placeholder='Enter your Full Name' name='user_name' required />
          <input className=' bg-slate-50 rounded px-3 py-2 placeholder-black' type="email" placeholder='Enter your Email' name='user_email' required />
          <input type="text" className=' bg-slate-50 rounded placeholder-black px-3 py-2' placeholder='Subject' name='subject' required />
          <textarea className=' bg-slate-50 rounded px-3 py-2' name="message" cols="30" rows="3"></textarea>
          <button type='submit' className=' bg-slate-700 px-3 py-2 text-white rounded-md'>Send Message</button>
        </div>
      </form>
    </>
  )
}

export default About