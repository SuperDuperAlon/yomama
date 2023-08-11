import { PiShootingStar, PiMagicWand, PiHandHeart } from 'react-icons/pi'
import { CiLocationOn } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdOutlineMail } from 'react-icons/md'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'
import { FiGithub } from 'react-icons/fi'

const headerLinks = [
    { name: 'Products' },
    { name: 'About' },
    { name: 'Workshop' },
    { name: 'Contact' }
  ]

const heroIcons = [
    {
        icon: <PiShootingStar />,
        desc: 'Fresh flowers'
    },
    {
        icon: <PiMagicWand />,
        desc: 'Unique designs'
    },
    {
        icon: <PiHandHeart />,
        desc: 'Customer care'
    },
]

const footerContact = [{
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
  }]

  const footerSocialIcons = [
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
    }]

    const footerInfo = [
        { content: 'terms of use' },
        { content: 'payment and delivery' },
        { content: 'personal data protection' },
        { content: 'customer service' },
      ]

    export const arrays = {
        headerLinks,
        heroIcons,
        footerContact,
        footerSocialIcons,
        footerInfo
    }