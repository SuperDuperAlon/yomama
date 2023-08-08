'use client'

import { CiLocationOn } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdOutlineMail } from 'react-icons/md'
import { FaFacebookSquare, FaWhatsappSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa'



function Footer() {

  const contact = [{
    img: <CiLocationOn />,
    content: 'Bursa, Ramat Gan, Israel'
  },
  {
    img: <AiOutlineClockCircle />,
    content: 'Open for work'
  },
  {
    img: <BsTelephone />,
    content: '+972-50-443-8778'
  },
  {
    img: <MdOutlineMail />,
    content: 'alonmlievski@gmail.com'
  },
]

  const socialIcons = [
    {
      img: <FaFacebookSquare />
    },
    {
      img: <FaWhatsappSquare />
    },
    {
      img: <FaGithubSquare />
    },
    {
      img: <FaLinkedin />
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
              <li key={idx} className='flex flex-row gap-3'>
                <div>{con.img}</div>
                <div>{con.content}</div>
              </li>
            ))}
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
              <li key={idx} className='flex flex-row gap-3'>
                {info.content}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <a href="https://wa.me/972504438778" target='_blank'>
            <button>Whatsapp</button>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer