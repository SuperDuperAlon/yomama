'use client'

import  {CiLocationOn}  from 'react-icons/ci'
import  {BsTelephone}  from 'react-icons/bs'
import {AiOutlineClockCircle}  from 'react-icons/ai'



function Footer() {

  const contact = [{
    img: <CiLocationOn />,
    content: 'Shderot Hen 20, Tel Aviv, Israel'
  },
  {
    img: <AiOutlineClockCircle />,
    content: 'open for work'
  },
  {
    img: <BsTelephone />,
    content: '+972-50-443-8778'
  },
  {
    img: '',
    content: 'alonmlievski@gmail.com'
  }]

  return (
    <footer className=''>
      <div className='footer-container'>
        <div>Yomama</div>
        <div>Contact
          <ul>
            {contact.map((con, idx) => (
              <li key={idx} className='flex flex-row'>
                {/* {console.log(con.img)} */}
                <div>{con.img}</div>
                <div>{con.content}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>Information</div>
        <div>Whatsapp</div>
      </div>
    </footer>
  )
}

export default Footer