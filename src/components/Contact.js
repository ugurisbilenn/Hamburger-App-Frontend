import React from 'react'
import BannerImage from '../assets/banner.png';
import '../styles/Contact.css';
function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${BannerImage})`}}>

      </div>
      <div className='rightSide'>
      <h1>Bizimle İletişime Geçin</h1>
      <form>
        <label>Ad Soyad</label>
        <input 
        type="text" 
        name="name" 
        placeholder='Lütfen Ad Soyad Girin'/>
        <label>Email</label>
        <input 
        type="email" 
        name="email" 
        placeholder='Lütfen Email Girin'/>
        <label>Mesajınız</label>
        <textarea 
        rows="6"
        name="mesaj" 
        placeholder='Lütfen Mesaj Girin'>

        </textarea>
      </form>
      </div>
    </div>
  )
}

export default Contact
