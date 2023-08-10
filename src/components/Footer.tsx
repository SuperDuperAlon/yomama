'use client'

import { CiLocationOn } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdOutlineMail } from 'react-icons/md'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'
import { FiGithub } from 'react-icons/fi'



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
      img: <FaFacebookF />,
      link: 'https://www.facebook.com/alon.mlievski'
    },
    {
      img: <FaWhatsapp />,
      link: "https://wa.me/972504438778"
    },
    {
      img: <FiGithub />,
      link: "https://github.com/SuperDuperAlon"

    },
    {
      img: <GrLinkedinOption />,
      link: "https://www.linkedin.com/in/alon-mlievski-6756aa74/"
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
                <div className='number'>{con.content}</div>
              </li>
            ))}
            <li className='flex flex-row py-2'>
              {
                socialIcons.map((icon, idx) => (
                  <div key={idx}>
                    <a href={icon.link}>

                      <div className='text-xl mr-2 py-2'>{icon.img}</div>
                    </a>
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
          <a href="https://wa.me/972504438778" target='_blank' className='white-sqr-btn'>
            <button>Whatsapp</button>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer