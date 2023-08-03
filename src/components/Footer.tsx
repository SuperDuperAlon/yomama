'use client'

import { CiLocationOn } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'



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
  }]

  const socialIcons = [
    {
      img: 'fb'
    },
    {
      img: 'wa'
    },
    {
      img: 'gh'
    },
    {
      img: 'li'
    },
  ]


  const infromation = [
    { content: 'terms of use' },
    { content: 'payment and delivery' },
    { content: 'personal data protection' },
    { content: 'customer service' },
  ]

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
            <li className='flex flex-row'>alonmlievski@gmail.com</li>
            <li className='flex flex-row'>
              {
                socialIcons.map((icon, idx) => (
                  <div key={idx}>
                    <div>{icon.img}</div>
                  </div>
                ))
              }
            </li>
          </ul>
        </div>
        <div>Information
          <ul>
            {infromation.map((info, idx) => (
              <li key={idx} className='flex flex-row'>
                {info.content}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button>
            Whatsapp
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer