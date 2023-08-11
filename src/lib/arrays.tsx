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

interface IconsType {
  icon: JSX.Element;
  desc: string
}

const heroIcons: IconsType[] = [
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

const footerContact: IconsType[] = [{
  icon: <CiLocationOn />,
  desc: 'Bursa, Ramat Gan, Israel'
},
{
  icon: <AiOutlineClockCircle />,
  desc: 'Open for work'
},
{
  icon: <BsTelephone />,
  desc: '+972-50-443-8778'
},
{
  icon: <MdOutlineMail />,
  desc: 'alonmlievski@gmail.com'
}]

const footerSocialIcons: IconsType[] = [
  {
    icon: <FaFacebookF />,
    desc: 'https://www.facebook.com/alon.mlievski'
  },
  {
    icon: <FaWhatsapp />,
    desc: "https://wa.me/972504438778"
  },
  {
    icon: <FiGithub />,
    desc: "https://github.com/SuperDuperAlon"

  },
  {
    icon: <GrLinkedinOption />,
    desc: "https://www.linkedin.com/in/alon-mlievski-6756aa74/"
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