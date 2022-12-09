import React from 'react'

export default function Contact() {
  return (
    <div className='conatct_page container'>
      <h1>Contact</h1>
      <div className='contact_name'>
        <div><input type="text" placeholder="Please Enter Your name "/></div>
      <br/><div><input type="email" placeholder="Please enter your email address"/></div>
      <br/><div><input type="date"/></div>
      <br/><div><input type="submit"/></div>
      </div>
      
    </div>
  )
}
